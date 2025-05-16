
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  Upload, 
  Camera, 
  Car, 
  Settings, 
  DollarSign, 
  CheckCircle
} from 'lucide-react';
import { carMakes } from '@/data/cars';
import { toast } from "@/hooks/use-toast";

const generateYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = currentYear; year >= currentYear - 50; year--) {
    years.push(year);
  }
  return years;
};

const carModels: Record<string, string[]> = {
  'Toyota': ['Camry', 'Corolla', 'RAV4', 'Highlander', 'Tacoma', 'Prius'],
  'Honda': ['Civic', 'Accord', 'CR-V', 'Pilot', 'Odyssey', 'Fit'],
  'Ford': ['F-150', 'Escape', 'Explorer', 'Mustang', 'Bronco', 'Edge'],
  'BMW': ['3 Series', '5 Series', 'X3', 'X5', '7 Series', 'i4'],
  // Add more makes and models as needed
};

const SellCar: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    make: '',
    model: '',
    year: '',
    trim: '',
    bodyType: '',
    
    // Step 2: Vehicle Details
    mileage: '',
    vin: '',
    exteriorColor: '',
    interiorColor: '',
    fuelType: '',
    transmission: '',
    drivetrain: '',
    
    // Step 3: Photos
    photos: [] as string[],
    
    // Step 4: Pricing & Description
    price: '',
    description: '',
    listingTitle: '',
    
    // Step 5: Contact Info
    name: '',
    email: '',
    phone: '',
    location: '',
  });
  
  // Track models based on selected make
  const [availableModels, setAvailableModels] = useState<string[]>([]);
  
  const handleMakeChange = (make: string) => {
    setFormData({ ...formData, make, model: '' });
    setAvailableModels(carModels[make] || []);
  };
  
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    
    // Simulate upload and getting image URLs
    const newPhotos = [...formData.photos];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      // In a real app, you would upload the file and get a URL
      const fakeUrl = URL.createObjectURL(file);
      newPhotos.push(fakeUrl);
    }
    
    setFormData({ ...formData, photos: newPhotos });
  };
  
  const removePhoto = (index: number) => {
    const newPhotos = [...formData.photos];
    newPhotos.splice(index, 1);
    setFormData({ ...formData, photos: newPhotos });
  };
  
  const nextStep = () => {
    // Validate current step
    if (validateCurrentStep()) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };
  
  const validateCurrentStep = () => {
    let isValid = true;
    let errorMessage = '';
    
    switch (currentStep) {
      case 1: // Basic Info
        if (!formData.make) {
          errorMessage = 'Please select a make';
          isValid = false;
        } else if (!formData.model) {
          errorMessage = 'Please select a model';
          isValid = false;
        } else if (!formData.year) {
          errorMessage = 'Please select a year';
          isValid = false;
        }
        break;
        
      case 2: // Vehicle Details
        if (!formData.mileage) {
          errorMessage = 'Please enter the mileage';
          isValid = false;
        } else if (!formData.fuelType) {
          errorMessage = 'Please select a fuel type';
          isValid = false;
        } else if (!formData.transmission) {
          errorMessage = 'Please select a transmission type';
          isValid = false;
        }
        break;
        
      case 3: // Photos
        // Photos are optional, but recommend at least one
        if (formData.photos.length === 0) {
          errorMessage = 'We recommend adding at least one photo';
          // Not setting isValid to false as this is just a recommendation
        }
        break;
        
      case 4: // Pricing & Description
        if (!formData.price) {
          errorMessage = 'Please enter your asking price';
          isValid = false;
        } else if (!formData.description) {
          errorMessage = 'Please enter a description';
          isValid = false;
        }
        break;
    }
    
    if (!isValid) {
      toast({
        title: "Missing Information",
        description: errorMessage,
        variant: "destructive"
      });
    }
    
    return isValid;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all the required contact information",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate form submission
    toast({
      title: "Listing Created Successfully!",
      description: "Your car listing has been submitted for review.",
    });
    
    // Redirect after a short delay
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };
  
  const renderProgressBar = () => {
    const steps = [
      { number: 1, title: 'Basic Info' },
      { number: 2, title: 'Vehicle Details' },
      { number: 3, title: 'Photos' },
      { number: 4, title: 'Pricing' },
      { number: 5, title: 'Review' }
    ];
    
    return (
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step) => (
            <React.Fragment key={step.number}>
              <div className="flex flex-col items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2
                    ${currentStep >= step.number ? 'bg-orange text-white' : 'bg-gray-200 text-gray-500'}
                  `}
                >
                  <span>{step.number}</span>
                </div>
                <span 
                  className={`hidden sm:block text-sm
                    ${currentStep >= step.number ? 'text-gray-700 font-medium' : 'text-gray-500'}
                  `}
                >
                  {step.title}
                </span>
              </div>
              
              {step.number < steps.length && (
                <div 
                  className={`flex-1 h-1 mx-2
                    ${currentStep > step.number ? 'bg-orange' : 'bg-gray-200'}
                  `}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };
  
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="make">Make</Label>
                <Select value={formData.make} onValueChange={(value) => handleMakeChange(value)}>
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
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="model">Model</Label>
                <Select 
                  value={formData.model} 
                  onValueChange={(value) => handleSelectChange('model', value)}
                  disabled={!formData.make}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select model" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableModels.map((model) => (
                      <SelectItem key={model} value={model}>{model}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="year">Year</Label>
                <Select 
                  value={formData.year} 
                  onValueChange={(value) => handleSelectChange('year', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    {generateYears().map((year) => (
                      <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="trim">Trim (Optional)</Label>
                <Input 
                  id="trim" 
                  name="trim" 
                  value={formData.trim} 
                  onChange={handleInputChange} 
                  placeholder="e.g., SE, Limited, Sport"
                  className="input-field"
                />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="bodyType">Body Type</Label>
                <Select 
                  value={formData.bodyType} 
                  onValueChange={(value) => handleSelectChange('bodyType', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select body type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedan">Sedan</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="truck">Truck</SelectItem>
                    <SelectItem value="coupe">Coupe</SelectItem>
                    <SelectItem value="hatchback">Hatchback</SelectItem>
                    <SelectItem value="convertible">Convertible</SelectItem>
                    <SelectItem value="wagon">Wagon</SelectItem>
                    <SelectItem value="van">Van</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="mileage">Mileage (km)</Label>
                <Input 
                  id="mileage" 
                  name="mileage" 
                  type="number" 
                  value={formData.mileage} 
                  onChange={handleInputChange} 
                  placeholder="e.g., 45000"
                  className="input-field"
                />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="vin">VIN (Optional)</Label>
                <Input 
                  id="vin" 
                  name="vin" 
                  value={formData.vin} 
                  onChange={handleInputChange} 
                  placeholder="Vehicle Identification Number"
                  className="input-field"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="exteriorColor">Exterior Color</Label>
                <Input 
                  id="exteriorColor" 
                  name="exteriorColor" 
                  value={formData.exteriorColor} 
                  onChange={handleInputChange} 
                  placeholder="e.g., Pearl White"
                  className="input-field"
                />
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="interiorColor">Interior Color</Label>
                <Input 
                  id="interiorColor" 
                  name="interiorColor" 
                  value={formData.interiorColor} 
                  onChange={handleInputChange} 
                  placeholder="e.g., Black Leather"
                  className="input-field"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="fuelType">Fuel Type</Label>
                <Select 
                  value={formData.fuelType} 
                  onValueChange={(value) => handleSelectChange('fuelType', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select fuel type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="petrol">Petrol</SelectItem>
                    <SelectItem value="diesel">Diesel</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                    <SelectItem value="electric">Electric</SelectItem>
                    <SelectItem value="lpg">LPG</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="transmission">Transmission</Label>
                <Select 
                  value={formData.transmission} 
                  onValueChange={(value) => handleSelectChange('transmission', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select transmission" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="automatic">Automatic</SelectItem>
                    <SelectItem value="manual">Manual</SelectItem>
                    <SelectItem value="cvt">CVT</SelectItem>
                    <SelectItem value="semi-automatic">Semi-Automatic</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="drivetrain">Drivetrain</Label>
                <Select 
                  value={formData.drivetrain} 
                  onValueChange={(value) => handleSelectChange('drivetrain', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select drivetrain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fwd">Front-Wheel Drive (FWD)</SelectItem>
                    <SelectItem value="rwd">Rear-Wheel Drive (RWD)</SelectItem>
                    <SelectItem value="awd">All-Wheel Drive (AWD)</SelectItem>
                    <SelectItem value="4wd">4-Wheel Drive (4WD)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              {/* Photo Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <div className="flex flex-col items-center justify-center">
                  <Upload className="w-12 h-12 text-gray-400 mb-3" />
                  <h3 className="text-lg font-semibold mb-1">Drag & drop photos here</h3>
                  <p className="text-gray-500 text-sm mb-4">or click to browse from your device</p>
                  
                  <input
                    type="file"
                    id="photos"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="photos" className="cursor-pointer">
                    <Button type="button" className="bg-orange hover:bg-orange/90 text-white">
                      Upload Photos
                    </Button>
                  </label>
                  
                  <p className="text-xs text-gray-500 mt-3">
                    Max 10 photos. JPG, PNG or WEBP. Max size 5MB each.
                  </p>
                </div>
              </div>
              
              {/* Preview uploaded photos */}
              {formData.photos.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">Uploaded Photos</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {formData.photos.map((photo, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={photo}
                          alt={`Car photo ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removePhoto(index)}
                          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Photo tips */}
              <Card className="mt-6 bg-blue-50 dark:bg-gray-800 border-blue-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Camera className="h-5 w-5 text-blue-500" />
                    Tips for Great Photos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Take photos during daylight hours for the best lighting</li>
                    <li>Include exterior shots from multiple angles (front, back, sides)</li>
                    <li>Capture interior features (dashboard, seats, cargo area)</li>
                    <li>Include close-ups of special features or any damage</li>
                    <li>Clean your car before taking photos for the best impression</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="price">Asking Price (USD)</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input 
                    id="price" 
                    name="price" 
                    type="number" 
                    value={formData.price} 
                    onChange={handleInputChange} 
                    placeholder="e.g., 25000"
                    className="pl-10 input-field"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="listingTitle">Listing Title</Label>
                <Input
                  id="listingTitle"
                  name="listingTitle"
                  value={formData.listingTitle || `${formData.year} ${formData.make} ${formData.model}`}
                  onChange={handleInputChange}
                  placeholder="Create a catchy title for your listing"
                  className="input-field"
                />
                <p className="text-xs text-gray-500">
                  Leave blank to use the default: {formData.year} {formData.make} {formData.model}
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  name="description" 
                  value={formData.description} 
                  onChange={handleInputChange} 
                  placeholder="Describe your car's condition, history, features, and any other details that might be important to buyers."
                  className="min-h-[150px] input-field"
                />
              </div>
              
              {/* Pricing tips */}
              <Card className="bg-green-50 dark:bg-gray-800 border-green-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-green-500" />
                    Pricing Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Research similar vehicles in your area to set a competitive price</li>
                    <li>Consider your car's condition, mileage, and any recent repairs</li>
                    <li>Leave a small buffer for negotiations</li>
                    <li>Be transparent about any issues to build trust with potential buyers</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        );
        
      case 5: // Review
        return (
          <div className="space-y-8">
            {/* Basic Info */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Car className="h-5 w-5 text-orange" />
                    Vehicle Information
                  </CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setCurrentStep(1)}
                    className="text-orange hover:text-orange/80 text-sm"
                  >
                    Edit
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-y-2">
                  <div>
                    <p className="text-sm text-gray-500">Make</p>
                    <p className="font-medium">{formData.make || 'Not specified'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Model</p>
                    <p className="font-medium">{formData.model || 'Not specified'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Year</p>
                    <p className="font-medium">{formData.year || 'Not specified'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Body Type</p>
                    <p className="font-medium">{formData.bodyType || 'Not specified'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Vehicle Details */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Settings className="h-5 w-5 text-orange" />
                    Vehicle Details
                  </CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setCurrentStep(2)}
                    className="text-orange hover:text-orange/80 text-sm"
                  >
                    Edit
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2">
                  <div>
                    <p className="text-sm text-gray-500">Mileage</p>
                    <p className="font-medium">{formData.mileage ? `${formData.mileage} km` : 'Not specified'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Fuel Type</p>
                    <p className="font-medium">{formData.fuelType || 'Not specified'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Transmission</p>
                    <p className="font-medium">{formData.transmission || 'Not specified'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Exterior Color</p>
                    <p className="font-medium">{formData.exteriorColor || 'Not specified'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Interior Color</p>
                    <p className="font-medium">{formData.interiorColor || 'Not specified'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Drivetrain</p>
                    <p className="font-medium">{formData.drivetrain || 'Not specified'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Photos */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Camera className="h-5 w-5 text-orange" />
                    Photos
                  </CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setCurrentStep(3)}
                    className="text-orange hover:text-orange/80 text-sm"
                  >
                    Edit
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {formData.photos.length > 0 ? (
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                    {formData.photos.map((photo, index) => (
                      <img
                        key={index}
                        src={photo}
                        alt={`Car photo ${index + 1}`}
                        className="w-full h-20 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No photos uploaded</p>
                )}
              </CardContent>
            </Card>
            
            {/* Pricing & Description */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-orange" />
                    Pricing & Description
                  </CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setCurrentStep(4)}
                    className="text-orange hover:text-orange/80 text-sm"
                  >
                    Edit
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Listing Title</p>
                    <p className="font-medium">
                      {formData.listingTitle || `${formData.year} ${formData.make} ${formData.model}`}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Asking Price</p>
                    <p className="font-medium text-xl text-orange">
                      {formData.price ? `$${Number(formData.price).toLocaleString()}` : 'Not specified'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Description</p>
                    <p>{formData.description || 'No description provided'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Contact Information</CardTitle>
                <CardDescription>
                  Your contact details will be visible to interested buyers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6">
                  <div className="grid grid-cols-1 gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="input-field"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="grid grid-cols-1 gap-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="input-field"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your phone number"
                        className="input-field"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="City, State/Province"
                      className="input-field"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Terms and Conditions */}
            <Card className="bg-gray-50 dark:bg-gray-800">
              <CardContent className="pt-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <p className="text-sm">
                    By clicking "Submit Listing", you agree to our 
                    <a href="#" className="text-orange hover:underline mx-1">Terms of Service</a> 
                    and confirm that you have read our 
                    <a href="#" className="text-orange hover:underline mx-1">Privacy Policy</a>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Sell Your Car</h1>
        <p className="text-gray-600 dark:text-gray-400">
          List your vehicle for free in a few easy steps
        </p>
      </div>
      
      {/* Progress bar */}
      {renderProgressBar()}
      
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>
              {currentStep === 1 && 'Basic Information'}
              {currentStep === 2 && 'Vehicle Details'}
              {currentStep === 3 && 'Upload Photos'}
              {currentStep === 4 && 'Pricing & Description'}
              {currentStep === 5 && 'Review & Submit'}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && 'Tell us about your car'}
              {currentStep === 2 && 'Provide detailed specifications'}
              {currentStep === 3 && 'Upload photos of your vehicle'}
              {currentStep === 4 && 'Set your price and describe your car'}
              {currentStep === 5 && 'Review your listing and provide contact information'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {renderCurrentStep()}
          </CardContent>
          <Separator />
          <div className="flex justify-between p-6">
            {currentStep > 1 ? (
              <Button 
                type="button" 
                variant="outline" 
                onClick={prevStep}
              >
                Back
              </Button>
            ) : (
              <div></div>
            )}
            
            {currentStep < 5 ? (
              <Button 
                type="button" 
                className="bg-orange hover:bg-orange/90 text-white"
                onClick={nextStep}
              >
                Continue
              </Button>
            ) : (
              <Button 
                type="submit"
                className="bg-orange hover:bg-orange/90 text-white"
              >
                Submit Listing
              </Button>
            )}
          </div>
        </Card>
      </form>
    </div>
  );
};

export default SellCar;
