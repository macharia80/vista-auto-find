
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactSellerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  sellerName: string;
  carTitle: string;
}

const ContactSellerModal: React.FC<ContactSellerModalProps> = ({
  open,
  onOpenChange,
  sellerName,
  carTitle,
}) => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real app, this would send the message to the seller
    // For now, we'll just show a toast notification
    toast({
      title: "Message sent!",
      description: `Your message has been sent to ${sellerName}. They will get back to you soon.`,
    });
    
    onOpenChange(false);
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-orange" />
            Contact Seller
          </DialogTitle>
          <DialogDescription>
            Send a message to {sellerName} about {carTitle}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="Enter your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Your Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" required />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number (optional)</Label>
            <Input id="phone" type="tel" placeholder="Enter your phone number" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder={`Hi ${sellerName}, I'm interested in this ${carTitle}...`}
              className="min-h-[120px]"
              required
            />
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-orange hover:bg-orange/90 text-white">
              Send Message
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactSellerModal;
