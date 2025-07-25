import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      level: "BTech in Computer Science",
      institution: "SGT University",
      location: "Gurgoan",
      year: "2019-2023", // Placeholder for future
      icon: GraduationCap,
      description: "Bachelor of Technology in Computer Science & Engineering"
    },
    {
      level: "12th Grade",
      institution: "SR Century Public School",
      location: "Bahadurgarh",
      year: "2019", // Placeholder for future
      icon: GraduationCap,
      description: "Higher Secondary Education"
    },
    {
      level: "10th Grade",
      institution: "SR Century Public School",
      location: "Bahadurgarh",
      year: "2017", // Placeholder for future
      icon: GraduationCap,
      description: "Secondary Education"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">Education</h2>
            <div className="w-24 h-1 bg-hero-accent mx-auto"></div>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
              My Academic Journey that has Shaped My Foundation in Technology And Data Engineering
            </p>
          </div>

          <div className="space-y-6">
            {educationData.map((edu, index) => {
              const IconComponent = edu.icon;
              return (
                <Card key={index} className="p-6 bg-card-bg border-border hover:border-hero-accent transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-hero-accent/10 rounded-full flex items-center justify-center group-hover:bg-hero-accent/20 transition-colors shrink-0">
                      <IconComponent className="h-8 w-8 text-hero-accent" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3 className="text-xl font-semibold text-text-primary">{edu.level}</h3>
                        <div className="flex items-center text-text-secondary text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {edu.year}
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-medium text-hero-accent">{edu.institution}</h4>
                      
                      <div className="flex items-center text-text-secondary">
                        <MapPin className="h-4 w-4 mr-1" />
                        {edu.location}
                      </div>
                      
                      <p className="text-text-secondary">{edu.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
            <p className="text-center text-text-secondary text-sm">
              <span className="inline-flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                Graduation years can be updated as they become available
              </span>
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Education;