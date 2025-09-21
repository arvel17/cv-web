"use client";

import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";

export default function HomePage() {
  return (
    <>
      {/* ABOUT */}
      <AboutSection />

      {/* EDUCATION */}
      <EducationSection />

      {/* EXPERIENCE */}
      <ExperienceSection />

      {/* SKILLS */}
      <SkillsSection />

      {/* CONTACT */}
      <ContactSection />

      {/* FOOTER */}
      <Footer />
    </>
  );
}
