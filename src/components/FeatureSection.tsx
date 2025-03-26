
import { CheckCircle2, BookOpen, Monitor, FlaskConical, Crown, Brain } from "lucide-react";

export default function FeatureSection() {
  const features = [
    {
      icon: <Monitor className="h-6 w-6 text-primary" />,
      title: "AI-Generated Video Courses",
      description: "Personalized video content created with advanced AI to match your learning style and pace."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "Comprehensive Study Materials",
      description: "Access detailed notes, exercises, and supplementary content for deeper learning."
    },
    {
      icon: <Brain className="h-6 w-6 text-primary" />,
      title: "Interactive Quiz System",
      description: "Test your knowledge with adaptive quizzes that evolve based on your performance."
    },
    {
      icon: <FlaskConical className="h-6 w-6 text-primary" />,
      title: "Hands-On Projects",
      description: "Apply what you've learned with real-world projects that build your portfolio."
    },
    {
      icon: <Crown className="h-6 w-6 text-primary" />,
      title: "Industry Certification",
      description: "Earn recognized certificates upon course completion to showcase your expertise."
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
      title: "Expert Mentorship",
      description: "Get guidance from industry professionals who provide feedback on your progress."
    },
  ];

  return (
    <div className="bg-secondary/30 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to excel
          </h2>
          <p className="text-muted-foreground text-lg">
            Our platform combines cutting-edge technology with expert instruction to provide a superior learning experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
