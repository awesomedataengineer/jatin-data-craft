import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import jatinProfile from "@/assets/jatin-profile.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-hero-bg to-section-bg pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold">
                <span className="text-hero-accent">Hello,</span>
                <br />
                <span className="text-text-primary">I'm Jatin</span>
                <br />
                <span className="text-text-primary">
                  Data Engineer
                  <br />
                  Based In India
                </span>
              </h1>
              <p className="text-lg text-text-secondary max-w-md leading-relaxed">
                A passionate Data Engineer with expertise in building efficient data pipelines and scalable infrastructure. 
                I transform complex data into actionable insights to support analytics and business growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-hero-accent hover:bg-hero-accent/90 text-white px-8 py-3 text-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Connect with Me
              </Button>
              <Button 
                variant="outline" 
                className="border-hero-accent text-hero-accent hover:bg-hero-accent hover:text-white px-8 py-3 text-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-text-secondary text-sm">Follow me:</div>
              <div className="flex space-x-4">
                <a href="#" className="text-text-secondary hover:text-hero-accent transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-text-secondary hover:text-hero-accent transition-colors">
                  GitHub
                </a>
                <a href="#" className="text-text-secondary hover:text-hero-accent transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-hero-accent shadow-2xl">
                <img 
                  src={jatinProfile} 
                  alt="Jatin Rana - Data Engineer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-hero-accent rounded-full flex items-center justify-center">
                <ArrowDown className="h-8 w-8 text-white animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;