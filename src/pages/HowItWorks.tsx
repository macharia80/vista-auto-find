
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Car, DollarSign, FileText, Search, ShieldCheck } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">How CarHub Works</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Our streamlined process makes buying and selling cars simple, safe, and convenient
        </p>
      </div>
      
      {/* Process Steps */}
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mb-4">
              <Search className="text-orange h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Browse & Search</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Explore thousands of vehicles with our powerful search and filtering tools to find your perfect match.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mb-4">
              <Car className="text-orange h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Connect & Inspect</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Contact sellers directly, schedule test drives, and perform thorough inspections before committing.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mb-4">
              <DollarSign className="text-orange h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Secure Transaction</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Complete your purchase with confidence using our secure payment options and transaction support.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mb-4">
              <FileText className="text-orange h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">4. Complete Paperwork</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Finalize all necessary documentation with our helpful guides and digital tools to make ownership transfer simple.
            </p>
          </div>
        </div>
        
        {/* Line connecting the steps - visible on desktop only */}
        <div className="hidden lg:flex justify-center my-8">
          <div className="h-0.5 bg-gray-200 dark:bg-gray-700 w-3/4 relative">
            <div className="absolute w-1/3 h-0.5 bg-orange"></div>
          </div>
        </div>
      </div>
      
      {/* For Buyers Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">For Buyers</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Find and purchase your dream car with confidence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Discover Options</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-green-500 mt-1.5 mr-2"></div>
                  <span>Browse thousands of vehicles with detailed filters</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-green-500 mt-1.5 mr-2"></div>
                  <span>Compare prices, features, and specifications</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-green-500 mt-1.5 mr-2"></div>
                  <span>Save favorite listings for later review</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-green-500 mt-1.5 mr-2"></div>
                  <span>Receive alerts for new vehicles that match your criteria</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/browse">
                  <Button className="w-full">Browse Cars</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Evaluate & Connect</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-green-500 mt-1.5 mr-2"></div>
                  <span>Access detailed vehicle history reports</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-green-500 mt-1.5 mr-2"></div>
                  <span>Message sellers directly through our platform</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-green-500 mt-1.5 mr-2"></div>
                  <span>Schedule test drives at convenient times</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-green-500 mt-1.5 mr-2"></div>
                  <span>Use our inspection checklist during viewings</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/support">
                  <Button variant="outline" className="w-full">Get Inspection Tips</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Complete Purchase</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-green-500 mt-1.5 mr-2"></div>
                  <span>Secure payment processing options</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-green-500 mt-1.5 mr-2"></div>
                  <span>Digital bill of sale and documentation</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-green-500 mt-1.5 mr-2"></div>
                  <span>Title transfer assistance and guidance</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-green-500 mt-1.5 mr-2"></div>
                  <span>Optional delivery arrangements</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/pricing-guide">
                  <Button className="w-full bg-orange hover:bg-orange/90 text-white">Buyer's Guide</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* For Sellers Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">For Sellers</h2>
          <p className="text-gray-600 dark:text-gray-400">
            List and sell your vehicle quickly for the best price
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Create Your Listing</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-orange mt-1.5 mr-2"></div>
                  <span>Easy-to-use listing form with guided steps</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-orange mt-1.5 mr-2"></div>
                  <span>Upload multiple high-quality photos</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-orange mt-1.5 mr-2"></div>
                  <span>Get pricing recommendations based on market data</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-orange mt-1.5 mr-2"></div>
                  <span>Highlight special features and vehicle history</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/sell">
                  <Button className="w-full bg-orange hover:bg-orange/90 text-white">List Your Car</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Manage Inquiries</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-orange mt-1.5 mr-2"></div>
                  <span>Receive notifications for interested buyers</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-orange mt-1.5 mr-2"></div>
                  <span>Communicate through our secure messaging system</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-orange mt-1.5 mr-2"></div>
                  <span>Schedule viewings and test drives</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-orange mt-1.5 mr-2"></div>
                  <span>Track listing performance and visitor statistics</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/support">
                  <Button variant="outline" className="w-full">Safety Tips</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Complete Sale</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-orange mt-1.5 mr-2"></div>
                  <span>Access bill of sale templates and guidelines</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-orange mt-1.5 mr-2"></div>
                  <span>Secure payment processing options</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-orange mt-1.5 mr-2"></div>
                  <span>Step-by-step title transfer guidance</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 h-4 rounded-full bg-orange mt-1.5 mr-2"></div>
                  <span>Post-sale liability protection information</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/pricing-guide">
                  <Button className="w-full">Seller's Guide</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Trust & Safety */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Trust & Safety</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Your security is our top priority
          </p>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <ShieldCheck className="h-12 w-12 text-orange" />
              </div>
              <h3 className="font-semibold mb-2">Verified Users</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                All sellers undergo ID verification to ensure trustworthy listings
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <ShieldCheck className="h-12 w-12 text-orange" />
              </div>
              <h3 className="font-semibold mb-2">Secure Messaging</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Our in-app messaging protects your personal contact information
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <ShieldCheck className="h-12 w-12 text-orange" />
              </div>
              <h3 className="font-semibold mb-2">Protected Payments</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Secure transaction processing with advanced encryption
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <ShieldCheck className="h-12 w-12 text-orange" />
              </div>
              <h3 className="font-semibold mb-2">Anti-Fraud Measures</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Continuous monitoring to detect and prevent suspicious activity
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Common questions about using CarHub
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">How much does it cost to list my car?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Basic listings for individual sellers are completely free. We also offer premium listing options for better visibility starting at $19.99.
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">How long will my listing stay active?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Standard listings remain active for 30 days. Premium listings stay active for 45 or 60 days depending on the package.
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Is there a fee for buying a car?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              No, browsing and purchasing vehicles on our platform is completely free for buyers.
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">How do I contact a seller?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Each listing has a "Contact Seller" button that allows you to send messages directly through our secure platform.
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Can I edit my listing after publishing?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Yes, you can edit most details of your listing at any time through your seller dashboard.
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Do you offer vehicle inspections?</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We provide a detailed inspection checklist, but recommend using a third-party inspection service for comprehensive evaluations.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Link to="/support">
            <Button variant="outline">
              View All FAQs
            </Button>
          </Link>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-navy text-white rounded-xl p-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-8 text-gray-300">
            Whether you're looking to buy your dream car or sell your current vehicle, CarHub makes it easy, safe, and convenient.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/browse">
              <Button className="bg-white text-navy hover:bg-gray-100 min-w-[150px]">
                Browse Cars
              </Button>
            </Link>
            <Link to="/sell">
              <Button className="bg-orange hover:bg-orange/90 text-white min-w-[150px]">
                Sell Your Car
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
