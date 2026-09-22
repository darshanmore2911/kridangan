import { useState } from "react";
import { ArrowDown, ArrowRight, Check, Crosshair, Gamepad2, Instagram, MapPin, Shield, Sparkles, Trophy, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import RegistrationModal from "@/components/RegistrationModal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { eventConfig, games } from "@/config/eventConfig";

const highlights = [
  { icon: Crosshair, label: "Competition", copy: "Put your skills to the test.", number: "01" },
  { icon: Users, label: "Community", copy: "Meet fellow gamers and competitors.", number: "02" },
  { icon: Trophy, label: "Glory", copy: "Compete for the KRIDANGAN title.", number: "03" },
  { icon: Sparkles, label: "JamRang", copy: "Be part of the larger campus celebration.", number: "04" },
];

export default function Home() {
  const [registrationOpen, setRegistrationOpen] = useState(false);

  return (
    <div data-testid="home-page" className="min-h-screen bg-[#070707] text-[#F5F5F5]">
      <SiteHeader onRegister={() => setRegistrationOpen(true)} />
      <main>
        <section data-testid="hero-section" className="relative isolate min-h-[720px] overflow-hidden border-b border-white/10 pt-28 sm:min-h-[780px] lg:pt-32">
          <div className="hero-grid pointer-events-none absolute inset-0 -z-20" />
          <div className="grain-overlay pointer-events-none absolute inset-0 -z-10 opacity-30" />
          <div className="pointer-events-none absolute -right-36 top-12 -z-10 size-[520px] rounded-full bg-[#F97316]/10 blur-[100px] sm:size-[700px]" />
          <div className="pointer-events-none absolute left-[8%] top-28 -z-10 size-2 animate-kridangan-pulse rounded-full bg-[#F97316] shadow-[0_0_20px_#F97316]" />
          <div className="mx-auto grid max-w-7xl gap-16 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:px-10 lg:pb-28">
            <div className="relative z-10 max-w-2xl">
              <div data-testid="hero-eyebrow" className="mb-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#F97316]"><span className="h-px w-8 bg-[#F97316]" />{eventConfig.parentEvent} <span className="text-[#555]">×</span> {eventConfig.organizer}</div>
              <h1 data-testid="hero-title" className="font-heading text-[clamp(4.2rem,14vw,9.5rem)] font-black uppercase leading-[0.78] tracking-[-0.08em] text-[#F5F5F5]">KRIDANGAN<span className="text-[#F97316]">.</span></h1>
              <div className="mt-9 max-w-lg border-l border-[#F97316]/60 pl-5 sm:mt-11 sm:pl-6">
                <p data-testid="hero-headline" className="font-heading text-2xl font-semibold uppercase leading-tight tracking-tight text-[#F5F5F5] sm:text-3xl">Enter the arena<span className="text-[#F97316]">.</span></p>
                <p data-testid="hero-description" className="mt-4 max-w-md text-sm leading-7 text-[#A1A1A1] sm:text-base">An esports showdown featuring Free Fire, Chess and E-Football, brought to you under JamRang at Vijaybhoomi University.</p>
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button type="button" onClick={() => setRegistrationOpen(true)} data-testid="hero-register-button" className="group inline-flex min-h-12 items-center justify-center bg-[#F97316] px-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#070707] transition-all duration-300 hover:bg-[#EA580C] hover:shadow-[0_0_30px_rgba(249,115,22,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#070707]">Register now <ArrowRight className="ml-3 size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" /></button>
                <a href="#games" data-testid="hero-explore-games-link" className="group inline-flex min-h-12 items-center justify-center border border-white/15 px-6 font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#F5F5F5] transition-all duration-300 hover:border-[#F97316]/60 hover:bg-white/[0.03] hover:text-[#F97316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]">Explore games <ArrowDown className="ml-3 size-4 transition-transform duration-300 group-hover:translate-y-1" aria-hidden="true" /></a>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#666]">
                <span data-testid="hero-game-count"><strong className="text-[#F5F5F5]">03</strong> games</span><span data-testid="hero-event-label"><strong className="text-[#F5F5F5]">01</strong> event</span><span data-testid="hero-location-label"><strong className="text-[#F5F5F5]">VU</strong> Jamrung</span>
              </div>
            </div>
            <div data-testid="hero-abstract-visual" className="relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center lg:justify-end">
              <div className="absolute right-[7%] top-[5%] size-[72%] rounded-full border border-white/10" />
              <div className="absolute right-[13%] top-[11%] size-[60%] animate-kridangan-pulse rounded-full border border-[#F97316]/30 bg-[#F97316]/5 shadow-[0_0_90px_rgba(249,115,22,0.2)]" />
              <div className="absolute right-[21%] top-[19%] size-[44%] animate-kridangan-float rounded-full bg-[radial-gradient(circle_at_35%_30%,#fdba74_0%,#f97316_16%,#7c2d12_46%,#111_70%)] shadow-[0_0_80px_rgba(249,115,22,0.28)]" />
              <div className="absolute right-[29%] top-[27%] size-[28%] rounded-full border border-white/30 bg-[#070707]/45 backdrop-blur-sm" />
              <div className="absolute bottom-[11%] left-[4%] h-px w-[84%] rotate-[-22deg] bg-gradient-to-r from-transparent via-[#F97316]/50 to-transparent" />
              <div className="absolute bottom-[24%] left-[13%] font-mono text-[10px] uppercase tracking-[0.18em] text-[#666]">/// live arena / 001</div>
              <div className="absolute right-[3%] top-[14%] flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#777]"><span className="size-1.5 rounded-full bg-[#F97316] shadow-[0_0_8px_#F97316]" /> signal active</div>
              <div className="absolute bottom-[9%] right-[17%] font-heading text-[clamp(4rem,11vw,7.5rem)] font-black leading-none text-white/[0.045]">01</div>
            </div>
          </div>
        </section>

        <section data-testid="event-introduction-section" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div><p data-testid="event-intro-eyebrow" className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F97316]">01 / The event</p><h2 data-testid="event-intro-title" className="mt-4 font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">The battle<br /><span className="text-[#666]">begins.</span></h2></div>
            <div><p data-testid="event-intro-copy" className="max-w-2xl text-lg leading-8 text-[#A1A1A1] sm:text-xl">KRIDANGAN brings competitive gaming to the JamRang experience, bringing players together across three different styles of play — fast-paced combat, tactical strategy and football simulation.</p><div className="mt-12 grid gap-0 border-y border-white/10 sm:grid-cols-3">
              <div data-testid="event-intro-games-info" className="border-b border-white/10 py-6 sm:border-b-0 sm:border-r sm:pr-5"><p className="font-mono text-[10px] tracking-[0.2em] text-[#F97316]">01</p><p data-testid="event-intro-games-label" className="mt-5 font-heading text-lg font-semibold uppercase">3 games</p><p data-testid="event-intro-games-value" className="mt-2 text-sm leading-6 text-[#666]">Free Fire<br />Chess<br />E-Football</p></div>
              <div data-testid="event-intro-event-info" className="border-b border-white/10 py-6 sm:border-b-0 sm:border-r sm:px-5"><p className="font-mono text-[10px] tracking-[0.2em] text-[#F97316]">02</p><p data-testid="event-intro-event-label" className="mt-5 font-heading text-lg font-semibold uppercase">Event</p><p data-testid="event-intro-event-value" className="mt-2 text-sm text-[#666]">{eventConfig.parentEvent}</p></div>
              <div data-testid="event-intro-campus-info" className="py-6 sm:pl-5"><p className="font-mono text-[10px] tracking-[0.2em] text-[#F97316]">03</p><p data-testid="event-intro-campus-label" className="mt-5 font-heading text-lg font-semibold uppercase">Campus</p><p data-testid="event-intro-campus-value" className="mt-2 text-sm leading-6 text-[#666]">{eventConfig.university}<br />{eventConfig.venue}</p></div>
            </div></div>
          </div>
        </section>

        <section id="games" data-testid="games-section" className="border-y border-white/10 bg-[#0A0A0A] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end"><div><p data-testid="games-eyebrow" className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F97316]">02 / Pick your arena</p><h2 data-testid="games-title" className="mt-4 font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">Choose your battle<span className="text-[#F97316]">.</span></h2></div><p data-testid="games-subtitle" className="max-w-xs text-sm leading-6 text-[#666]">Three games. Three different ways to compete.</p></div>
            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {games.map((game) => <article key={game.id} data-testid={`game-card-${game.id}`} className="group relative min-h-[410px] overflow-hidden border border-white/10 bg-[#111111] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#F97316]/50 hover:shadow-[0_0_35px_rgba(249,115,22,0.12)] sm:p-8">
                <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full border border-[#F97316]/15 transition-transform duration-700 group-hover:scale-125" style={{ background: `radial-gradient(circle, ${game.accent}18, transparent 70%)` }} />
                <div className="relative flex h-full flex-col"><div className="flex items-start justify-between"><span data-testid={`game-card-${game.id}-number`} className="font-mono text-xs tracking-[0.15em] text-[#F97316]">{game.number}</span><span data-testid={`game-card-${game.id}-genre`} className="border border-white/10 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[#666]">{game.genre}</span></div><div className="mt-auto"><div data-testid={`game-card-${game.id}-visual`} className="mb-8 flex h-24 items-center justify-center opacity-80"><Gamepad2 className={`size-20 text-[${game.accent}]`} strokeWidth={0.7} aria-hidden="true" /><div className="absolute h-20 w-20 rounded-full border border-[#F97316]/20 transition-transform duration-700 group-hover:scale-110" /></div><h3 data-testid={`game-card-${game.id}-title`} className="font-heading text-2xl font-semibold uppercase tracking-tight">{game.title}</h3><p data-testid={`game-card-${game.id}-description`} className="mt-3 max-w-xs text-sm leading-6 text-[#888]">{game.description}</p><button type="button" onClick={() => setRegistrationOpen(true)} data-testid={`game-card-${game.id}-register-button`} className="group/cta mt-7 inline-flex min-h-11 items-center font-mono text-[10px] font-bold uppercase tracking-[0.13em] text-[#F97316] transition-colors hover:text-[#FDBA74] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111111]">Register for {game.title} <ArrowRight className="ml-3 size-3 transition-transform duration-300 group-hover/cta:translate-x-1" aria-hidden="true" /></button></div></div>
              </article>)}
            </div>
          </div>
        </section>

        <section id="prize-pool" data-testid="prize-pool-section" className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-10 lg:py-36">
          <div className="pointer-events-none absolute left-1/2 top-1/2 size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316]/[0.06] blur-[100px]" />
          <div className="relative mx-auto max-w-4xl text-center"><p data-testid="prize-eyebrow" className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F97316]">03 / The reward</p><h2 data-testid="prize-title" className="mt-4 font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">The stakes are high<span className="text-[#F97316]">.</span></h2><p data-testid="prize-label" className="mt-12 font-mono text-xs uppercase tracking-[0.22em] text-[#666]">Total prize pool</p><p data-testid="prize-amount" className="mt-3 font-heading text-[clamp(4rem,14vw,9rem)] font-bold leading-none tracking-[-0.07em] text-[#F5F5F5]">{eventConfig.prizePool}</p><p data-testid="prize-note" className="mt-7 text-sm text-[#666]">Prize distribution details coming soon.</p></div>
        </section>

        <section data-testid="highlights-section" className="border-y border-white/10 bg-[#0A0A0A] px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="max-w-xl"><p data-testid="highlights-eyebrow" className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F97316]">04 / The experience</p><h2 data-testid="highlights-title" className="mt-4 font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">More than just<br /><span className="text-[#666]">a game.</span></h2></div><div className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">{highlights.map(({ icon: Icon, label, copy, number }) => <div key={label} data-testid={`highlight-card-${label.toLowerCase()}`} className="bg-[#111111] p-6 transition-colors duration-300 hover:bg-[#151515] sm:p-7"><div className="flex items-center justify-between"><Icon data-testid={`highlight-${label.toLowerCase()}-icon`} className="size-5 text-[#F97316]" strokeWidth={1.5} aria-hidden="true" /><span data-testid={`highlight-${label.toLowerCase()}-number`} className="font-mono text-[10px] text-[#555]">{number}</span></div><h3 data-testid={`highlight-${label.toLowerCase()}-title`} className="mt-12 font-heading text-lg font-semibold uppercase">{label}</h3><p data-testid={`highlight-${label.toLowerCase()}-copy`} className="mt-2 text-sm leading-6 text-[#666]">{copy}</p></div>)}</div></div></section>

        <section id="about" data-testid="about-section" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-24"><div><p data-testid="about-eyebrow" className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F97316]">05 / The campus</p><h2 data-testid="about-title" className="mt-4 font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">Part of<br /><span className="text-[#666]">JamRang.</span></h2><p data-testid="about-copy" className="mt-8 max-w-xl text-lg leading-8 text-[#A1A1A1]">KRIDANGAN is part of the JamRang event ecosystem at Vijaybhoomi University, bringing esports into the wider campus celebration.</p><a data-testid="about-university-link" href="https://vijaybhoomi.edu.in/" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-11 items-center gap-3 border-b border-[#F97316]/60 pb-2 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-[#F5F5F5] transition-colors hover:text-[#F97316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]">Learn more about VU <ArrowUpRightIcon /></a></div><div data-testid="about-campus-card" className="relative overflow-hidden border border-white/10 bg-[#111111] p-7 sm:p-9"><div className="absolute right-0 top-0 size-32 bg-[#F97316]/10 blur-3xl" /><div className="relative"><div className="flex items-center gap-3"><span data-testid="about-jamrang-logo-placeholder" className="flex size-10 items-center justify-center border border-[#F97316]/40 bg-[#F97316]/10 font-heading text-xs font-bold text-[#F97316]">J</span><span data-testid="about-university-logo-placeholder" className="flex size-10 items-center justify-center border border-white/15 bg-white/5 font-heading text-xs font-bold text-[#A1A1A1]">V</span></div><p data-testid="about-university-label" className="mt-9 font-mono text-[10px] uppercase tracking-[0.2em] text-[#F97316]">Vijaybhoomi University</p><p data-testid="about-location" className="mt-3 flex items-start gap-2 text-sm leading-6 text-[#A1A1A1]"><MapPin className="mt-1 size-4 shrink-0 text-[#F97316]" aria-hidden="true" />{eventConfig.venue}</p><p data-testid="about-logo-note" className="mt-8 border-t border-white/10 pt-4 font-mono text-[9px] uppercase tracking-[0.13em] text-[#555]">Official marks can be added to /public/assets/</p></div></div></div></section>

        <section data-testid="registration-cta-section" className="relative overflow-hidden border-t border-white/10 bg-[#F97316] px-5 py-20 text-[#070707] sm:px-8 lg:px-10 lg:py-28"><div className="pointer-events-none absolute right-0 top-0 size-64 translate-x-1/4 -translate-y-1/3 rounded-full border border-[#070707]/10" /><div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:items-end"><div><p data-testid="registration-cta-eyebrow" className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#070707]/60">06 / Your move</p><h2 data-testid="registration-cta-title" className="mt-4 max-w-3xl font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">Ready to enter<br />the arena?</h2><p data-testid="registration-cta-copy" className="mt-5 max-w-md text-sm leading-6 text-[#070707]/65">Choose your game and secure your spot in KRIDANGAN.</p></div><button type="button" onClick={() => setRegistrationOpen(true)} data-testid="bottom-register-button" className="group inline-flex min-h-14 shrink-0 items-center justify-center border border-[#070707]/30 px-7 font-mono text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 hover:bg-[#070707] hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#070707] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F97316]">Register now <ArrowRight className="ml-3 size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" /></button></div></section>
      </main>
      <SiteFooter />
      <RegistrationModal open={registrationOpen} onOpenChange={setRegistrationOpen} />
    </div>
  );
}

function ArrowUpRightIcon() { return <ArrowRight className="size-3 -rotate-45" aria-hidden="true" />; }