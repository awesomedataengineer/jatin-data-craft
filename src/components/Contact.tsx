import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "awesomedataengineer@email.com",
      subInfo: "Let's discuss opportunities",
      action: "mailto:awesomedataengineer@email.com",
    },
    {
      icon: Phone,
      title: "Call",
      info: "+91 8383853136",
      subInfo: "Available during business hours",
      action: "tel:+918383853136",
    },
    {
      icon: MapPin,
      title: "Location",
      info: "India",
      subInfo: "Open to Remote Opportunities",
      action: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "#",
      color: "hover:text-blue-600",
    },
    {
      icon: Github,
      name: "GitHub",
      url: "#",
      color: "hover:text-gray-600",
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "#",
      color: "hover:text-blue-400",
    },
  ];

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current == null) {
      toast({
        title: "Form not found",
        description: "Unable to send message at this time.",
        variant: "destructive",
      });
      return;
    }

    emailjs
      .sendForm(
        "service_me7tdc8", // Replace with your actual Service ID
        "template_pvlutfj", // Replace with your actual Template ID
        form.current,
        "waVANUSzr2J5DmAFe" // Replace with your actual Public Key (User ID)
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Thank you for reaching out.",
          });
          form.current?.reset();
        },
        () => {
          toast({
            title: "Error",
            description: "Something went wrong. Please try again later.",
            variant: "destructive",
          });
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-hero-accent mx-auto"></div>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
              Have A Project in Mind or Want to Discuss Data Engineering
              Opportunities? I'd Love to Hear from You!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <h3 className="text-2xl font-semibold text-text-primary mb-6">
                Get In Touch
              </h3>
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 bg-card-bg border-border hover:border-hero-accent transition-colors group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-hero-accent/10 rounded-lg flex items-center justify-center group-hover:bg-hero-accent/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-hero-accent" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-text-primary">
                          {contact.title}
                        </h4>
                        {contact.action ? (
                          <a
                            href={contact.action}
                            className="text-hero-accent hover:underline font-medium"
                          >
                            {contact.info}
                          </a>
                        ) : (
                          <p className="text-hero-accent font-medium">
                            {contact.info}
                          </p>
                        )}
                        <p className="text-text-secondary text-sm">
                          {contact.subInfo}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}

              {/* Uncomment and update social links if needed
              <div className="pt-6">
                <h4 className="text-lg font-semibold text-text-primary mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        className={`w-12 h-12 bg-card-bg border border-border rounded-lg flex items-center justify-center text-text-secondary transition-all hover:border-hero-accent hover:bg-hero-accent/10 ${social.color}`}
                        aria-label={social.name}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconComponent className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div> 
              */}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 bg-card-bg border-border">
                <h3 className="text-2xl font-semibold text-text-primary mb-6">
                  Send Message
                </h3>

                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="from_name"
                        className="block text-text-primary font-medium mb-2"
                      >
                        Full Name
                      </label>
                      <Input
                        id="from_name"
                        name="from_name"
                        placeholder="Your full name"
                        required
                        className="bg-background border-border focus:border-hero-accent"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="from_email"
                        className="block text-text-primary font-medium mb-2"
                      >
                        Email Address
                      </label>
                      <Input
                        id="from_email"
                        name="from_email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="bg-background border-border focus:border-hero-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-text-primary font-medium mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      required
                      className="bg-background border-border focus:border-hero-accent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-text-primary font-medium mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
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
