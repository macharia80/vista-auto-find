
import { Car } from '@/context/CartContext';

export const featuredCars: Car[] = [
  {
    id: '1',
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    price: 27999,
    mileage: 15000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Well-maintained Toyota Camry with low mileage. Features include leather seats, sunroof, and advanced safety systems.'
  },
  {
    id: '2',
    make: 'Honda',
    model: 'Civic',
    year: 2021,
    price: 22500,
    mileage: 18000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Sporty Honda Civic in excellent condition. Includes backup camera, Bluetooth connectivity, and fuel-efficient engine.'
  },
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
    description: 'Elegant BMW 3 Series with premium features. Includes navigation, leather interior, and premium sound system.'
  },
  {
    id: '4',
    make: 'Ford',
    model: 'F-150',
    year: 2019,
    price: 35000,
    mileage: 30000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Powerful Ford F-150 truck in great condition. Perfect for work and adventure with towing package and off-road capabilities.'
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
    description: 'Tesla Model 3 with Autopilot. Amazing range and performance with latest software updates installed.'
  },
  {
    id: '6',
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2020,
    price: 41500,
    mileage: 22000,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Luxurious Mercedes C-Class with premium features. Includes MBUX system, heated seats, and driver assistance package.'
  },
  {
    id: '7',
    make: 'Nissan',
    model: 'Rogue',
    year: 2021,
    price: 26800,
    mileage: 16500,
    fuelType: 'Petrol',
    transmission: 'CVT',
    imageUrl: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Versatile Nissan Rogue SUV with ample space. Features include Apple CarPlay, Android Auto, and ProPilot Assist.'
  },
  {
    id: '8',
    make: 'Audi',
    model: 'Q5',
    year: 2019,
    price: 39900,
    mileage: 28000,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Premium Audi Q5 SUV with quattro all-wheel drive. Includes virtual cockpit, Bang & Olufsen sound, and panoramic sunroof.'
  },
  {
    id: '9',
    make: 'Hyundai',
    model: 'Tucson',
    year: 2021,
    price: 24500,
    mileage: 14000,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1633267858907-238ddd0611b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Modern Hyundai Tucson with hybrid efficiency. Features include large touchscreen, advanced safety features, and comfortable interior.'
  },
  {
    id: '10',
    make: 'Volkswagen',
    model: 'Golf',
    year: 2020,
    price: 23900,
    mileage: 20000,
    fuelType: 'Petrol',
    transmission: 'Manual',
    imageUrl: 'https://images.unsplash.com/photo-1510006487895-a451049e1bc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Sporty Volkswagen Golf with German engineering. Includes digital cockpit, CarPlay/Android Auto, and driver assistance package.'
  },
];

// All available makes
export const carMakes = [
  'Audi',
  'BMW',
  'Ford',
  'Honda',
  'Hyundai',
  'Kia',
  'Mazda',
  'Mercedes-Benz', 
  'Nissan',
  'Tesla',
  'Toyota',
  'Volkswagen',
];

// Combine featured cars with some additional ones for browsing
export const allCars: Car[] = [
  ...featuredCars,
  {
    id: '11',
    make: 'Mazda',
    model: 'CX-5',
    year: 2020,
    price: 27500,
    mileage: 19000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1549027032-c6652e3ba036?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Stylish Mazda CX-5 with premium feel. Includes Bose audio, leather seats, and i-ACTIVSENSE safety features.'
  },
  {
    id: '12',
    make: 'Kia',
    model: 'Telluride',
    year: 2021,
    price: 39500,
    mileage: 15000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1601928782843-0234276db579?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Spacious Kia Telluride with three rows of seating. Perfect family SUV with advanced tech and safety features.'
  },
  {
    id: '13',
    make: 'Subaru',
    model: 'Outback',
    year: 2020,
    price: 29800,
    mileage: 22000,
    fuelType: 'Petrol',
    transmission: 'CVT',
    imageUrl: 'https://images.unsplash.com/photo-1591021241548-eb649b2562e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Adventure-ready Subaru Outback with all-wheel drive. Features include X-Mode for off-road capability and EyeSight safety system.'
  },
  {
    id: '14',
    make: 'Porsche',
    model: '911',
    year: 2019,
    price: 98500,
    mileage: 12000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Iconic Porsche 911 sports car in pristine condition. Includes sport chrono package, premium audio, and ceramic brakes.'
  },
  {
    id: '15',
    make: 'Jeep',
    model: 'Wrangler',
    year: 2021,
    price: 42000,
    mileage: 8000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1572405671710-5737bfa509a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Trail-rated Jeep Wrangler ready for adventure. Features include removable top, off-road tires, and modern tech amenities.'
  }
];
