# Vercel Deployment Checklist ✅

Use this checklist to ensure your deployment goes smoothly.

## Pre-Deployment ⚙️

- [ ] **MongoDB Setup**
  - [ ] MongoDB Atlas cluster created
  - [ ] Database user created with read/write permissions
  - [ ] Connection string obtained
  - [ ] Network access configured (0.0.0.0/0 or specific IPs)

- [ ] **Code Repository**
  - [ ] Code pushed to Git repository (GitHub, GitLab, etc.)
  - [ ] All changes committed
  - [ ] Repository is accessible to Vercel

- [ ] **Local Testing**
  - [ ] Frontend builds successfully (`npm run build` in frontend/)
  - [ ] Backend runs without errors locally
  - [ ] API endpoints respond correctly

## Vercel Configuration 🚀

- [ ] **Project Setup**
  - [ ] Vercel account created
  - [ ] Repository imported to Vercel
  - [ ] Build settings detected automatically

- [ ] **Environment Variables**
  - [ ] `MONGO_URL` = Your MongoDB connection string
  - [ ] `DB_NAME` = Your database name (e.g., "app")
  - [ ] `CORS_ORIGINS` = Your Vercel domain (update after first deploy)
  - [ ] `LOG_LEVEL` = "INFO" (optional)

## First Deployment 🎯

- [ ] **Deploy**
  - [ ] Initial deployment successful
  - [ ] Note your Vercel app URL
  - [ ] Update `CORS_ORIGINS` with actual domain
  - [ ] Redeploy after updating CORS

## Testing Production 🧪

- [ ] **Frontend Tests**
  - [ ] Website loads correctly
  - [ ] No console errors
  - [ ] Navigation works

- [ ] **Backend API Tests**
  - [ ] `/api/` returns "Hello World"
  - [ ] `/api/health` returns health status
  - [ ] `/api/status` returns empty array (or data if seeded)

## Post-Deployment 🔧

- [ ] **Monitoring Setup**
  - [ ] Check Vercel function logs
  - [ ] Monitor performance metrics
  - [ ] Set up error alerting (optional)

- [ ] **Documentation**
  - [ ] Update project README with live URLs
  - [ ] Share deployment URLs with team
  - [ ] Document any custom environment variables

## Troubleshooting 🔍

If something doesn't work:

1. **Check Vercel Function Logs**
   - Go to Vercel Dashboard → Your Project → Functions
   - Click on any function to view logs

2. **Common Issues**
   - 500 errors → Check MongoDB connection
   - CORS errors → Update CORS_ORIGINS
   - Build failures → Check dependencies

3. **Test Locally First**
   - Ensure everything works locally
   - Use same environment variables locally

## Quick Commands 💻

```bash
# Test frontend build
cd frontend && npm run build

# Test backend locally
cd backend && uvicorn server:app --reload

# Deploy with Vercel CLI
vercel --prod

# Check deployment status
vercel ls
```

---

**Need help?** Check the full [DEPLOYMENT.md](./DEPLOYMENT.md) guide.