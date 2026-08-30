import React, { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { DomainsSection } from "./components/DomainsSection";
import { SignatureExhibition } from "./components/SignatureExhibition";
import { ArchiveSection } from "./components/ArchiveSection";
import { PragyanChapter } from "./components/PragyanChapter";
import { SocialFeed } from "./components/SocialFeed";
import { TeamPhilosophy } from "./components/TeamPhilosophy";
import { YourTurnSection } from "./components/YourTurnSection";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";
import { InteractiveCanvas } from "./components/InteractiveCanvas";
import { CommandMenu } from "./components/CommandMenu";
import { sound } from "./utils/audio";

export default function App() {
  const [submissionStudioOpen, setSubmissionStudioOpen] = useState(false);
  const [commandMenuOpen, setCommandMenuOpen] = useState(false);

  const handleOpenSubmission = () => {
    sound.playCelebrationChord();
    setSubmissionStudioOpen(true);
    const el = document.getElementById("your-turn");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenCommandMenu = () => {
    sound.playClick();
    setCommandMenuOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#060608] text-[#F3F3F6] font-sans antialiased selection:bg-purple-600 selection:text-white cursor-default overflow-x-hidden">
      {/* Magnetic Spring Custom Cursor */}
      <CustomCursor />

      {/* Performant 60FPS Interactive Constellation Canvas */}
      <InteractiveCanvas />

      {/* Global Interactive Command HUD (Cmd+K) */}
      <CommandMenu
        isOpen={commandMenuOpen}
        onClose={() => setCommandMenuOpen(false)}
        onOpenInduction={handleOpenSubmission}
      />

      {/* Navigation Header */}
      <Navigation
        onOpenSubmission={handleOpenSubmission}
        onOpenCommandMenu={handleOpenCommandMenu}
      />

      {/* Main Exhibition Sequence */}
      <main className="relative z-10">
        {/* Cinematic Hero with 3D Monogram & Synthesizer Deck */}
        <Hero
          onOpenCommandMenu={handleOpenCommandMenu}
          onOpenInduction={handleOpenSubmission}
        />

        {/* 01 / About & Conceptual Pipeline */}
        <AboutSection />

        {/* 02 / Six Design Domains & Tool Ecosystem */}
        <DomainsSection />

        {/* 03 / The Work - Pinned Horizontal Exhibition */}
        <SignatureExhibition />

        {/* 04 / Disciplinary Visual Archive */}
        <ArchiveSection />

        {/* 05 / Pragyan Institutional Chapter */}
        <PragyanChapter />

        {/* 06 / The Feed (@pdtttttttt._) */}
        <SocialFeed />

        {/* 07 / Culture & Five Pillars */}
        <TeamPhilosophy />

        {/* 08 / Emotional Climax: "YOUR TURN" Induction Studio */}
        <YourTurnSection />
      </main>

      {/* Footer Exhibition End Credits */}
      <Footer />
    </div>
  );
}
