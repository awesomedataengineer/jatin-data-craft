import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, CheckCircle } from "lucide-react";

const Experience = () => {
  const experience = {
    position: "Data Engineer",
    company: "Fithack",
    duration: "December 2024 – Present",
    location: "Remote",
    highlights: [
      "Developed Python Solutions to Extract, Transform, and Load(ETL) data from diverse health and activity data sources, architecting high quality pipelines for the Bronze, Silver and Gold Layers",
      "Leveraged PySpark to optimize data transformation workflows, significantly reducing processing time compared to legacy Python code, resulting in greater platform scalability",
      "Designed and Orchestrated end-to-end data workflow in Apache Airflow, building custom DAGs to fetch and process data from  Android and iPhone sources, ensuring timely and reliable ingestion into core systems"
    ],
    technologies: [
      "Python", "Apache Spark", "SQL", 
      "GCP", "Airflow", "Hadoop", "PySpark", "PostgreSQL"
    ]
  };

  return (
    <section id="experience" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">Experience</h2>
            <div className="w-24 h-1 bg-hero-accent mx-auto"></div>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
              My Professional Journey in Data Engineering and Analytics
            </p>
          </div>

          <Card className="p-8 bg-card-bg border-border hover:border-hero-accent transition-all duration-300 group">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-text-primary">{experience.position}</h3>
                <div className="flex items-center gap-2 text-hero-accent text-lg font-semibold">
                  <Building className="h-5 w-5" />
                  {experience.company}
                </div>
              </div>
              
              <div className="space-y-2 lg:text-right">
                <div className="flex items-center gap-2 text-text-secondary">
                  <Calendar className="h-4 w-4" />
                  {experience.duration}
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <MapPin className="h-4 w-4" />
                  {experience.location}
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-text-primary mb-4">Key Achievements</h4>
              <div className="space-y-3">
                {experience.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-hero-accent mt-0.5 shrink-0" />
                    <p className="text-text-secondary leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-hero-accent/10 text-hero-accent hover:bg-hero-accent/20 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-text-secondary">
              Looking Forward to New Opportunities And Challenges in Data Engineering
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;