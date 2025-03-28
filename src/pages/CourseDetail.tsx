import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Award, BookOpen, CheckCircle, Clock, Download, FileText, Play, Star, Video } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

// This would normally come from an API
const courseData = {
  "ios-dev": {
    title: "iOS App Development",
    description: "Learn to build beautiful iOS apps with Swift and SwiftUI",
    fullDescription: "Master the art of iOS app development in this comprehensive course. You'll learn Swift programming from the ground up, understand iOS app architecture, and build beautiful user interfaces with SwiftUI. By the end of this course, you'll have created several real-world apps that you can add to your portfolio.",
    image: "/public/course video.mp4",
    rating: 4.9,
    reviewCount: 1240,
    duration: "8 weeks",
    level: "Intermediate",
    modules: [
      {
        title: "Getting Started with Swift",
        lessons: [
          { title: "Introduction to Swift Programming", duration: "45 min", completed: true },
          { title: "Swift Syntax and Data Types", duration: "1 hr", completed: true },
          { title: "Control Flow in Swift", duration: "1 hr", completed: false },
          { title: "Functions and Closures", duration: "1.5 hr", completed: false },
        ]
      },
      {
        title: "iOS App Architecture",
        lessons: [
          { title: "Understanding the iOS Platform", duration: "1 hr", completed: false },
          { title: "Model-View-Controller Pattern", duration: "1.5 hr", completed: false },
          { title: "SwiftUI Fundamentals", duration: "2 hr", completed: false },
          { title: "State and Data Flow", duration: "1.5 hr", completed: false },
        ]
      },
      {
        title: "Building User Interfaces",
        lessons: [
          { title: "Layout with SwiftUI", duration: "1.5 hr", completed: false },
          { title: "Lists and Navigation", duration: "1.5 hr", completed: false },
          { title: "Forms and User Input", duration: "1 hr", completed: false },
          { title: "Advanced UI Components", duration: "2 hr", completed: false },
        ]
      },
      {
        title: "Working with Data",
        lessons: [
          { title: "Networking and API Integration", duration: "2 hr", completed: false },
          { title: "Core Data Fundamentals", duration: "1.5 hr", completed: false },
          { title: "Data Persistence Strategies", duration: "1.5 hr", completed: false },
          { title: "CloudKit Integration", duration: "2 hr", completed: false },
        ]
      },
      {
        title: "Final Project",
        lessons: [
          { title: "Project Planning and Setup", duration: "1 hr", completed: false },
          { title: "Building Core Features", duration: "3 hr", completed: false },
          { title: "UI Polish and Animations", duration: "2 hr", completed: false },
          { title: "Testing and Deployment", duration: "2 hr", completed: false },
        ]
      }
    ],
    instructor: {
      name: "David Chen",
      role: "Senior iOS Developer",
      company: "Former Apple Engineer",
      avatar: "https://i.pravatar.cc/150?img=13",
      bio: "David has over 10 years of experience in iOS development and has worked on several popular apps in the App Store. He's passionate about teaching and helping students build beautiful, functional iOS applications."
    },
    materials: [
      { title: "Swift Programming Guide", type: "PDF", size: "4.2 MB" },
      { title: "SwiftUI Cheat Sheet", type: "PDF", size: "2.1 MB" },
      { title: "Xcode Setup Guide", type: "PDF", size: "1.8 MB" },
      { title: "Project Source Code", type: "ZIP", size: "24.6 MB" },
    ]
  },
  // Add other courses as needed
};

export default function CourseDetail() {
  const { courseId } = useParams();
  const [selectedVideo, setSelectedVideo] = useState(0);
  
  // Get course data based on courseId
  const course = courseData[courseId as keyof typeof courseData];
  
  // If course doesn't exist, display error
  if (!course) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
          <p className="text-muted-foreground mb-8">The course you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/courses">Browse Courses</Link>
          </Button>
        </div>
        <Footer />
      </>
    );
  }
  
  // Calculate progress
  const totalLessons = course.modules.reduce((total, module) => total + module.lessons.length, 0);
  const completedLessons = course.modules.reduce((total, module) => 
    total + module.lessons.filter(lesson => lesson.completed).length, 0);
  const progressPercentage = Math.round((completedLessons / totalLessons) * 100);

  return (
    <>
      <Navbar />
      
      <div className="pt-20 pb-16">
        {/* Course Header */}
        <div className="bg-primary/5 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
                <p className="text-muted-foreground text-lg mb-6">{course.fullDescription}</p>
                
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-medium mr-1">{course.rating}</span>
                    <span className="text-muted-foreground">({course.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                    <span className="text-muted-foreground">{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 text-muted-foreground mr-1" />
                    <span className="text-muted-foreground">{course.level}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mb-6">
                  <img 
                    src={course.instructor.avatar} 
                    alt={course.instructor.name} 
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{course.instructor.name}</p>
                    <p className="text-sm text-muted-foreground">{course.instructor.role}, {course.instructor.company}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <Button size="lg">
                    Enroll in Course
                  </Button>
                  <Button variant="outline" size="lg">
                    Try Free Preview
                  </Button>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <video 
                  src={course.image}
                  className="w-full aspect-video object-cover"
                  controls
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="curriculum">
                <TabsList className="mb-8">
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="instructor">Instructor</TabsTrigger>
                </TabsList>
                
                <TabsContent value="curriculum" className="space-y-6">
                  <div className="bg-card border border-border rounded-lg p-4 mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Your Progress</h3>
                      <span className="text-sm">{completedLessons} of {totalLessons} lessons completed</span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                  </div>
                  
                  {course.modules.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="border border-border rounded-lg overflow-hidden">
                      <div className="bg-muted p-4">
                        <h3 className="font-semibold">{module.title}</h3>
                      </div>
                      <div className="divide-y divide-border">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <div key={lessonIndex} className="p-4 flex items-center justify-between">
                            <div className="flex items-center">
                              <div className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 ${
                                lesson.completed 
                                  ? 'bg-primary/10 text-primary' 
                                  : 'bg-muted text-muted-foreground'
                              }`}>
                                {lesson.completed ? <CheckCircle className="h-4 w-4" /> : (moduleIndex * 4 + lessonIndex + 1)}
                              </div>
                              <div>
                                <h4 className="font-medium">{lesson.title}</h4>
                                <div className="flex items-center text-sm text-muted-foreground">
                                  <Video className="h-3 w-3 mr-1" />
                                  <span>{lesson.duration}</span>
                                </div>
                              </div>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => setSelectedVideo(moduleIndex * 4 + lessonIndex)}
                            >
                              <Play className="h-4 w-4 mr-1" />
                              Play
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="overview" className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>About This Course</h3>
                    <p>
                      This comprehensive course will take you from the fundamentals of Swift programming to 
                      building sophisticated iOS applications with SwiftUI. Through a series of hands-on 
                      projects, you'll learn to create beautiful, responsive user interfaces, integrate with 
                      APIs, manage data persistence, and publish your apps to the App Store.
                    </p>
                    
                    <h3>What You'll Learn</h3>
                    <ul>
                      <li>Swift programming language fundamentals</li>
                      <li>iOS app architecture and design patterns</li>
                      <li>Building dynamic user interfaces with SwiftUI</li>
                      <li>Working with data, networking, and persistence</li>
                      <li>App deployment and submission to the App Store</li>
                    </ul>
                    
                    <h3>Requirements</h3>
                    <ul>
                      <li>A Mac computer running macOS Monterey or later</li>
                      <li>Basic programming knowledge (any language)</li>
                      <li>Xcode 13 or later (free download)</li>
                    </ul>
                    
                    <h3>Who This Course is For</h3>
                    <ul>
                      <li>Beginners with some programming experience</li>
                      <li>Web developers looking to transition to mobile</li>
                      <li>Designers interested in implementing their own designs</li>
                      <li>Entrepreneurs wanting to build their own iOS apps</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-lg flex items-center space-x-4">
                    <Award className="h-12 w-12 text-primary" />
                    <div>
                      <h3 className="font-semibold text-lg">Certificate of Completion</h3>
                      <p className="text-muted-foreground">
                        Upon completing this course, you'll receive an industry-recognized certificate to showcase your skills.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="instructor">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
                      <img 
                        src={course.instructor.avatar} 
                        alt={course.instructor.name} 
                        className="h-24 w-24 rounded-full"
                      />
                      <div>
                        <h3 className="text-xl font-semibold">{course.instructor.name}</h3>
                        <p className="text-muted-foreground">{course.instructor.role}, {course.instructor.company}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      {course.instructor.bio}
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold">12</div>
                        <div className="text-sm text-muted-foreground">Courses</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">10,243</div>
                        <div className="text-sm text-muted-foreground">Students</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">4.9</div>
                        <div className="text-sm text-muted-foreground">Rating</div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div>
              <div className="bg-card border border-border rounded-lg sticky top-24">
                <div className="p-6 border-b border-border">
                  <h3 className="font-semibold text-lg mb-4">Study Materials</h3>
                  <div className="space-y-4">
                    {course.materials.map((material, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-md">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-muted-foreground mr-2" />
                          <div>
                            <p className="font-medium text-sm">{material.title}</p>
                            <p className="text-xs text-muted-foreground">{material.type} • {material.size}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Interactive Quiz</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Test your knowledge with our interactive quizzes after each module.
                  </p>
                  <Button className="w-full">Start Quiz</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <Chatbot />
    </>
  );
}
