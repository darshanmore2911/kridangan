import { ArrowUpRight, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { eventConfig } from "@/config/eventConfig";

export default function SiteFooter() {
  return (
    <footer data-testid="site-footer" className="border-t border-white/10 bg-[#070707]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          <div>
            <div data-testid="footer-kridangan-brand" className="flex items-center gap-3"><span data-testid="footer-kridangan-logo-placeholder" className="flex size-9 items-center justify-center border border-[#F97316]/50 bg-[#F97316]/10 font-heading text-xs font-bold text-[#F97316]">K</span><span className="font-heading text-sm font-bold tracking-[0.2em]">{eventConfig.eventName}</span></div>
            <p data-testid="footer-powered-by" className="mt-4 max-w-xs text-sm leading-relaxed text-[#666]">Powered by {eventConfig.organizer}</p>
          </div>
          <div>
            <p data-testid="footer-network-label" className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F97316]">The network</p>
            <p data-testid="footer-network-value" className="mt-4 font-heading text-sm uppercase leading-loose tracking-[0.12em] text-[#A1A1A1]">{eventConfig.parentEvent}<br /><span className="text-[#555]">×</span> {eventConfig.organizer}<br /><span className="text-[#555]">×</span> {eventConfig.university}</p>
          </div>
          <div>
            <p data-testid="footer-connect-label" className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F97316]">Connect</p>
            <div className="mt-4 flex items-center gap-3">
              <a data-testid="footer-instagram-link" href={eventConfig.contact.instagram.esports} target="_blank" rel="noopener noreferrer" aria-label="NxtGen Esports Club on Instagram" className="flex size-11 items-center justify-center border border-white/10 text-[#A1A1A1] transition-all hover:border-[#F97316]/60 hover:text-[#F97316]"><Instagram className="size-4" aria-hidden="true" /></a>
              <a data-testid="footer-email-link" href={`mailto:${eventConfig.contact.email}`} aria-label="Email NxtGen Esports Club" className="flex size-11 items-center justify-center border border-white/10 text-[#A1A1A1] transition-all hover:border-[#F97316]/60 hover:text-[#F97316]"><Mail className="size-4" aria-hidden="true" /></a>
              <Link to="/contact" data-testid="footer-contact-link" className="ml-2 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#A1A1A1] transition-colors hover:text-[#F97316]">Contact <ArrowUpRight className="size-3" aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.15em] text-[#555] sm:flex-row sm:items-center sm:justify-between">
          <p data-testid="footer-copyright">© 2026 {eventConfig.eventName}. All rights reserved.</p>
          <p data-testid="footer-location">{eventConfig.venue}</p>
        </div>
      </div>
    </footer>
  );
}