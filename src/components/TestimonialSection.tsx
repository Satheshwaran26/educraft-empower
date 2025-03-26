
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Frontend Developer",
      content: "The web development course completely transformed my career. The instructor's expertise and the hands-on projects helped me secure a job at a top tech company within two months of completion.",
      avatar: "https://i.pravatar.cc/150?img=1",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "iOS Developer",
      content: "I've taken many online courses before, but none compare to the iOS Development program here. The curriculum is comprehensive, and the support from instructors is exceptional.",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Full-Stack Engineer",
      content: "The Next.js course provided exactly what I needed to level up my skills. The projects were challenging and relevant to real-world scenarios. Highly recommended!",
      avatar: "https://i.pravatar.cc/150?img=3",
      rating: 4
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "Product Manager",
      content: "As someone transitioning from a non-technical role, the System Design course was perfectly paced. It gave me the confidence to speak the language of engineers on my team.",
      avatar: "https://i.pravatar.cc/150?img=10",
      rating: 5
    },
    {
      id: 5,
      name: "David Kim",
      role: "Software Engineer",
      content: "The Algorithms & Data Structures course helped me ace my technical interviews. The instructor's approach made complex concepts easily digestible.",
      avatar: "https://i.pravatar.cc/150?img=8",
      rating: 5
    },
  ];

  return (
    <div className="bg-primary/5 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Success stories
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What our students say
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from our community of learners who have transformed their careers through our courses.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center space-x-2 mb-3">
                      {Array(5).fill(0).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`} 
                        />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-6 flex-1">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center space-x-3 mt-auto">
                      <div className="h-10 w-10 rounded-full overflow-hidden">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-12" />
          <CarouselNext className="hidden sm:flex -right-12" />
        </Carousel>
      </div>
    </div>
  );
}
