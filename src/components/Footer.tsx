import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Praneeth Kalyan Gurramolla</h3>
              <p className="text-background/80 text-sm leading-relaxed">
                Aspiring Python Developer passionate about building scalable backend solutions 
                and solving complex problems with modern technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-background">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  { href: '#about', label: 'About' },
                  { href: '#skills', label: 'Skills' },
                  { href: '#projects', label: 'Projects' },
                  { href: '#certifications', label: 'Certifications' },
                  { href: '#education', label: 'Education' },
                  { href: '#contact', label: 'Contact' }
                ].map((link) => (
                  <button
                    key={link.href}
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-background/80 hover:text-background transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-background">Contact</h4>
              <div className="space-y-2 text-sm text-background/80">
                <p>Hyderabad, India</p>
                <p>218r1a7230.cmrec@gmail.com</p>
                <p>+91 7386919903</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-background/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-1 text-background/80 text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span>by Praneeth Kalyan Gurramolla</span>
              </div>
              
              <div className="text-background/80 text-sm">
                © {new Date().getFullYear()} All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute bottom-4 right-4 bg-background/10 hover:bg-background/20 text-background border border-background/20"
        onClick={scrollToTop}
      >
        <ArrowUp size={16} />
        <span className="sr-only">Scroll to top</span>
      </Button>
    </footer>
  );
};

export default Footer;