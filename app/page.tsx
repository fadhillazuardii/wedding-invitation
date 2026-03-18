"use client";

import { useState } from "react";
import Envelope from "@/components/pages/Envelope";
import Hero from "@/components/pages/Hero";
import LoveStory from "@/components/pages/LoveStory";
import EventDetail from "@/components/pages/EventDetail";
import GalleryPhoto from "@/components/pages/GalleryPhoto";
import DigitalGift from "@/components/pages/DigitalGift";
import Footer from "@/components/pages/Footer";

export default function LandingPage() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpen(true);
  };

  return (
    <div>
      <Envelope
        groomName="Romeo"
        brideName="Juliet"
        date="June 15, 2023"
        onOpen={handleOpenEnvelope}
        isOpen={isEnvelopeOpen}
      />
      <Hero
        groomName="Romeo"
        brideName="Juliet"
        akadDate="Sabtu, 12 Juli 2025"
        akadTime="08.00 WIB"
        resepsiDate="Sabtu, 12 Juli 2025"
        resepsiTime="11.00 WIB"
      />
      <LoveStory />
      <EventDetail />
      <GalleryPhoto />
      <DigitalGift />
      <Footer />
    </div>
  );
}
