# KRIDANGAN — Living Spec

## Purpose
Premium responsive marketing and event-registration landing site for KRIDANGAN, a university esports event under JamRang at Vijaybhoomi University in Jamrung, Karjat, Maharashtra, organized by NxtGen Esports Club.

## Data model
Static configuration only in `frontend/src/config/eventConfig.ts`: event identity, venue, exact placeholder prize pool `₹XX,XXX`, replaceable logo asset paths, external registration URLs, email, and Instagram links. No local registration records or authentication.

## Key flows
- `/`: visitor understands the event, the three games, prize pool, campus context, and can open the game-picker registration modal from the navbar, hero, game cards, or bottom CTA.
- Registration modal: Free Fire, Chess, and E-Football are disabled with `COMING SOON` while configured form URLs remain `#`; real forms can be enabled by replacing the central config values.
- `/contact`: visitor can email NxtGen Esports Club and open the three configured Instagram profiles in new tabs.
- All missing event details remain explicitly unannounced; no dates, fees, rules, sponsors, or prize distribution are invented.

## Auth and roles
None. This is a static marketing site with external registration links only.

## Assets
Official logos are intentionally represented by text/monogram placeholders. Drop-in paths are documented in `eventConfig.logoPaths` and point to `/public/assets/`.