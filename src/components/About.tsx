import { Card } from "@/components/ui/card";
import { Database, TrendingUp, Users, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Database,
      title: "Data Pipeline Expert",
      description: "Specialized in designing and optimizing efficient data pipelines"
    },
    {
      icon: TrendingUp,
      title: "Business Insights",
      description: "Transform complex datasets into actionable business intelligence"
    },
    {
      icon: Users,
      title: "Cross-functional",
      description: "Collaborate effectively with teams to drive analytics capabilities"
    },
    {
      icon: Award,
      title: "Quality Focused",
      description: "Committed to delivering scalable and reliable data solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">About Me</h2>
            <div className="w-24 h-1 bg-hero-accent mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-text-primary">
                I'm Jatin Rana, a Data Engineer
              </h3>
              <p className="text-text-secondary leading-relaxed">
                I love working with data and technology to help companies make smarter decisions.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Over the years, I've built data systems that make it easier to collect, process, and understand information quickly and accurately.
              </p>
              <p className="text-text-secondary leading-relaxed">
                I enjoy learning new tools and techniques and finding better ways to solve problems with data. My goal is to turn complex data into clear insights that help teams succeed.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <Card key={index} className="p-6 bg-card-bg border-border hover:border-hero-accent transition-colors group">
                    <div className="text-center space-y-3">
                      <div className="w-12 h-12 bg-hero-accent/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-hero-accent/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-hero-accent" />
                      </div>
                      <h4 className="font-semibold text-text-primary text-sm">{highlight.title}</h4>
                      <p className="text-text-secondary text-xs leading-relaxed">{highlight.description}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;