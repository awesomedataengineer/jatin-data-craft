import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-text-secondary">
            © {new Date().getFullYear()} Jatin Rana. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 text-text-secondary">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-hero-accent fill-hero-accent" />
            <span>by Jatin Rana</span>
          </div>
          
          <div className="flex items-center gap-6 text-text-secondary text-sm">
            <a href="#" className="hover:text-hero-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-hero-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;