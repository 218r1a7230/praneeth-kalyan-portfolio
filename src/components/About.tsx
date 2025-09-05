import { Card, CardContent } from '@/components/ui/card';
import { Target, Code, Brain, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Problem Solver",
      description: "400+ LeetCode problems solved with strong foundations in Data Structures & Algorithms"
    },
    {
      icon: Code,
      title: "Backend Focus",
      description: "Specialized in Python, FastAPI, Flask, and REST API development"
    },
    {
      icon: Brain,
      title: "Continuous Learner",
      description: "AI & Data Science student with multiple certifications in emerging technologies"
    },
    {
      icon: Heart,
      title: "Team Player",
      description: "Eager to contribute to real-world projects in a collaborative environment"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Career Objective */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Career Objective
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To begin my career as a <strong className="text-primary">Software Developer </strong>, 
                leveraging my skills in Python, Flask, REST APIs, and MySQL to contribute to real-world projects. 
                Eager to apply problem-solving abilities (400+ LeetCode problems solved) and strong foundations 
                in Data Structures & Algorithms while continuously learning and growing in a collaborative environment.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="text-3xl font-bold text-primary">400+</div>
                <div className="text-sm text-muted-foreground">
                  LeetCode Problems<br />Solved
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="card-hover border-none bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;