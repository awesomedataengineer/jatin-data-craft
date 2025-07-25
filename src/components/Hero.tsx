import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import jatinProfile from "@/assets/icon.png";
import TiltBlobProfileImage from "@/components/TiltBlobProfileImage";


const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const heroAccent = getComputedStyle(document.documentElement)
  .getPropertyValue('--hero-accent')
  .trim(); // returns a string like: "0 84% 60%"

  const blobColor = `hsl(${heroAccent})`; // "hsl(0 84% 60%)"

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-hero-bg to-section-bg pt-20">
      <div className="container mx-auto px-4 py-20" style={{ paddingLeft: '100px', paddingRight: '100px' }}>
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
                  
                </span>
              </h1>
              <p className="text-lg text-text-secondary max-w-md leading-relaxed">
                A Passionate Data Engineer with expertise in building efficient Data Pipelines and Scalable Infrastructure. 
                <p>
                  I transform complex Data into Actionable Insights to support Analytics and Business Growth.
                </p>
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
                asChild // ensures your button component passes props to its child
                variant="outline"
                className="border-hero-accent text-hero-accent hover:bg-hero-accent hover:text-white px-8 py-3 text-lg"
              >
                <a href="/jatin-cv.pdf" download="Jatin_Rana_CV.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>

            </div>

            {/* Social Links */}
            {/* <div className="flex items-center space-x-6 pt-4">
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
            </div> */}
          </div>

          {/* Profile Image */}
          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <TiltBlobProfileImage 
              imageSrc={jatinProfile} 
              alt="Jatin Rana - Data Engineer" 
              blobColor={blobColor}
            />
            {/* <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-hero-accent rounded-full flex items-center justify-center">
                <ArrowDown className="h-8 w-8 text-white animate-bounce" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;