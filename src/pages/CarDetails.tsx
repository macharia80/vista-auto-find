
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Heart, 
  Share2, 
  Calendar, 
  Gauge, 
  Fuel, 
  Settings, 
  ArrowLeftCircle, 
  ArrowRightCircle 
} from 'lucide-react';
import { allCars } from '@/data/cars';
import { useCart } from '@/context/CartContext';
import { formatCurrency } from '@/lib/utils';
import CarCard from '@/components/CarCard';
import { Alert, AlertDescription } from '@/components/ui/alert';

const CarDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Find the car with matching id
  const car = allCars.find(car => car.id === id);
  
  // Generate similar cars (cars of same make or same price range)
  const similarCars = car 
    ? allCars
        .filter(c => 
          (c.id !== car.id) && 
          (c.make === car.make || 
          (c.price >= car.price * 0.8 && c.price <= car.price * 1.2))
        )
        .slice(0, 4)
    : [];
  
  // Fake multiple images for the demo
  const images = car ? [
    car.imageUrl,
    'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1543465077-db45d34b88a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1586263074429-55cc2a411bcf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  ] : [];
  
  if (!car) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <Alert variant="destructive" className="mb-6">
          <AlertDescription>
            Car not found. The car you're looking for might have been removed or doesn't exist.
          </AlertDescription>
        </Alert>
        <Link to="/browse">
          <Button className="bg-orange hover:bg-orange/90 text-white">
            Browse All Cars
          </Button>
        </Link>
      </div>
    );
  }
  
  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/browse" className="text-gray-500 hover:text-orange flex items-center gap-1">
          <ArrowLeftCircle size={16} />
          <span>Back to results</span>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Images and Details */}
        <div className="lg:col-span-2">
          {/* Main Image */}
          <div className="relative rounded-lg overflow-hidden bg-gray-100 mb-4 h-96">
            <img 
              src={images[activeImageIndex]} 
              alt={`${car.make} ${car.model}`} 
              className="w-full h-full object-cover"
            />
            
            <button 
              onClick={prevImage}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
              aria-label="Previous image"
            >
              <ArrowLeftCircle size={24} className="text-gray-700" />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
              aria-label="Next image"
            >
              <ArrowRightCircle size={24} className="text-gray-700" />
            </button>
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === activeImageIndex ? 'bg-orange' : 'bg-white/60'
                  }`}
                  aria-label={`Image ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Thumbnail Images */}
          <div className="grid grid-cols-4 gap-2 mb-8">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`rounded-md overflow-hidden border-2 ${
                  index === activeImageIndex ? 'border-orange' : 'border-transparent'
                }`}
              >
                <img 
                  src={image} 
                  alt={`Thumbnail ${index + 1}`} 
                  className="w-full h-20 object-cover"
                />
              </button>
            ))}
          </div>
          
          {/* Tabs with details */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="specs">Specifications</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Car Overview</h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {car.description}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  This {car.year} {car.make} {car.model} comes with a clean title and full service history. 
                  It's been well maintained and is ready for its new owner. The car is in excellent condition 
                  both mechanically and cosmetically.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                  <Calendar className="mx-auto mb-2 text-orange" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">Year</p>
                  <p className="font-semibold">{car.year}</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                  <Gauge className="mx-auto mb-2 text-orange" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">Mileage</p>
                  <p className="font-semibold">{car.mileage.toLocaleString()} km</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                  <Fuel className="mx-auto mb-2 text-orange" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">Fuel Type</p>
                  <p className="font-semibold">{car.fuelType}</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                  <Settings className="mx-auto mb-2 text-orange" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">Transmission</p>
                  <p className="font-semibold">{car.transmission}</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Car Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <div className="flex items-center gap-2 py-2">
                  <div className="w-2 h-2 bg-orange rounded-full"></div>
                  <span>Bluetooth Connectivity</span>
                </div>
                <div className="flex items-center gap-2 py-2">
                  <div className="w-2 h-2 bg-orange rounded-full"></div>
                  <span>Navigation System</span>
                </div>
                <div className="flex items-center gap-2 py-2">
                  <div className="w-2 h-2 bg-orange rounded-full"></div>
                  <span>Leather Seats</span>
                </div>
                <div className="flex items-center gap-2 py-2">
                  <div className="w-2 h-2 bg-orange rounded-full"></div>
                  <span>Backup Camera</span>
                </div>
                <div className="flex items-center gap-2 py-2">
                  <div className="w-2 h-2 bg-orange rounded-full"></div>
                  <span>Keyless Entry</span>
                </div>
                <div className="flex items-center gap-2 py-2">
                  <div className="w-2 h-2 bg-orange rounded-full"></div>
                  <span>Heated Seats</span>
                </div>
                <div className="flex items-center gap-2 py-2">
                  <div className="w-2 h-2 bg-orange rounded-full"></div>
                  <span>Sunroof</span>
                </div>
                <div className="flex items-center gap-2 py-2">
                  <div className="w-2 h-2 bg-orange rounded-full"></div>
                  <span>Premium Audio System</span>
                </div>
                <div className="flex items-center gap-2 py-2">
                  <div className="w-2 h-2 bg-orange rounded-full"></div>
                  <span>Cruise Control</span>
                </div>
                <div className="flex items-center gap-2 py-2">
                  <div className="w-2 h-2 bg-orange rounded-full"></div>
                  <span>Driver Assist Package</span>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="specs" className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Engine & Performance</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Engine Type</span>
                      <span className="font-medium">2.5L 4-cylinder</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Horsepower</span>
                      <span className="font-medium">203 hp @ 6600 rpm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Torque</span>
                      <span className="font-medium">184 lb-ft @ 5000 rpm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Fuel Economy (City/Hwy)</span>
                      <span className="font-medium">28/39 mpg</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Dimensions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Length</span>
                      <span className="font-medium">192.1 in</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Width</span>
                      <span className="font-medium">72.4 in</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Height</span>
                      <span className="font-medium">56.9 in</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Wheelbase</span>
                      <span className="font-medium">111.2 in</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Cargo Volume</span>
                      <span className="font-medium">15.1 cu ft</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Seating Capacity</span>
                      <span className="font-medium">5 passengers</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Safety</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Airbags</span>
                      <span className="font-medium">8 standard</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Anti-lock Brakes</span>
                      <span className="font-medium">Included</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Stability Control</span>
                      <span className="font-medium">Included</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Lane Departure Warning</span>
                      <span className="font-medium">Included</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Right Column - Price and Contact */}
        <div className="lg:col-span-1">
          <Card className="shadow-sm sticky top-24">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <Badge 
                    className="bg-green-100 text-green-800 hover:bg-green-100 mb-2"
                  >
                    Available
                  </Badge>
                  <h1 className="text-2xl font-bold">{car.make} {car.model}</h1>
                  <p className="text-gray-500">{car.year} • {car.mileage.toLocaleString()} km</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" aria-label="Add to wishlist">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" aria-label="Share">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-3xl font-bold text-orange">{formatCurrency(car.price)}</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <Button 
                  className="w-full bg-orange hover:bg-orange/90 text-white"
                  onClick={() => addToCart(car)}
                >
                  Add to Cart
                </Button>
                
                <Button variant="outline" className="w-full">
                  Contact Seller
                </Button>
              </div>
              
              <Separator className="my-6" />
              
              <div>
                <h3 className="font-semibold mb-3">Seller Information</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="font-medium text-gray-600">JD</span>
                  </div>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-gray-500">Member since 2020</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full text-sm">
                  View Seller Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Similar Cars Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Similar Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {similarCars.map((similarCar) => (
            <CarCard key={similarCar.id} car={similarCar} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CarDetails;
