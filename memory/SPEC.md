# KRIDANGAN — Living Spec

## Purpose
Premium responsive marketing and event-registration landing site for KRIDANGAN, a university esports event under JamRang at Vijaybhoomi University in Jamrung, Karjat, Maharashtra, organized by NxtGen Esports Club.

## Data model
Static configuration only in `frontend/src/config/eventConfig.ts`: event identity, Season 1, confirmed 29–30 October 2026 dates, Vijaybhoomi University Campus venue, announcement statuses, exact placeholder prize pool `₹XX,XXX`, replaceable logo asset paths, external registration URLs, email, and Instagram links. No local registration records or authentication.

## Key flows
- `/`: visitor understands the event, the three games, prize pool, campus context, and can open the game-picker registration modal from the navbar, hero, game cards, or bottom CTA.
- The hero’s right side is a meaningful tournament command panel showing three active disciplines, each game category, registration status, organizer, and campus instead of a purely decorative eclipse graphic.
- The Pick Your Arena cards use the supplied Free Fire character artwork, cinematic chess image, and E-Football logo artwork, each with responsive crops and subtle card hover motion.
- Brochure-confirmed public details are displayed in the event introduction and briefing grid: Season 1, 29–30 October 2026, Vijaybhoomi University Campus, and brochure-derived game descriptions. Detailed schedule and rules remain `COMING SOON`; registration fee remains `TO BE ANNOUNCED`.
- Registration modal: Free Fire, Chess, and E-Football are disabled with `COMING SOON` while configured form URLs remain `#`; real forms can be enabled by replacing the central config values. The dialog exposes one labeled top-right close control plus standard Escape-key dismissal.
- `/contact`: visitor can email NxtGen Esports Club and open the three configured Instagram profiles in new tabs.
- Missing details remain explicitly unannounced; no fees, rules, sponsors, registration deadline, schedule, team sizes, or prize distribution are invented. Internal brochure content—working budget, sponsorship tiers, sponsor artwork deadline, expected footfall, and personal contacts—is intentionally excluded.

## Auth and roles
None. This is a static marketing site with external registration links only.

## Assets
Uploaded brand marks are wired through `eventConfig.logoPaths`: transparent KRIDANGAN, JamRang, NXTGen, and Vijaybhoomi University marks plus the Halloween-season event artwork. The first uploaded website screenshot is intentionally excluded.

## Frontend structure
`pages/Home.tsx` is a thin composer over section components in `components/home/`: `Hero`, `EventIntro`, `GamesSection`, `PrizePool`, `Highlights`, `AboutSection`, `RegistrationCTA`. Sections that trigger registration take an `onRegister` prop; the modal state lives in `Home`. All components declare explicit `ReactElement` return types.

## Halloween atmosphere
`components/HalloweenAtmosphere.tsx` (variants `hero` / `section` / `page`) layers decorative, `aria-hidden`, pointer-events-none elements: corner cobwebs, gliding bat silhouettes, rising ember particles, and low orange mist, all driven by keyframes in `index.css` and disabled under `prefers-reduced-motion`. Used in the Home hero, games section, prize pool, and Contact page; the hero eyebrow carries a "Halloween edition" badge. Large eclipse/moon circles were removed at the user's request.