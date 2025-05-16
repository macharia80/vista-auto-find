
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { MenuIcon, XIcon, ShoppingCart, Heart, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-900">
      <div className="container flex items-center justify-between h-16 mx-auto px-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-navy dark:text-white">
            CarHub
          </span>
        </Link>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </Button>
        </div>

        {/* Navigation for desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/browse" className="text-gray-700 hover:text-orange dark:text-gray-200 dark:hover:text-orange transition-colors">
            Browse Cars
          </Link>
          <Link to="/sell" className="text-gray-700 hover:text-orange dark:text-gray-200 dark:hover:text-orange transition-colors">
            Sell Your Car
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-orange dark:text-gray-200 dark:hover:text-orange transition-colors">
            About Us
          </Link>
        </nav>

        {/* Icons for desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/wishlist" className="text-gray-700 hover:text-orange dark:text-gray-200 dark:hover:text-orange transition-colors">
            <Heart size={24} />
          </Link>
          <Link to="/cart" className="text-gray-700 hover:text-orange dark:text-gray-200 dark:hover:text-orange relative transition-colors">
            <ShoppingCart size={24} />
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-orange text-white text-xs font-medium rounded-full">
                {getCartCount()}
              </span>
            )}
          </Link>
          <Link to="/login">
            <Button variant="outline" size="sm" className="ml-2">
              <User size={16} className="mr-2" />
              Log In
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t dark:border-gray-800">
            <Link to="/browse" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange dark:text-gray-200 dark:hover:text-orange">
              Browse Cars
            </Link>
            <Link to="/sell" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange dark:text-gray-200 dark:hover:text-orange">
              Sell Your Car
            </Link>
            <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange dark:text-gray-200 dark:hover:text-orange">
              About Us
            </Link>
            <Link to="/wishlist" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange dark:text-gray-200 dark:hover:text-orange">
              Wishlist
            </Link>
            <Link to="/cart" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange dark:text-gray-200 dark:hover:text-orange">
              Cart ({getCartCount()})
            </Link>
            <Link to="/login" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange dark:text-gray-200 dark:hover:text-orange">
              Log In / Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
