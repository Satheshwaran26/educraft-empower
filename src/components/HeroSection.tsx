
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"
          aria-hidden="true"
        />
        <div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"
          aria-hidden="true"
        />
      </div>
      
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="space-y-6 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <p className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full inline-block animate-fade-in">
              Revolutionizing online education
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in [animation-delay:200ms]">
              Learn new skills <br/>
              <span className="text-primary">Master your future</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed animate-fade-in [animation-delay:400ms]">
              Discover our premium collection of expert-led courses designed to elevate your career and transform your potential.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in [animation-delay:600ms]">
              <Button size="lg" className="group">
                Explore courses
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="group"
                onClick={() => setVideoOpen(true)}
              >
                <Play className="mr-2 h-4 w-4" />
                Watch demo
              </Button>
            </div>
            <div className="pt-4 flex items-center justify-center lg:justify-start space-x-4 animate-fade-in [animation-delay:800ms]">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center overflow-hidden">
                    <span className="font-medium text-xs">{i}K+</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Join <span className="font-medium text-foreground">12,000+</span> students
              </p>
            </div>
          </div>
          
          <div className="relative mx-auto animate-fade-in [animation-delay:800ms]">
            <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" 
                alt="Students learning together"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="glass absolute -bottom-6 -right-6 p-4 rounded-lg shadow-lg max-w-xs animate-float">
              <div className="flex items-start space-x-3">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <span className="text-lg font-bold">4.9</span>
                </div>
                <div>
                  <p className="font-medium">Exceptional Learning Experience</p>
                  <p className="text-sm text-muted-foreground">Based on 10,000+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          <div className="aspect-video">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0" 
              title="Introduction Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
