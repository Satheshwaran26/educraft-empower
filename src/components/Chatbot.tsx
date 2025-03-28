
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, X, Send } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! How can I help you today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage = { id: Date.now(), text: inputValue, isBot: false };
    setMessages([...messages, userMessage]);
    setInputValue("");
    
    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponses = [
        "Thanks for your message! Our team will get back to you shortly.",
        "That's a great question about our courses.",
        "I can help you find the right course for your needs.",
        "Our most popular course is Web Development. Would you like to learn more?",
        "You can start learning immediately after signing up!"
      ];
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      const botMessage = { id: Date.now() + 1, text: randomResponse, isBot: true };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Chatbot floating button */}
      <Button
        className={`h-14 w-14 rounded-full shadow-lg ${isOpen ? 'bg-destructive hover:bg-destructive/90' : 'bg-primary hover:bg-primary/90'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </Button>
      
      {/* Chatbot dialog */}
      <div 
        className={`absolute bottom-20 right-0 w-80 sm:w-96 bg-card rounded-lg shadow-xl border border-border transition-all duration-300 ease-spring transform ${
          isOpen 
            ? 'scale-100 opacity-100 translate-y-0' 
            : 'scale-95 opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-4 rounded-t-lg">
          <h3 className="font-semibold">Chat with us</h3>
          <p className="text-primary-foreground/80 text-sm">We typically reply within a few minutes</p>
        </div>
        
        {/* Messages */}
        <div className="p-4 h-80 overflow-y-auto flex flex-col space-y-3">
          {messages.map(message => (
            <div 
              key={message.id}
              className={`px-4 py-2 rounded-lg max-w-[80%] ${
                message.isBot 
                  ? 'bg-secondary self-start' 
                  : 'bg-primary text-primary-foreground self-end'
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        
        {/* Input */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1 p-2 bg-background border border-input rounded-l-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
            <Button 
              className="rounded-l-none"
              onClick={handleSendMessage}
            >
              <Send size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
