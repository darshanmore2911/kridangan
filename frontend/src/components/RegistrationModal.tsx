import type { ReactElement } from "react";
import { X } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import RegistrationOption from "@/components/RegistrationOption";
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
          {games.map((game) => <RegistrationOption key={game.id} game={game} />)}
        </div>
        <div data-testid="registration-modal-footer" className="border-t border-white/10 px-6 py-4 sm:px-8">
          <p data-testid="registration-modal-note" className="text-xs leading-relaxed text-[#666]">Questions about registration? <a data-testid="registration-modal-contact-link" href={`mailto:${eventConfig.contact.email}`} className="text-[#A1A1A1] underline decoration-white/20 underline-offset-4 transition-colors hover:text-[#F97316]">Email NxtGen Esports Club</a>.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}