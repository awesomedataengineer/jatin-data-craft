import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Server, 
  Globe, 
  Database, 
  Warehouse, 
  MessageSquare, 
  Cpu, 
  GitBranch, 
  Cloud,
  Workflow,
  Container
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code2,
      skills: ["Python", "Java", "C++", "C", "Linux Shell Scripting"],
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      title: "Backend Frameworks",
      icon: Server,
      skills: ["ExpressJS", "NodeJS"],
      color: "bg-green-500/10 text-green-500"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["JavaScript", "HTML", "CSS", "ReactJS"],
      color: "bg-purple-500/10 text-purple-500"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "Cassandra", "Kafka Connect", "MongoDB"],
      color: "bg-orange-500/10 text-orange-500"
    },
    {
      title: "Data Warehouses",
      icon: Warehouse,
      skills: ["Hive", "BigQuery", "Snowflake"],
      color: "bg-indigo-500/10 text-indigo-500"
    },
    {
      title: "Messaging",
      icon: MessageSquare,
      skills: ["Confluent Kafka"],
      color: "bg-pink-500/10 text-pink-500"
    },
    {
      title: "Distributed Computing",
      icon: Cpu,
      skills: ["Apache Hadoop", "Apache Spark", "DataBricks"],
      color: "bg-red-500/10 text-red-500"
    },
    {
      title: "Workflow",
      icon: Workflow,
      skills: ["Airflow"],
      color: "bg-teal-500/10 text-teal-500"
    },
    {
      title: "Containers/Build",
      icon: Container,
      skills: ["Docker"],
      color: "bg-cyan-500/10 text-cyan-500"
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: ["Git"],
      color: "bg-yellow-500/10 text-yellow-500"
    },
    {
      title: "Cloud",
      icon: Cloud,
      skills: ["GCP", "Azure"],
      color: "bg-emerald-500/10 text-emerald-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-hero-accent mx-auto"></div>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I work with to build robust data solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="p-6 bg-card-bg border-border hover:border-hero-accent transition-all duration-300 group">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color} group-hover:scale-110 transition-transform`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-text-primary">{category.title}</h3>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="secondary"
                          className="bg-muted text-text-secondary hover:bg-hero-accent hover:text-white transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-hero-accent mb-2">15+</div>
              <div className="text-text-secondary">Programming Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-hero-accent mb-2">10+</div>
              <div className="text-text-secondary">Database Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-hero-accent mb-2">5+</div>
              <div className="text-text-secondary">Cloud Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-hero-accent mb-2">20+</div>
              <div className="text-text-secondary">Tools & Frameworks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;