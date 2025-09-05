import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, BookOpen, Brain, Code, Database, Trophy } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Generative AI Certification",
      issuer: "Oracle University",
      icon: Brain,
      category: "AI/ML",
      description: "Advanced training in generative AI technologies and applications"
    },
    {
      title: "Data Structures & Algorithms Training",
      issuer: "Smart Interviews",
      icon: Trophy,
      category: "Programming",
      description: "Comprehensive training in DSA concepts and problem-solving techniques"
    },
    {
      title: "Machine Learning Foundations",
      issuer: "Coursera",
      icon: BookOpen,
      category: "AI/ML",
      description: "Fundamental concepts and practical applications of machine learning"
    },
    {
      title: "Python ",
      issuer: "Hackerrank",
      icon: Code,
      category: "Programming",
      description: "Advanced Python programming concepts and best practices"
    },
    {
      title: "Java Programming",
      issuer: "Coursera",
      icon: Code,
      category: "Programming",
      description: "Object-oriented programming and Java development fundamentals"
    },
    {
      title: "SQL (Intermediate)",
      issuer: "Spoken Tutorial",
      icon: Database,
      category: "Database",
      description: "Database design, queries, and management with SQL"
    }
  ];

  const categoryColors = {
    "AI/ML": "bg-purple-100 text-purple-700 border-purple-200",
    "Programming": "bg-blue-100 text-blue-700 border-blue-200",
    "Database": "bg-green-100 text-green-700 border-green-200"
  };

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Certifications & Training
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Continuous learning through recognized certifications and professional training programs
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-hover border-none bg-card/50 backdrop-blur-sm group">
                <CardContent className="p-6 text-center space-y-4">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <cert.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Category Badge */}
                  <Badge 
                    variant="outline" 
                    className={categoryColors[cert.category as keyof typeof categoryColors]}
                  >
                    {cert.category}
                  </Badge>

                  {/* Title and Issuer */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground text-lg leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-primary font-medium">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievement Stats */}
          <div className="mt-16 bg-primary-light/20 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">6</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">AI/ML Focused</div>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Programming</div>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">400+</div>
                <div className="text-sm text-muted-foreground">LeetCode Solved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;