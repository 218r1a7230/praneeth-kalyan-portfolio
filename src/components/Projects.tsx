import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "CouponGuard - Smart Coupon Validator & Browser Extension",
      description: "A comprehensive coupon validation system with browser extension capabilities to help users verify and apply valid discount codes automatically.",
      techStack: ["Python", "FastAPI", "Playwright", "MongoDB", "JavaScript", "Docker"],
      features: [
        "Real-time coupon validation across multiple e-commerce platforms",
        "Browser extension for seamless user experience",
        "Automated testing with Playwright for reliability",
        "Scalable backend architecture with FastAPI",
        "Docker containerization for easy deployment"
      ],
      githubUrl: "https://github.com/praneethkalyan/couponguard",
      demoUrl: "#",
      status: "Featured"
    },
    {
      title: "Smart Crop Recommendation System",
      description: "An AI-powered system that recommends optimal crops based on soil conditions, weather patterns, and historical data with exceptional accuracy.",
      techStack: ["Python", "Flask", "Scikit-learn", "JavaScript", "HTML", "CSS"],
      features: [
        "99.77% prediction accuracy using machine learning algorithms",
        "Interactive web interface for farmers and agricultural experts",
        "Multiple ML models including Random Forest and SVM",
        "Real-time data processing and recommendations",
        "Comprehensive dataset analysis and visualization"
      ],
      githubUrl: "https://github.com/praneethkalyan/crop-recommendation",
      demoUrl: "#",
      status: "High Accuracy"
    }
  ];

  const openLink = (url: string) => {
    if (url !== "#") {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative solutions built with modern technologies and best practices
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-hover border-none bg-card/50 backdrop-blur-sm overflow-hidden">
                <CardHeader className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <CardTitle className="text-xl font-bold text-foreground">
                      {project.title}
                    </CardTitle>
                    <Badge 
                      variant="secondary" 
                      className="bg-primary-light text-primary border-primary/20 self-start sm:self-center"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technology Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="border-primary/30 text-primary bg-primary/5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button 
                      className="hero-gradient text-primary-foreground hover:opacity-90"
                      onClick={() => openLink(project.githubUrl)}
                    >
                      <Github className="mr-2" size={16} />
                      View Code
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary-light"
                      onClick={() => openLink(project.demoUrl)}
                    >
                      <ExternalLink className="mr-2" size={16} />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Interested in seeing more of my work?
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary-light font-semibold px-8"
              onClick={() => openLink('https://github.com/218r1a7230')}
            >
              <Github className="mr-2" size={20} />
              Visit My GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;