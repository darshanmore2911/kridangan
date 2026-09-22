import type { ReactElement } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Game } from "@/config/eventConfig";

interface RegistrationOptionProps {
  game: Game;
}

export default function RegistrationOption({ game }: RegistrationOptionProps): ReactElement {
  const available: boolean = game.formUrl !== "#";
  if (available) {
    return (
      <a
        data-testid={`registration-${game.id}-link`}
        href={game.formUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex min-h-16 items-center justify-between rounded-xl border border-white/10 bg-[#151515] px-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F97316]/60 hover:bg-[#1a1a1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] sm:px-5"
      >
        <span className="flex items-center gap-4"><span className="font-mono text-xs text-[#F97316]">{game.number}</span><span className="font-heading font-semibold">{game.title}</span></span>
        <ArrowUpRight className="size-4 text-[#777] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#F97316]" aria-hidden="true" />
      </a>
    );
  }
  return (
    <button
      type="button"
      disabled
      data-testid={`registration-${game.id}-coming-soon-button`}
      className="flex min-h-16 w-full cursor-not-allowed items-center justify-between rounded-xl border border-white/8 bg-[#151515]/60 px-4 text-left opacity-70 sm:px-5"
    >
      <span className="flex items-center gap-4"><span className="font-mono text-xs text-[#F97316]/70">{game.number}</span><span className="font-heading font-semibold text-[#D4D4D4]">{game.title}</span></span>
      <span data-testid={`registration-${game.id}-status`} className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#777]">COMING SOON</span>
    </button>
  );
}
