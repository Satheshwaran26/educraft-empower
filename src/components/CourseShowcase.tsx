
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Clock, BarChart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Course data
const courses = {
  "app-development": [
    {
      id: "ios-dev",
      title: "iOS App Development",
      description: "Learn to build beautiful iOS apps with Swift and SwiftUI",
      image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80",
      rating: 4.9,
      duration: "8 weeks",
      level: "Intermediate"
    },
    {
      id: "android-dev",
      title: "Android App Development",
      description: "Master Android development with Kotlin and Jetpack Compose",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      rating: 4.8,
      duration: "10 weeks",
      level: "Intermediate"
    },
    {
      id: "flutter-dev",
      title: "Cross-Platform with Flutter",
      description: "Build apps for iOS and Android with a single codebase",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      rating: 4.7,
      duration: "6 weeks",
      level: "Beginner"
    },
  ],
  "web-development": [
    {
      id: "react-dev",
      title: "Modern React Development",
      description: "Master React with hooks, context, and modern patterns",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
      rating: 4.9,
      duration: "8 weeks",
      level: "Intermediate"
    },
    {
      id: "next-js",
      title: "Next.js Full-Stack Development",
      description: "Build production-ready full-stack applications with Next.js",
      image: "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      rating: 4.8,
      duration: "10 weeks",
      level: "Advanced"
    },
    {
      id: "responsive-design",
      title: "Responsive Web Design",
      description: "Create beautiful websites that work on any device",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      rating: 4.7,
      duration: "4 weeks",
      level: "Beginner"
    },
  ],
  "software-development": [
    {
      id: "python-advanced",
      title: "Advanced Python Programming",
      description: "Take your Python skills to the next level with advanced concepts",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      rating: 4.9,
      duration: "8 weeks",
      level: "Advanced"
    },
    {
      id: "system-design",
      title: "System Design for Engineers",
      description: "Learn to design scalable systems for modern applications",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      rating: 4.8,
      duration: "10 weeks",
      level: "Advanced"
    },
    {
      id: "algorithms",
      title: "Algorithms & Data Structures",
      description: "Master the fundamentals of computer science",
      image: "https://images.unsplash.com/photo-1503437313881-503a91226402?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
      rating: 4.9,
      duration: "12 weeks",
      level: "Intermediate"
    },
  ]
};

export default function CourseShowcase() {
  return (
    <div className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full inline-block mb-3">
          Expand your skills
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Discover our premium courses
        </h2>
        <p className="text-muted-foreground text-lg">
          Learn from industry experts and advance your career with our carefully crafted courses.
        </p>
      </div>
      
      <Tabs defaultValue="app-development" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="grid w-full max-w-lg grid-cols-3">
            <TabsTrigger value="app-development">App Development</TabsTrigger>
            <TabsTrigger value="web-development">Web Development</TabsTrigger>
            <TabsTrigger value="software-development">Software Development</TabsTrigger>
          </TabsList>
        </div>
        
        {Object.entries(courses).map(([category, categoryCourses]) => (
          <TabsContent key={category} value={category} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden transition-all duration-300 hover:shadow-xl">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <BarChart className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{course.level}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link to={`/course/${course.id}`}>
                        View Course
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="outline" size="lg">
                View all {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} courses
              </Button>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
