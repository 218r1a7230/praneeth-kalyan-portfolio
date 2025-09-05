import { Button } from '@/components/ui/button';
import { Code2, Github, Linkedin, Code, Mail, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Professional Title */}
          <div className="mb-4">
            <span className="text-primary font-semibold text-lg mb-2 block">
              Hello, I'm
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Praneeth Kalyan
              <span className="text-primary block mt-2">Gurramolla</span>
            </h1>
          </div>

          {/* Animated tagline */}
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">
              Aspiring Python Developer & Backend Enthusiast
            </h2>
            <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
              Building scalable backend solutions and solving complex problems with Python.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Hyderabad, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>218r1a7230.cmrec@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 7386919903</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="hero-gradient text-primary-foreground hover:opacity-90 font-semibold px-8"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2" size={20} />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary-light font-semibold px-8"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Code className="mr-2" size={20} />
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <Button
              variant="ghost"
              size="lg"
              className="hover:text-primary hover:scale-110 transition-all duration-200"
              onClick={() => openLink('https://www.linkedin.com/in/praneeth-kalyan-gurramolla-9b8709284/')}
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="hover:text-primary hover:scale-110 transition-all duration-200"
              onClick={() => openLink('https://github.com/218r1a7230')}
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="hover:text-primary hover:scale-110 transition-all duration-200"
              onClick={() => openLink('https://leetcode.com/218r1a7230')}
            >
              <Code2 size={24} />
              <span className="sr-only">LeetCode</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;