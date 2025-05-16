
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';
import { DollarSign, Calculator, Check } from 'lucide-react';
import { carMakes } from '@/data/cars';

const CarValuation: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    mileage: '',
    condition: '',
    features: [] as string[],
    location: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
  });
  const [estimatedValue, setEstimatedValue] = useState<number | null>(null);
  
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Calculate estimated value (simplified for demo purposes)
      setLoading(true);
      
      setTimeout(() => {
        // This would be replaced by an actual API call in a real app
        const baseValue = Math.floor(Math.random() * 20000) + 10000;
        const yearFactor = parseInt(formData.year) - 2010;
        const mileageFactor = parseInt(formData.mileage) / 10000;
        const conditionFactor = formData.condition === 'excellent' ? 1.2 : 
                               formData.condition === 'good' ? 1 :
                               formData.condition === 'fair' ? 0.8 : 0.6;
                               
        const calculatedValue = Math.round((baseValue + (yearFactor * 1000) - (mileageFactor * 500)) * conditionFactor);
        
        setEstimatedValue(calculatedValue);
        setLoading(false);
        setStep(4);
        
        toast({
          title: "Valuation Complete",
          description: "We've calculated an estimated value for your vehicle.",
        });
      }, 1500);
    }
  };
  
  const renderStepIndicator = () => {
    return (
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3, 4].map((i) => (
          <React.Fragment key={i}>
            <div 
              className={`rounded-full flex items-center justify-center w-8 h-8 text-sm font-medium
                ${i < step ? 'bg-green-500 text-white' : 
                  i === step ? 'bg-orange text-white' : 
                  'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300'}`}
            >
              {i < step ? <Check size={16} /> : i}
            </div>
            {i < 4 && (
              <div 
                className={`w-12 h-0.5 
                  ${i < step ? 'bg-green-500' : 
                    'bg-gray-200 dark:bg-gray-700'}`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Car Valuation Tool</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Get an accurate estimate of your vehicle's market value
          </p>
        </div>
        
        {renderStepIndicator()}
        
        <Card className="shadow-sm">
          <CardContent className="p-6">
            {step === 1 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">Vehicle Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="make">Make</Label>
                    <Select 
                      value={formData.make}
                      onValueChange={(value) => handleChange('make', value)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select make" />
                      </SelectTrigger>
                      <SelectContent>
                        {carMakes.map((make) => (
                          <SelectItem key={make} value={make}>{make}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="model">Model</Label>
                    <Input 
                      id="model" 
                      value={formData.model}
                      onChange={(e) => handleChange('model', e.target.value)}
                      placeholder="e.g. Camry, F-150"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="year">Year</Label>
                    <Select 
                      value={formData.year}
                      onValueChange={(value) => handleChange('year', value)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: new Date().getFullYear() - 2000 + 1 }, (_, i) => (
                          <SelectItem key={2000 + i} value={(2000 + i).toString()}>
                            {2000 + i}
                          </SelectItem>
                        )).reverse()}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="mileage">Mileage</Label>
                    <Input 
                      id="mileage" 
                      type="number"
                      value={formData.mileage}
                      onChange={(e) => handleChange('mileage', e.target.value)}
                      placeholder="e.g. 50000"
                      required
                    />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button type="submit" className="bg-orange hover:bg-orange/90 text-white">
                    Next Step
                  </Button>
                </div>
              </form>
            )}
            
            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">Vehicle Condition</h2>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="condition">Overall Condition</Label>
                    <Select 
                      value={formData.condition}
                      onValueChange={(value) => handleChange('condition', value)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excellent">Excellent - Like new</SelectItem>
                        <SelectItem value="good">Good - Minor wear and tear</SelectItem>
                        <SelectItem value="fair">Fair - Noticeable wear, all functional</SelectItem>
                        <SelectItem value="poor">Poor - Significant issues</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="features">Key Features (Optional)</Label>
                    <Textarea 
                      id="features"
                      placeholder="List any notable features (e.g. leather seats, sunroof, premium sound system)"
                      value={formData.features.join(', ')}
                      onChange={(e) => handleChange('features', e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input 
                      id="location" 
                      value={formData.location}
                      onChange={(e) => handleChange('location', e.target.value)}
                      placeholder="City, State/Province"
                      required
                    />
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button type="submit" className="bg-orange hover:bg-orange/90 text-white">
                    Next Step
                  </Button>
                </div>
              </form>
            )}
            
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Full Name</Label>
                    <Input 
                      id="contactName" 
                      value={formData.contactName}
                      onChange={(e) => handleChange('contactName', e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Email</Label>
                    <Input 
                      id="contactEmail" 
                      type="email"
                      value={formData.contactEmail}
                      onChange={(e) => handleChange('contactEmail', e.target.value)}
                      placeholder="Your email address"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="contactPhone">Phone Number</Label>
                    <Input 
                      id="contactPhone" 
                      value={formData.contactPhone}
                      onChange={(e) => handleChange('contactPhone', e.target.value)}
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    By submitting this form, you agree to receive your car valuation and potentially be contacted by our team regarding your vehicle.
                  </p>
                </div>
                
                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={() => setStep(2)}>
                    Back
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-orange hover:bg-orange/90 text-white"
                    disabled={loading}
                  >
                    {loading ? "Calculating..." : "Get Valuation"}
                  </Button>
                </div>
              </form>
            )}
            
            {step === 4 && estimatedValue !== null && (
              <div className="text-center py-8">
                <DollarSign className="h-16 w-16 text-orange mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">Your Car Valuation</h2>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Estimated Market Value</p>
                  <p className="text-3xl md:text-4xl font-bold text-orange">
                    ${estimatedValue.toLocaleString()}
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    This is an estimated range based on similar vehicles
                  </p>
                </div>
                
                <div className="space-y-4 max-w-md mx-auto mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Make & Model:</span>
                    <span className="font-medium">{formData.make} {formData.model}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Year:</span>
                    <span className="font-medium">{formData.year}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Mileage:</span>
                    <span className="font-medium">{parseInt(formData.mileage).toLocaleString()} km</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Condition:</span>
                    <span className="font-medium capitalize">{formData.condition}</span>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <h3 className="text-lg font-medium mb-4">What would you like to do next?</h3>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="outline"
                    onClick={() => navigate('/browse')}
                  >
                    Browse Similar Cars
                  </Button>
                  
                  <Button 
                    className="bg-orange hover:bg-orange/90 text-white"
                    onClick={() => navigate('/sell')}
                  >
                    Sell Your Car
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        
        <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">How Our Valuation Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <Calculator className="h-10 w-10 text-orange mb-4" />
              <h3 className="font-medium mb-2">Data Analysis</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We analyze thousands of similar vehicle sales to determine fair market value.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <Calculator className="h-10 w-10 text-orange mb-4" />
              <h3 className="font-medium mb-2">Condition Assessment</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Vehicle condition plays a major role in determining accurate valuation.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <Calculator className="h-10 w-10 text-orange mb-4" />
              <h3 className="font-medium mb-2">Regional Factors</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Local market conditions are considered to provide location-specific pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarValuation;
