
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FaqSection() {
  const faqs = [
    {
      question: "How do the courses work?",
      answer: "Our courses combine video lectures, interactive quizzes, hands-on projects, and supplementary materials. You can learn at your own pace, and most courses include access to a community forum where you can ask questions and get support from instructors and fellow students."
    },
    {
      question: "Do I get a certificate upon completion?",
      answer: "Yes, all of our courses include a certificate of completion that you can add to your resume or LinkedIn profile. Some advanced courses also offer professional certification that is recognized in the industry."
    },
    {
      question: "How long do I have access to course materials?",
      answer: "Once you enroll in a course, you have lifetime access to all course materials, including future updates. This allows you to revisit concepts and stay current with evolving technologies."
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer: "Each course has different prerequisites depending on its level. Beginner courses typically have no prerequisites, while intermediate and advanced courses may require basic knowledge in related fields. The prerequisites are always clearly stated on the course page."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes, we offer a 30-day money-back guarantee for all courses. If you're not satisfied with your purchase, you can request a full refund within 30 days of enrollment."
    },
    {
      question: "How do I get help if I'm stuck on a lesson?",
      answer: "We provide multiple support channels including discussion forums for each course, direct messaging with instructors, and our AI-powered chatbot for immediate assistance with common questions."
    },
  ];

  return (
    <div className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full inline-block mb-3">
          Common questions
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-lg">
          Everything you need to know about our platform and courses
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
