
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NewsletterSubscription: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        variant: "destructive",
        title: "Please enter your email",
        description: "We need your email to subscribe you to our newsletter."
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <Input 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email" 
        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
        type="email"
      />
      <Button 
        className="bg-orange hover:bg-orange/90 text-white whitespace-nowrap"
        disabled={isSubmitting}
      >
        <Bell className="mr-2 h-4 w-4" />
        {isSubmitting ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  );
};

export default NewsletterSubscription;
