import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Star,
  MapPin,
  Calendar,
  PhoneCall,
  Mail,
  MessageSquare,
  Shield,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

interface SellerProfileModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  sellerName: string;
  onContactClick: () => void;
}

// This would come from an API in a real application
const sellerInfo = {
  name: "John Doe",
  joinDate: "2020",
  location: "Nairobi, Kenya",
  rating: 4.8,
  reviewCount: 24,
  listedCars: 5,
  soldCars: 12,
  verifiedSeller: true,
  responseTime: "Usually responds within 2 hours",
  recentCars: [
    { id: "1", title: "2019 Toyota Camry", image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
    { id: "2", title: "2018 Honda Accord", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" },
  ]
};

const SellerProfileModal: React.FC<SellerProfileModalProps> = ({
  open,
  onOpenChange,
  sellerName,
  onContactClick,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <User className="h-5 w-5 text-orange" />
            Seller Profile
          </DialogTitle>
          <DialogDescription>
            Information about {sellerName}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Seller Overview */}
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-2xl font-medium text-gray-600">JD</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold">{sellerInfo.name}</h3>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                <span>Member since {sellerInfo.joinDate}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <MapPin className="h-4 w-4" />
                <span>{sellerInfo.location}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-orange" />
                <span className="font-medium">Seller Rating</span>
              </div>
              <div className="mt-2">
                <span className="text-xl font-bold">{sellerInfo.rating}/5.0</span>
                <span className="text-sm text-gray-500 ml-2">({sellerInfo.reviewCount} reviews)</span>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-orange" />
                <span className="font-medium">Response Time</span>
              </div>
              <div className="mt-2">
                <span className="text-sm">{sellerInfo.responseTime}</span>
              </div>
            </div>
          </div>
          
          <Separator />
          
          {/* Seller Stats */}
          <div>
            <h4 className="font-semibold mb-3">Seller Activity</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-orange/10 rounded-full flex items-center justify-center">
                  <span className="text-orange font-medium">{sellerInfo.listedCars}</span>
                </div>
                <span className="text-sm">Cars Currently Listed</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-medium">{sellerInfo.soldCars}</span>
                </div>
                <span className="text-sm">Cars Sold</span>
              </div>
            </div>
          </div>
          
          {sellerInfo.verifiedSeller && (
            <div className="flex items-center gap-2 bg-green-50 text-green-700 p-3 rounded-md">
              <Shield className="h-5 w-5" />
              <span>Verified Seller</span>
            </div>
          )}
          
          <Separator />
          
          {/* Other Listings */}
          {sellerInfo.recentCars.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3">Other Cars from this Seller</h4>
              <div className="grid grid-cols-2 gap-4">
                {sellerInfo.recentCars.map((car) => (
                  <Card key={car.id} className="overflow-hidden">
                    <img 
                      src={car.image} 
                      alt={car.title} 
                      className="h-32 w-full object-cover"
                    />
                    <div className="p-3">
                      <h5 className="font-medium text-sm">{car.title}</h5>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex gap-4 mt-4">
            <Button 
              onClick={onContactClick} 
              className="bg-orange hover:bg-orange/90 text-white flex-1"
            >
              <Mail className="mr-2 h-4 w-4" /> Contact Seller
            </Button>
            <Button variant="outline" className="flex-1">
              <PhoneCall className="mr-2 h-4 w-4" /> Request Call Back
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SellerProfileModal;
