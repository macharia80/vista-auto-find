
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Car } from '@/context/CartContext';
import { useCart } from '@/context/CartContext';
import { formatCurrency } from '@/lib/utils';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const { addToCart } = useCart();
  
  return (
    <Card className="car-card overflow-hidden flex flex-col h-full">
      <div className="relative">
        <Link to={`/cars/${car.id}`}>
          <img 
            src={car.imageUrl} 
            alt={`${car.make} ${car.model}`} 
            className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
        <button 
          className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full hover:bg-white transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart className="h-5 w-5 text-gray-600 hover:text-orange" />
        </button>
        <Badge 
          className="absolute bottom-2 left-2 bg-orange text-white"
        >
          {car.year}
        </Badge>
      </div>
      
      <CardContent className="flex-grow flex flex-col p-4">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/cars/${car.id}`} className="hover:text-orange">
            <h3 className="font-semibold text-lg">{car.make} {car.model}</h3>
          </Link>
          <p className="font-bold text-lg text-orange">
            {formatCurrency(car.price)}
          </p>
        </div>
        
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {car.mileage.toLocaleString()} km • {car.transmission} • {car.fuelType}
        </p>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2 mb-4">
          {car.description}
        </p>
        
        <div className="mt-auto flex gap-2">
          <Link to={`/cars/${car.id}`} className="flex-1">
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </Link>
          <Button 
            className="bg-orange hover:bg-orange/90 text-white"
            onClick={() => addToCart(car)}
          >
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCard;
