

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
    imageUrl: 'https://i.pinimg.com/736x/48/e6/d4/48e6d4a3a1fe79ddbad2c541703bd359.jpg',
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
    imageUrl: 'https://i.pinimg.com/736x/14/9e/79/149e79ae64b8bd6969a49c9da79f1439.jpg',
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
    imageUrl: 'https://i.pinimg.com/736x/e4/2f/52/e42f52918e6dbd6a41513b83671138a3.jpg',
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
    imageUrl: 'https://i.pinimg.com/736x/d0/17/6d/d0176d01f3b2ce35dd70095d4ae6d60b.jpg',
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
    imageUrl: 'https://i.pinimg.com/736x/2a/7a/6b/2a7a6b80010057270b280d07eac76d8a.jpg',
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
    imageUrl: 'https://i.pinimg.com/736x/97/7d/24/977d24a0b5e818dc79fbefc9e2c4af5a.jpg',
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
    imageUrl: 'https://i.pinimg.com/736x/f0/97/91/f09791c528c17d8f6b407f6a22557617.jpg',
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
    imageUrl: 'https://i.pinimg.com/736x/04/00/50/0400506b5b2f513212ccf2c10a60d8e3.jpg',
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
    imageUrl: 'https://i.pinimg.com/736x/e1/c4/9f/e1c49f1aacc947efb5bca8e8b65aaf94.jpg',
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
    imageUrl: 'https://i.pinimg.com/736x/de/36/b6/de36b63ebe2aa619e60dd42203a5faad.jpg',
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
    imageUrl: 'https://i.pinimg.com/736x/d9/bf/91/d9bf91b5f98451c16501293be95d2ce5.jpg',
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
    imageUrl: 'https://i.pinimg.com/736x/fd/d3/28/fdd328741b61c8b9e4fc6a51f42c5896.jpg',
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
    imageUrl: 'https://i.pinimg.com/736x/86/d0/6d/86d06dd5c910a7ff29938d2969e8aaeb.jpg',
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
    imageUrl: 'https://i.pinimg.com/736x/3f/df/8f/3fdf8f6def1440a98f0670c548704ccd.jpg',
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
    imageUrl: 'https://i.pinimg.com/736x/d8/39/41/d83941a4954f5fc605e5ae2b70a40694.jpg',
    description: 'Trail-rated Jeep Wrangler ready for adventure. Features include removable top, off-road tires, and modern tech amenities.'
  },
  

];
