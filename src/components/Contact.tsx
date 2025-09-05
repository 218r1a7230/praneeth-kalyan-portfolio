import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Linkedin, Github, Code2, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form submission - you can integrate with Formspree or other service later
    toast({
      title: "Message received!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "218r1a7230.cmrec@gmail.com",
      link: "mailto:218r1a7230.cmrec@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7386919903",
      link: "tel:+917386919903"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/praneeth-kalyan-gurramolla-9b8709284/"
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/218r1a7230"
    },
    {
      icon: Code2,
      label: "LeetCode",
      url: "https://leetcode.com/218r1a7230"
    }
  ];

  const openLink = (url: string) => {
    if (url !== "#") {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="card-hover border-none bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium text-foreground">{info.label}</p>
                        {info.link !== "#" ? (
                          <a 
                            href={info.link}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="card-hover border-none bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    Connect With Me
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-3">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        className="justify-start h-auto p-3 hover:bg-primary-light/50"
                        onClick={() => openLink(social.url)}
                      >
                        <social.icon className="w-5 h-5 mr-3 text-primary" />
                        <span className="text-foreground">{social.label}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-hover border-none bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    Send a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={onSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground font-medium">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="border-border focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground font-medium">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-border focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-foreground font-medium">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project, opportunity, or just say hello!"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="border-border focus:border-primary resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg"
                      className="hero-gradient text-primary-foreground hover:opacity-90 w-full md:w-auto px-8"
                    >
                      <Send className="mr-2" size={16} />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;