import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary">
            Jatin<span className="text-hero-accent">Rana</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-hero-accent transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-hero-accent transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="text-foreground hover:text-hero-accent transition-colors"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-foreground hover:text-hero-accent transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-foreground hover:text-hero-accent transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-hero-accent transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-hero-accent transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-hero-accent transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('education')}
                className="text-foreground hover:text-hero-accent transition-colors text-left"
              >
                Education
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-foreground hover:text-hero-accent transition-colors text-left"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-foreground hover:text-hero-accent transition-colors text-left"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-hero-accent transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;