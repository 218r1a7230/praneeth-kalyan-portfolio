import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic foundation in cutting-edge technology and artificial intelligence
            </p>
          </div>

          {/* Education Card */}
          <Card className="card-hover border-none bg-card/50 backdrop-blur-sm relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light/20 rounded-full -translate-y-16 translate-x-16"></div>
            
            <CardContent className="p-8 md:p-12 relative">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  {/* Degree and Institution */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">
                      Bachelor of Technology (B.Tech)
                    </h3>
                    <p className="text-xl text-primary font-semibold">
                      Artificial Intelligence and Data Science
                    </p>
                    <p className="text-lg text-muted-foreground">
                      CMR Engineering College
                    </p>
                  </div>

                  {/* Details */}
                  <div className="flex flex-col sm:flex-row gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>November 2021 - May 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>Hyderabad, India</span>
                    </div>
                  </div>

                  {/* Key Areas of Study */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      Key Areas of Study
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Machine Learning",
                        "Deep Learning",
                        "Data Structures & Algorithms",
                        "Database Management",
                        "Python Programming",
                        "Software Engineering",
                        "Web Development",
                        "Computer Vision",
                        "Natural Language Processing",
                        "Statistical Analysis"
                      ].map((subject, index) => (
                        <Badge 
                          key={index}
                          variant="outline" 
                          className="border-primary/30 text-primary bg-primary/5"
                        >
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Academic Achievements */}
                  <div className="bg-primary-light/20 rounded-lg p-6 space-y-3">
                    <h4 className="font-semibold text-foreground">Academic Highlights</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Specialized in AI and Data Science with focus on practical applications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Active participation in coding competitions and hackathons</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>Multiple project-based learning experiences with industry relevance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Academic Timeline */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-4 bg-card rounded-full px-6 py-3 shadow-sm border">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-sm font-medium text-foreground">Current Student</span>
              </div>
              <div className="w-px h-6 bg-border"></div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">Expected Graduation: May 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;