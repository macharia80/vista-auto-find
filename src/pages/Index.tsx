
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SearchIcon, ThumbsUp, Shield, Car } from 'lucide-react';
import CarCard from '@/components/CarCard';
import { featuredCars } from '@/data/cars';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-navy to-navy/90 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="md:max-w-md lg:max-w-lg">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Find Your Perfect Car
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              The easiest way to buy and sell cars online. Thousands of verified cars with the best prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/browse">
                <Button className="bg-orange hover:bg-orange/90 text-white px-6 py-2 rounded-md text-lg font-medium">
                  Browse Cars
                </Button>
              </Link>
              <Link to="/sell">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-6 py-2 rounded-md text-lg font-medium">
                  Sell Your Car
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2 lg:w-2/5">
            <div className="relative">
              <div className="absolute inset-0 bg-orange/20 rounded-lg transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Luxury car" 
                className="relative z-10 rounded-lg w-full h-auto shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-white shadow-md dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col md:flex-row gap-4 items-center">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Search make, model, or keyword" 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange/50"
                />
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange/50 bg-white">
                <option value="">All Makes</option>
                <option value="toyota">Toyota</option>
                <option value="honda">Honda</option>
                <option value="ford">Ford</option>
                <option value="bmw">BMW</option>
                <option value="mercedes">Mercedes-Benz</option>
              </select>
            </div>
            <div className="w-full md:w-1/3">
              <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange/50 bg-white">
                <option value="">Max Price</option>
                <option value="5000">$5,000</option>
                <option value="10000">$10,000</option>
                <option value="20000">$20,000</option>
                <option value="30000">$30,000</option>
                <option value="50000">$50,000+</option>
              </select>
            </div>
            <Link to="/browse" className="w-full md:w-auto">
              <Button className="w-full md:w-auto bg-orange hover:bg-orange/90 text-white py-3 px-6 rounded-md font-medium">
                Search
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Cars</h2>
            <Link to="/browse" className="text-orange hover:text-orange/80 font-medium">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredCars.slice(0, 8).map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              We've simplified the process of buying and selling cars online. Here's how it works.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <SearchIcon size={32} className="text-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Find Your Car</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Browse thousands of verified cars from trusted sellers. Use our advanced search to find the perfect match.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp size={32} className="text-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Connect With Seller</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Contact the seller directly through our secure messaging system. Schedule test drives and negotiate prices.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car size={32} className="text-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Complete the Deal</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Finalize the transaction securely through our platform. We'll help with paperwork and transfer processes.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/browse">
              <Button className="bg-navy hover:bg-navy/90 text-white px-6 py-2 rounded-md text-lg font-medium">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose CarHub</h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              We're committed to providing the best car buying and selling experience online.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-orange/10 p-2 rounded-md">
                <Shield className="text-orange h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Trusted Platform</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Every seller and vehicle is verified for authenticity. We prioritize trust and transparency in every transaction.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-orange/10 p-2 rounded-md">
                <Car className="text-orange h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Huge Selection</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Thousands of cars from individual sellers and dealerships all across the country.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-orange/10 p-2 rounded-md">
                <ThumbsUp className="text-orange h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Great Deals</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Find competitive prices and negotiate directly with sellers without hidden fees.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-orange/10 p-2 rounded-md">
                <SearchIcon className="text-orange h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Advanced Search</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Find exactly what you're looking for with our powerful search and filtering tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange to-orange/90 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Find Your Dream Car?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied customers who found their perfect car on CarHub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/browse">
              <Button className="bg-white text-orange hover:bg-gray-100 px-6 py-2 rounded-md text-lg font-medium">
                Browse Cars
              </Button>
            </Link>
            <Link to="/sell">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-6 py-2 rounded-md text-lg font-medium">
                Sell Your Car
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
