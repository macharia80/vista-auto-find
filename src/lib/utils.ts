
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function getYearRange(startYear: number, endYear: number): number[] {
  const years = [];
  for (let year = endYear; year >= startYear; year--) {
    years.push(year);
  }
  return years;
}

export function getMinMaxPrices(cars: any[]): { min: number; max: number } {
  if (!cars.length) return { min: 0, max: 100000 };
  
  const prices = cars.map(car => car.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
}
