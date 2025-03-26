
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import CourseShowcase from "@/components/CourseShowcase";
import TestimonialSection from "@/components/TestimonialSection";
import FaqSection from "@/components/FaqSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <CourseShowcase />
      <TestimonialSection />
      <FaqSection />
      <CallToAction />
      <Footer />
      <Chatbot />
    </div>
  );
}
