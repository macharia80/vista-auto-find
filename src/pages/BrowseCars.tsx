import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { LayoutGrid, List, FilterIcon, X, Search } from 'lucide-react';
import { allCars, carMakes } from '@/data/cars';
import CarCard from '@/components/CarCard';
import { getYearRange, getMinMaxPrices } from '@/lib/utils';

const BrowseCars: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [selectedTransmission, setSelectedTransmission] = useState<string[]>([]);
  const [selectedFuelType, setSelectedFuelType] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [yearRange, setYearRange] = useState<[number, number]>([2010, new Date().getFullYear()]);
  const [filteredCars, setFilteredCars] = useState(allCars);
  
  const years = getYearRange(2010, new Date().getFullYear());
  const { min: minPrice, max: maxPrice } = getMinMaxPrices(allCars);

  const transmissionOptions = ["Automatic", "Manual", "CVT"];
  const fuelOptions = ["Petrol", "Diesel", "Hybrid", "Electric"];

  useEffect(() => {
    // Apply filters
    const filtered = allCars.filter(car => {
      // Search term filter
      const searchMatch = 
        searchTerm === '' || 
        car.make.toLowerCase().includes(searchTerm.toLowerCase()) || 
        car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Make filter
      const makeMatch = selectedMake === '' || car.make === selectedMake;
      
      // Transmission filter
      const transmissionMatch = 
        selectedTransmission.length === 0 || 
        selectedTransmission.includes(car.transmission);
      
      // Fuel type filter
      const fuelMatch = 
        selectedFuelType.length === 0 || 
        selectedFuelType.includes(car.fuelType);
      
      // Price range filter
      const priceMatch = 
        car.price >= priceRange[0] && car.price <= priceRange[1];
      
      // Year range filter
      const yearMatch = 
        car.year >= yearRange[0] && car.year <= yearRange[1];
      
      return searchMatch && makeMatch && transmissionMatch && fuelMatch && priceMatch && yearMatch;
    });
    
    setFilteredCars(filtered);
  }, [searchTerm, selectedMake, selectedTransmission, selectedFuelType, priceRange, yearRange]);
  
  const toggleTransmission = (transmission: string) => {
    setSelectedTransmission(prev => 
      prev.includes(transmission)
        ? prev.filter(t => t !== transmission)
        : [...prev, transmission]
    );
  };
  
  const toggleFuelType = (fuelType: string) => {
    setSelectedFuelType(prev => 
      prev.includes(fuelType)
        ? prev.filter(f => f !== fuelType)
        : [...prev, fuelType]
    );
  };
  
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedMake('');
    setSelectedTransmission([]);
    setSelectedFuelType([]);
    setPriceRange([minPrice, maxPrice]);
    setYearRange([2010, new Date().getFullYear()]);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Browse Cars</h1>
        <p className="text-gray-600 dark:text-gray-400">Find your perfect car among {allCars.length} listings</p>
      </div>
      
      {/* Search bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Search by make, model, or keywords"
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex space-x-2">
          <Button
            variant="outline"
            className={`hidden md:flex items-center ${isFilterOpen ? 'bg-muted' : ''}`}
            onClick={toggleFilter}
          >
            <FilterIcon size={18} className="mr-2" />
            Filters
          </Button>
          
          <div className="hidden md:flex border rounded-md overflow-hidden">
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-none ${viewMode === 'grid' ? 'bg-muted' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <LayoutGrid size={20} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`rounded-none ${viewMode === 'list' ? 'bg-muted' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <List size={20} />
            </Button>
          </div>
          
          <Button
            variant="outline"
            className="md:hidden"
            onClick={toggleFilter}
          >
            <FilterIcon size={18} className="mr-2" />
            Filters
          </Button>
        </div>
      </div>
      
      {/* Mobile filter button */}
      <div className="md:hidden mb-4 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          {filteredCars.length} results
        </div>
        <div className="flex border rounded-md overflow-hidden">
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-none ${viewMode === 'grid' ? 'bg-muted' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <LayoutGrid size={18} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-none ${viewMode === 'list' ? 'bg-muted' : ''}`}
            onClick={() => setViewMode('list')}
          >
            <List size={18} />
          </Button>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters sidebar */}
        <div 
          className={`
            lg:w-1/4 
            ${isFilterOpen ? 
              'fixed inset-0 z-40 bg-white dark:bg-gray-900 p-4 overflow-y-auto lg:static' : 
              'hidden lg:block'
            }
          `}
        >
          <div className="flex justify-between items-center lg:hidden mb-4">
            <h2 className="text-xl font-bold">Filters</h2>
            <Button variant="ghost" size="icon" onClick={toggleFilter}>
              <X size={24} />
            </Button>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Filters</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={resetFilters}
                  className="text-orange hover:text-orange/80 text-sm p-0"
                >
                  Reset all
                </Button>
              </div>
              
              {/* Make filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Make</h4>
                <Select value={selectedMake} onValueChange={setSelectedMake}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Makes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-makes">All Makes</SelectItem>
                    {carMakes.map((make) => (
                      <SelectItem key={make} value={make}>{make}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Price Range filter */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">Price Range</h4>
                  <span className="text-sm text-gray-500">
                    ${priceRange[0]} - ${priceRange[1]}
                  </span>
                </div>
                <Slider
                  defaultValue={[minPrice, maxPrice]}
                  min={minPrice}
                  max={maxPrice}
                  step={1000}
                  value={[priceRange[0], priceRange[1]]}
                  onValueChange={(value) => setPriceRange([value[0], value[1]])}
                  className="mt-6"
                />
              </div>
              
              <Separator className="my-6" />
              
              {/* Year filter */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">Year</h4>
                  <span className="text-sm text-gray-500">
                    {yearRange[0]} - {yearRange[1]}
                  </span>
                </div>
                <Slider
                  defaultValue={[2010, new Date().getFullYear()]}
                  min={2010}
                  max={new Date().getFullYear()}
                  step={1}
                  value={[yearRange[0], yearRange[1]]}
                  onValueChange={(value) => setYearRange([value[0], value[1]])}
                  className="mt-6"
                />
              </div>
              
              <Separator className="my-6" />
              
              {/* Transmission filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Transmission</h4>
                <div className="space-y-2">
                  {transmissionOptions.map((transmission) => (
                    <div key={transmission} className="flex items-center">
                      <Checkbox
                        id={`transmission-${transmission}`}
                        checked={selectedTransmission.includes(transmission)}
                        onCheckedChange={() => toggleTransmission(transmission)}
                      />
                      <label
                        htmlFor={`transmission-${transmission}`}
                        className="ml-2 text-sm"
                      >
                        {transmission}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator className="my-6" />
              
              {/* Fuel Type filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Fuel Type</h4>
                <div className="space-y-2">
                  {fuelOptions.map((fuel) => (
                    <div key={fuel} className="flex items-center">
                      <Checkbox
                        id={`fuel-${fuel}`}
                        checked={selectedFuelType.includes(fuel)}
                        onCheckedChange={() => toggleFuelType(fuel)}
                      />
                      <label
                        htmlFor={`fuel-${fuel}`}
                        className="ml-2 text-sm"
                      >
                        {fuel}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Apply filters button (mobile only) */}
              <div className="mt-6 lg:hidden">
                <Button 
                  className="w-full bg-orange hover:bg-orange/90 text-white"
                  onClick={toggleFilter}
                >
                  Apply Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Results container */}
        <div className="flex-1">
          {/* Active filters */}
          <div className="mb-4 flex flex-wrap gap-2">
            {selectedMake && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Make: {selectedMake}
                <button onClick={() => setSelectedMake('')}>
                  <X size={14} />
                </button>
              </Badge>
            )}
            
            {selectedTransmission.map((transmission) => (
              <Badge key={transmission} variant="secondary" className="flex items-center gap-1">
                {transmission}
                <button onClick={() => toggleTransmission(transmission)}>
                  <X size={14} />
                </button>
              </Badge>
            ))}
            
            {selectedFuelType.map((fuel) => (
              <Badge key={fuel} variant="secondary" className="flex items-center gap-1">
                {fuel}
                <button onClick={() => toggleFuelType(fuel)}>
                  <X size={14} />
                </button>
              </Badge>
            ))}
            
            {(priceRange[0] > minPrice || priceRange[1] < maxPrice) && (
              <Badge variant="secondary" className="flex items-center gap-1">
                ${priceRange[0]} - ${priceRange[1]}
                <button onClick={() => setPriceRange([minPrice, maxPrice])}>
                  <X size={14} />
                </button>
              </Badge>
            )}
            
            {(yearRange[0] > 2010 || yearRange[1] < new Date().getFullYear()) && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {yearRange[0]} - {yearRange[1]}
                <button onClick={() => setYearRange([2010, new Date().getFullYear()])}>
                  <X size={14} />
                </button>
              </Badge>
            )}
          </div>
          
          {/* Results count and sort */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-gray-500">
              {filteredCars.length} results
            </div>
            
            <Select defaultValue="newest">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Results grid */}
          {filteredCars.length > 0 ? (
            <div className={
              viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
              : "space-y-4"
            }>
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No cars match your filters</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search criteria or filters</p>
              <Button onClick={resetFilters} className="bg-orange hover:bg-orange/90 text-white">
                Reset All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Overlay for mobile filters */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={toggleFilter}></div>
      )}
    </div>
  );
};

export default BrowseCars;
