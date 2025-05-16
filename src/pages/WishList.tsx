
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Trash2, ShoppingCart } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

// In a real app, this would come from state management or API
// For now, we'll use some sample data
const wishlistItems = [
  {
    id: '3',
    make: 'BMW',
    model: '3 Series',
    year: 2020,
    price: 38500,
    mileage: 25000,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '5',
    make: 'Tesla',
    model: 'Model 3',
    year: 2021,
    price: 48999,
    mileage: 12000,
    fuelType: 'Electric',
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

const WishList: React.FC = () => {
  const removeFromWishlist = (id: string) => {
    // In a real app, this would update state or call an API
    console.log('Removing from wishlist:', id);
  };
  
  if (wishlistItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center">
          <Heart className="h-16 w-16 mx-auto text-gray-300 mb-6" />
          <h2 className="text-2xl font-bold mb-2">Your Wishlist is Empty</h2>
          <p className="text-gray-500 mb-8">
            Save your favorite cars to compare later.
          </p>
          <Link to="/browse">
            <Button className="bg-orange hover:bg-orange/90 text-white">
              Browse Cars
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Your Wishlist</h1>
        <p className="text-gray-600 dark:text-gray-400">
          {wishlistItems.length} saved car{wishlistItems.length !== 1 ? 's' : ''}
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        {wishlistItems.map((car) => (
          <Card key={car.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row gap-0">
                <div className="w-full md:w-64 h-48">
                  <img 
                    src={car.imageUrl} 
                    alt={`${car.make} ${car.model}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-grow p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <Link to={`/cars/${car.id}`} className="text-xl font-semibold hover:text-orange">
                        {car.year} {car.make} {car.model}
                      </Link>
                      <p className="text-sm text-gray-500 mt-1">
                        {car.mileage.toLocaleString()} km • {car.transmission} • {car.fuelType}
                      </p>
                    </div>
                    
                    <p className="font-bold text-xl text-orange">
                      {formatCurrency(car.price)}
                    </p>
                  </div>
                  
                  <div className="mt-6 flex flex-wrap gap-4">
                    <Link to={`/cars/${car.id}`} className="flex-grow md:flex-grow-0">
                      <Button variant="outline" className="w-full md:w-auto">
                        View Details
                      </Button>
                    </Link>
                    
                    <Button className="flex-grow md:flex-grow-0 bg-orange hover:bg-orange/90 text-white">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      className="text-red-500 hover:text-red-600 hover:bg-red-50"
                      onClick={() => removeFromWishlist(car.id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Link to="/browse">
          <Button variant="outline">
            Browse More Cars
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default WishList;
