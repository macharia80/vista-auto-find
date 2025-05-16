
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { DollarSign, Info, CheckCircle } from 'lucide-react';

const PricingGuide: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Car Pricing Guide</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Understand how car pricing works and get the best deal
      </p>
      
      <Tabs defaultValue="factors" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8 w-full md:w-auto">
          <TabsTrigger value="factors">Price Factors</TabsTrigger>
          <TabsTrigger value="strategies">Pricing Strategies</TabsTrigger>
          <TabsTrigger value="negotiation">Negotiation Tips</TabsTrigger>
        </TabsList>
        
        <TabsContent value="factors" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <DollarSign className="h-8 w-8 text-orange mb-4" />
                <h3 className="text-xl font-semibold mb-2">Market Demand</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Popular makes and models often command higher prices due to consumer demand and brand perception.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <DollarSign className="h-8 w-8 text-orange mb-4" />
                <h3 className="text-xl font-semibold mb-2">Vehicle Age</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Newer cars generally sell for more, with depreciation occurring most rapidly in the first 2-3 years.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <DollarSign className="h-8 w-8 text-orange mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mileage</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Lower mileage typically results in higher resale value, with the average annual mileage around 12,000.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <DollarSign className="h-8 w-8 text-orange mb-4" />
                <h3 className="text-xl font-semibold mb-2">Condition</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Vehicle condition includes mechanical integrity, body condition, interior quality, and maintenance history.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <DollarSign className="h-8 w-8 text-orange mb-4" />
                <h3 className="text-xl font-semibold mb-2">Features & Options</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Premium features like leather seats, advanced tech packages, and safety systems can increase value.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <DollarSign className="h-8 w-8 text-orange mb-4" />
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Market values vary by region due to local demand, weather conditions, and economic factors.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="strategies" className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-4">Effective Pricing Strategies</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Research Comparable Listings</h4>
                  <p className="text-gray-600 dark:text-gray-400">Search for similar vehicles (same make, model, year, condition) to understand current market rates.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Consider Pricing Psychology</h4>
                  <p className="text-gray-600 dark:text-gray-400">Prices ending in "999" or "995" tend to perform better than round numbers.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Build in Negotiation Margin</h4>
                  <p className="text-gray-600 dark:text-gray-400">Set your price slightly higher (5-10%) than your target to allow room for negotiation.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Adjust Based on Feedback</h4>
                  <p className="text-gray-600 dark:text-gray-400">If you're not getting inquiries after 2 weeks, consider lowering the price by 3-5%.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">For Quick Sales</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Price your vehicle 10-15% below similar listings to attract immediate interest and sell quickly.
                </p>
                <Button className="bg-orange hover:bg-orange/90 text-white w-full">
                  Value My Car
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">For Maximum Value</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Set a higher price, ensure excellent presentation, and be prepared to wait for the right buyer.
                </p>
                <Link to="/sell">
                  <Button className="w-full">
                    List Your Car
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="negotiation" className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Negotiation Tips</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-lg mb-2">For Sellers</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Know your car's value and set a firm bottom line before negotiations begin</li>
                  <li>Highlight unique selling points and recent maintenance</li>
                  <li>Be prepared to explain your pricing with market research</li>
                  <li>Offer to include extras (winter tires, accessories) rather than dropping price</li>
                  <li>Be patient - rushing often leads to accepting lower offers</li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium text-lg mb-2">For Buyers</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Research the vehicle thoroughly before making an offer</li>
                  <li>Start with a fair offer (10-15% below asking) rather than a lowball</li>
                  <li>Point out specific issues that justify a lower price</li>
                  <li>Be prepared to walk away if the price isn't right</li>
                  <li>Consider timing - sellers may be more flexible at month-end or in winter months</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Need More Help?</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Our team of automotive experts can help you determine the right price for buying or selling a vehicle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/support">
                <Button variant="outline">
                  Contact Support
                </Button>
              </Link>
              <Link to="/value-my-car">
                <Button className="bg-orange hover:bg-orange/90 text-white">
                  Get a Free Valuation
                </Button>
              </Link>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PricingGuide;
