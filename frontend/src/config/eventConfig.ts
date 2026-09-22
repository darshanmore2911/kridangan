export const eventConfig = {
  eventName: "KRIDANGAN",
  organizer: "NxtGen Esports Club",
  parentEvent: "JamRang",
  university: "Vijaybhoomi University",
  venue: "Jamrung, Karjat, Maharashtra",
  prizePool: "₹XX,XXX",
  logoPaths: {
    kridangan: "/assets/kridangan-logo.png",
    jamrang: "/assets/jamrang-logo.png",
    nxtgen: "/assets/nxtgen-esports-logo.png",
    university: "/assets/vijaybhoomi-logo.png",
  },
  registration: {
    main: "#",
    freeFire: "#",
    chess: "#",
    eFootball: "#",
  },
  contact: {
    email: "nxtgenesportsclub@gmail.com",
    instagram: {
      esports: "https://www.instagram.com/esports.vu?stkn=OWl4ODI0ZXNwaDVi",
      jamrang: "https://www.instagram.com/jamrang.vu?stkn=MTQ1bTl5NHQ3MTBnbA==",
      university: "https://www.instagram.com/vijaybhoomiuniversity?stkn=cjNpdzY0cmRtM3c=",
    },
  },
} as const;

export type GameId = "freefire" | "chess" | "efootball";

export type Game = {
  id: GameId;
  title: string;
  genre: string;
  platform: string;
  description: string;
  number: string;
  formUrl: string;
  accent: string;
};

export const games: Game[] = [
  {
    id: "freefire",
    title: "Free Fire",
    genre: "Battle Royale",
    platform: "Mobile",
    description: "Drop in. Squad up. Outplay your opponents.",
    number: "01",
    formUrl: eventConfig.registration.freeFire,
    accent: "#F97316",
  },
  {
    id: "chess",
    title: "Chess",
    genre: "Tactical Strategy",
    platform: "PC / Mobile",
    description: "Think ahead. Control the board. Checkmate.",
    number: "02",
    formUrl: eventConfig.registration.chess,
    accent: "#FDBA74",
  },
  {
    id: "efootball",
    title: "E-Football",
    genre: "Sports Simulation",
    platform: "Console / Mobile",
    description: "Build your squad. Control the pitch. Take the win.",
    number: "03",
    formUrl: eventConfig.registration.eFootball,
    accent: "#FB923C",
  },
];