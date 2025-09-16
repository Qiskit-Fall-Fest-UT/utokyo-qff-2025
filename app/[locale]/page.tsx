"use client";

import AboutSection from "./_components/AboutSection";
import FlowSection from "./_components/FlowSection";
import FooterSection from "./_components/FooterSection";
import HeroSection from "./_components/HeroSection";
import InformationSection from "./_components/InformationSection";
import Navigation from "./_components/Navigation";
import PartnersSection from "./_components/PartnersSection";
import ScheduleSection from "./_components/ScheduleSection";
import SpeakersSection from "./_components/SpeakersSection";
import VenueSection from "./_components/VenueSection";

export default function Page() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <InformationSection />
      <AboutSection />
      <FlowSection />
      <PartnersSection />
      <ScheduleSection />
      <SpeakersSection />
      <VenueSection />
      <FooterSection />
    </main>
  );
}
