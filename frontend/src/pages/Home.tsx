import { useState, type ReactElement } from "react";
import AboutSection from "@/components/home/AboutSection";
import EventIntro from "@/components/home/EventIntro";
import GamesSection from "@/components/home/GamesSection";
import Hero from "@/components/home/Hero";
import Highlights from "@/components/home/Highlights";
import PrizePool from "@/components/home/PrizePool";
import RegistrationCTA from "@/components/home/RegistrationCTA";
import RegistrationModal from "@/components/RegistrationModal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function Home(): ReactElement {
  const [registrationOpen, setRegistrationOpen] = useState<boolean>(false);
  const openRegistration = (): void => setRegistrationOpen(true);

  return (
    <div data-testid="home-page" className="min-h-screen bg-[#070707] text-[#F5F5F5]">
      <SiteHeader onRegister={openRegistration} />
      <main>
        <Hero onRegister={openRegistration} />
        <EventIntro />
        <GamesSection onRegister={openRegistration} />
        <PrizePool />
        <Highlights />
        <AboutSection />
        <RegistrationCTA onRegister={openRegistration} />
      </main>
      <SiteFooter />
      <RegistrationModal open={registrationOpen} onOpenChange={setRegistrationOpen} />
    </div>
  );
}
