import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Supervisor exports DISABLE_HOT_RELOAD=true when the platform sets ENABLE_RELOAD=false.
const hotReloadDisabled = process.env.DISABLE_HOT_RELOAD === "true";

// Visual Edits (x-* JSX tagging, overlay, /edit-file endpoint) is dev-server-only by
// default (apply: serve); escape hatch mirrors DISABLE_HOT_RELOAD.
const visualEditsDisabled = process.env.DISABLE_VISUAL_EDITS === "true";

// Pod inotify quota is node-shared and routinely exhausted; native fs.watch EMFILEs at
// boot. Polling is the load-bearing default (set before Vite evaluates the config).
if (!hotReloadDisabled) {
  process.env.CHOKIDAR_USEPOLLING = "true";
}

// Load plugins with error handling
const loadPlugins = () => {
  const plugins = [react(), tailwindcss()];
  
  // Only add visual edits in development
  if (!visualEditsDisabled) {
    try {
      const { visualEdits } = require("@emergentbase/visual-edits/vite");
      plugins.push(visualEdits());
    } catch (e) {
      console.warn("[visual-edits] plugin failed to load, skipping:", e instanceof Error ? e.message : e);
    }
  }
  
  return plugins;
};

// https://vite.dev/config/
export default defineConfig({
  plugins: loadPlugins(),
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src") },
      // lucide 1.x dropped brand logos; src/lib/lucide-react.tsx restores them on top of the real package.
      { find: /^lucide-react$/, replacement: path.resolve(__dirname, "./src/lib/lucide-react.tsx") },
      { find: "lucide-react-upstream", replacement: path.resolve(__dirname, "./node_modules/lucide-react") },
      // recharts 3's Tooltip callback types reject the annotations agents write; src/lib/recharts.tsx adapts them.
      { find: /^recharts$/, replacement: path.resolve(__dirname, "./src/lib/recharts.tsx") },
      { find: "recharts-upstream", replacement: path.resolve(__dirname, "./node_modules/recharts") },
    ],
  },
  // Every shipped dep, pre-bundled up front. Vite discovers deps lazily, so the first
  // import outside the initial graph would trigger a re-optimize + reload mid-session.
  optimizeDeps: {
    include: [
      "@base-ui/react/button",
      "@base-ui/react/checkbox",
      "@base-ui/react/dialog",
      "@base-ui/react/input",
      "@base-ui/react/menu",
      "@base-ui/react/merge-props",
      "@base-ui/react/popover",
      "@base-ui/react/select",
      "@base-ui/react/tabs",
      "@base-ui/react/use-render",
      "@tanstack/react-query",
      "class-variance-authority",
      "clsx",
      "date-fns",
      "@icons-pack/react-simple-icons",
      "lucide-react-upstream",
      "motion/react",
      "next-themes",
      "react",
      "react-day-picker",
      "react-dom/client",
      "react-is",
      "react-router-dom",
      "recharts-upstream",
      "sonner",
      "tailwind-merge",
    ],
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false
  },
  server: {
    host: true,
    port: 3000,
    allowedHosts: true,
    // Preview probe + /edit-file are cross-origin from the Emergent tab; Vite defaults to localhost-only CORS.
    cors: true,
    // Build-error rendering: use Vite's default overlay in production
    hmr: hotReloadDisabled ? false : true,
    watch: hotReloadDisabled ? null : { usePolling: true, interval: 300 },
    // The /api proxy convention: frontend code calls relative /api/*, never an
    // absolute backend URL. Target is the FastAPI dev server (supervisor: backend).
    proxy: {
      "/api": {
        target: "http://localhost:8001",
        changeOrigin: true,
      },
    },
  },
});
