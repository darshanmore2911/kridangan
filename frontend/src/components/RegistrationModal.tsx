import type { ReactElement } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { eventConfig, games } from "@/config/eventConfig";

type RegistrationModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function RegistrationModal({ open, onOpenChange }: RegistrationModalProps): ReactElement {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showCloseButton={false} data-testid="registration-game-picker-modal" className="max-w-lg border-white/10 bg-[#111111] p-0 text-[#F5F5F5] shadow-[0_0_80px_rgba(249,115,22,0.18)] sm:rounded-2xl">
        <DialogHeader className="border-b border-white/10 p-6 pb-5 text-left sm:p-8 sm:pb-6">
          <div className="mb-5 flex items-center justify-between">
            <span data-testid="registration-modal-eyebrow" className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#F97316]">Registration portal</span>
            <DialogClose data-testid="registration-modal-close-button" className="rounded-full p-2 text-[#777] transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]">
              <X className="size-4" aria-hidden="true" />
              <span className="sr-only">Close registration picker</span>
            </DialogClose>
          </div>
          <DialogTitle data-testid="registration-modal-title" className="font-heading text-3xl font-bold uppercase tracking-tight">Choose your game</DialogTitle>
          <DialogDescription data-testid="registration-modal-description" className="mt-2 max-w-sm text-sm leading-relaxed text-[#A1A1A1]">Select your arena. Registration links will open as soon as they are announced.</DialogDescription>
        </DialogHeader>
        <div data-testid="registration-game-options" className="space-y-3 p-6 sm:p-8">
          {games.map((game) => {
            const available = game.formUrl !== "#";
            return available ? (
              <a
                key={game.id}
                data-testid={`registration-${game.id}-link`}
                href={game.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-16 items-center justify-between rounded-xl border border-white/10 bg-[#151515] px-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F97316]/60 hover:bg-[#1a1a1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] sm:px-5"
              >
                <span className="flex items-center gap-4"><span className="font-mono text-xs text-[#F97316]">{game.number}</span><span className="font-heading font-semibold">{game.title}</span></span>
                <ArrowUpRight className="size-4 text-[#777] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#F97316]" aria-hidden="true" />
              </a>
            ) : (
              <button
                key={game.id}
                type="button"
                disabled
                data-testid={`registration-${game.id}-coming-soon-button`}
                className="flex min-h-16 w-full cursor-not-allowed items-center justify-between rounded-xl border border-white/8 bg-[#151515]/60 px-4 text-left opacity-70 sm:px-5"
              >
                <span className="flex items-center gap-4"><span className="font-mono text-xs text-[#F97316]/70">{game.number}</span><span className="font-heading font-semibold text-[#D4D4D4]">{game.title}</span></span>
                <span data-testid={`registration-${game.id}-status`} className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#777]">COMING SOON</span>
              </button>
            );
          })}
        </div>
        <div data-testid="registration-modal-footer" className="border-t border-white/10 px-6 py-4 sm:px-8">
          <p data-testid="registration-modal-note" className="text-xs leading-relaxed text-[#666]">Questions about registration? <a data-testid="registration-modal-contact-link" href={`mailto:${eventConfig.contact.email}`} className="text-[#A1A1A1] underline decoration-white/20 underline-offset-4 transition-colors hover:text-[#F97316]">Email NxtGen Esports Club</a>.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}