import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "jatin.rana@email.com",
      subInfo: "Let's discuss opportunities",
      action: "mailto:jatin.rana@email.com"
    },
    {
      icon: Phone,
      title: "Call",
      info: "+91 XXX XXX XXXX",
      subInfo: "Available during business hours",
      action: "tel:+91XXXXXXXXXX"
    },
    {
      icon: MapPin,
      title: "Location",
      info: "India",
      subInfo: "Open to remote opportunities",
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "#",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      name: "GitHub",
      url: "#",
      color: "hover:text-gray-600"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "#",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">Let's Work Together</h2>
            <div className="w-24 h-1 bg-hero-accent mx-auto"></div>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
              Have a project in mind or want to discuss data engineering opportunities? 
              I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <h3 className="text-2xl font-semibold text-text-primary mb-6">Get In Touch</h3>
              
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <Card key={index} className="p-6 bg-card-bg border-border hover:border-hero-accent transition-colors group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-hero-accent/10 rounded-lg flex items-center justify-center group-hover:bg-hero-accent/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-hero-accent" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-text-primary">{contact.title}</h4>
                        {contact.action ? (
                          <a 
                            href={contact.action}
                            className="text-hero-accent hover:underline font-medium"
                          >
                            {contact.info}
                          </a>
                        ) : (
                          <p className="text-hero-accent font-medium">{contact.info}</p>
                        )}
                        <p className="text-text-secondary text-sm">{contact.subInfo}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}

              {/* Social Links */}
              <div className="pt-6">
                <h4 className="text-lg font-semibold text-text-primary mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        className={`w-12 h-12 bg-card-bg border border-border rounded-lg flex items-center justify-center text-text-secondary transition-all hover:border-hero-accent hover:bg-hero-accent/10 ${social.color}`}
                        aria-label={social.name}
                      >
                        <IconComponent className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 bg-card-bg border-border">
                <h3 className="text-2xl font-semibold text-text-primary mb-6">Send Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-text-primary font-medium mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="bg-background border-border focus:border-hero-accent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-text-primary font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-background border-border focus:border-hero-accent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-text-primary font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="bg-background border-border focus:border-hero-accent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-text-primary font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={6}
                      required
                      className="bg-background border-border focus:border-hero-accent resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-hero-accent hover:bg-hero-accent/90 text-white py-3 text-lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;