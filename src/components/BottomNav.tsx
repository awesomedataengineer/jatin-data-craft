import React, { useState } from "react";
import {
  UilEstate,
  UilUser,
  UilFileAlt,
  UilBriefcaseAlt,
  UilGraduationCap,
  UilMessage,
  UilBars,
  UilTimes,
} from "@iconscout/react-unicons";

const sections = [
  { id: "home", icon: <UilEstate />, label: "Home" },
  { id: "about", icon: <UilUser />, label: "About" },
  { id: "skills", icon: <UilFileAlt />, label: "Skills" },
  { id: "experience", icon: <UilBriefcaseAlt />, label: "Experience" },
  { id: "education", icon: <UilGraduationCap />, label: "Education" },
  { id: "contact", icon: <UilMessage />, label: "Contact" },
];

const BottomNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setCurrentSection(id);
    setIsOpen(false); // Optional: close menu after navigation
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t border-border">
      {/* Bottom bar: show name and toggle when closed, hide name when open */}
      {!isOpen && (
        <div className="flex justify-between items-center px-6 py-3">
          <div className="font-bold text-hero-accent text-xl select-none">Jatin</div>
          <button
            aria-label="Open Navigation"
            onClick={() => setIsOpen(true)}
            className="text-2xl text-hero-accent"
          >
            <UilBars />
          </button>
        </div>
      )}

      {/* Expanded panel when open */}
      {isOpen && (
        <div className="relative bg-card-bg border-t border-border pt-4 pb-14 px-4">
          <div className="grid grid-cols-3 gap-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex flex-col items-center justify-center py-2 focus:outline-none
                  transition-colors duration-200
                  ${currentSection === section.id
                    ? "text-hero-accent font-semibold"
                    : "text-text-secondary hover:text-hero-accent"}
                `}
              >
                <div className="text-2xl mb-1">{section.icon}</div>
                <span className="text-xs">{section.label}</span>
              </button>
            ))}
          </div>
          {/* Close (cross) button fixed to bottom right of the panel */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close Navigation"
            className="absolute right-6 bottom-4 text-3xl text-hero-accent"
          >
            <UilTimes />
          </button>
        </div>
      )}
    </div>
  );
};

export default BottomNav;
