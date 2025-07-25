import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav"; // import BottomNav

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="hidden md:block">
        <Header />
      </div>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
      
      {/* Bottom navigation bar for mobile */}
      <BottomNav />
    </div>
  );
};

export default Index;
