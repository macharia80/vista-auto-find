
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  Trash2, 
  Plus, 
  Minus, 
  CreditCard, 
  ShoppingCart,
  ArrowLeft
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatCurrency } from '@/lib/utils';
import { toast } from "@/hooks/use-toast";

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  
  const handleCheckout = () => {
    if (items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Add some cars to your cart before checking out",
        variant: "destructive",
      });
      return;
    }
    setIsCheckingOut(true);
  };
  
  const handlePayment = () => {
    toast({
      title: "Order successful!",
      description: "Thank you for your purchase. A confirmation has been sent to your email.",
    });
    clearCart();
    setIsCheckingOut(false);
  };
  
  if (items.length === 0 && !isCheckingOut) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center">
          <ShoppingCart className="h-16 w-16 mx-auto text-gray-300 mb-6" />
          <h2 className="text-2xl font-bold mb-2">Your Cart is Empty</h2>
          <p className="text-gray-500 mb-8">
            Looks like you haven't added any cars to your cart yet.
          </p>
          <Link to="/browse">
            <Button className="bg-orange hover:bg-orange/90 text-white">
              Browse Cars
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">{isCheckingOut ? 'Checkout' : 'Your Cart'}</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        {isCheckingOut ? 'Complete your purchase' : items.length > 0 ? `${items.length} item${items.length > 1 ? 's' : ''} in your cart` : 'Your cart is empty'}
      </p>
      
      {!isCheckingOut ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Cart Items</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {items.map((item) => (
                  <div key={item.car.id} className="p-4 border-b last:border-0">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="w-full sm:w-32 h-24 rounded-md overflow-hidden">
                        <img 
                          src={item.car.imageUrl} 
                          alt={`${item.car.make} ${item.car.model}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <Link to={`/cars/${item.car.id}`} className="font-medium hover:text-orange">
                          {item.car.year} {item.car.make} {item.car.model}
                        </Link>
                        <p className="text-sm text-gray-500">
                          {item.car.mileage.toLocaleString()} km • {item.car.transmission} • {item.car.fuelType}
                        </p>
                      </div>
                      
                      <div className="flex flex-col sm:items-end justify-between">
                        <p className="font-semibold text-lg">{formatCurrency(item.car.price * item.quantity)}</p>
                        
                        <div className="flex items-center gap-2 mt-2">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8 rounded-full"
                            onClick={() => updateQuantity(item.car.id, Math.max(1, item.quantity - 1))}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          
                          <span className="w-8 text-center">{item.quantity}</span>
                          
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8 rounded-full"
                            onClick={() => updateQuantity(item.car.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                          
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                            onClick={() => removeFromCart(item.car.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="flex justify-between py-4">
                <Button 
                  variant="outline"
                  onClick={() => clearCart()}
                >
                  Clear Cart
                </Button>
                
                <Link to="/browse">
                  <Button variant="ghost" className="flex items-center gap-2">
                    <ArrowLeft size={16} />
                    Continue Shopping
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium">{formatCurrency(getTotalPrice())}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Taxes</span>
                  <span className="font-medium">{formatCurrency(getTotalPrice() * 0.1)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span className="font-medium">{formatCurrency(500)}</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>{formatCurrency(getTotalPrice() + getTotalPrice() * 0.1 + 500)}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-orange hover:bg-orange/90 text-white"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Shipping Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                  <Input id="phone" placeholder="+1 (555) 123-4567" />
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium mb-1">Address</label>
                  <Input id="address" placeholder="123 Main St" />
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium mb-1">City</label>
                    <Input id="city" placeholder="New York" />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium mb-1">State</label>
                    <Input id="state" placeholder="NY" />
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium mb-1">ZIP</label>
                    <Input id="zip" placeholder="10001" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      id="credit-card" 
                      name="payment" 
                      value="credit-card"
                      checked={paymentMethod === 'credit-card'}
                      onChange={() => setPaymentMethod('credit-card')}
                      className="text-orange"
                    />
                    <label htmlFor="credit-card" className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Credit/Debit Card
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      id="paypal" 
                      name="payment" 
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={() => setPaymentMethod('paypal')}
                      className="text-orange"
                    />
                    <label htmlFor="paypal" className="flex items-center gap-2">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.0677 7.26457C20.1358 6.92943 20.0677 6.69182 19.9316 6.49971C19.7275 6.14403 19.2513 6 18.639 6H14.9212C14.7171 6 14.5471 6.14403 14.513 6.32858L12.9517 15.4485C12.9176 15.6331 13.0537 15.8115 13.2578 15.8115H14.8532C14.9893 15.8115 15.1253 15.7105 15.1253 15.5396V15.4623L15.6356 12.4166V12.3802C15.6356 12.2093 15.7717 12.0652 15.9077 12.0652H16.2819C17.7751 12.0652 18.9282 11.4978 19.3363 9.74221C19.5064 9.03515 19.4383 8.44225 19.0643 8.02861C19.1324 7.77344 19.2513 7.51048 19.4043 7.28065C19.6084 7.26457 19.8465 7.26457 20.0677 7.26457Z" fill="#27346A" />
                        <path d="M6.00436 7.62027C6.17451 7.62027 6.32664 7.5193 6.36068 7.39492L7.7522 0.818182C7.7863 0.659829 7.65208 0.5 7.48192 0.5H4.38506C4.21494 0.5 4.06281 0.62541 4.02871 0.784777L2 13.6818C2 13.8402 2.1172 13.9659 2.27039 14H4.81385C4.984 14 5.13613 13.8745 5.17017 13.7152L5.9344 8.48504C5.96845 8.29121 5.838 8.1326 6.00436 8.1326V7.62027Z" fill="#27346A" />
                        <path d="M13.7863 7.59637C13.7522 7.7843 13.5822 7.91887 13.4141 7.91887H11.0334C10.9334 7.91887 10.8333 7.98565 10.7993 8.13599L9.72693 14.3622C9.69287 14.5125 9.80903 14.6466 9.95408 14.6466H11.3671C11.5031 14.6466 11.6193 14.5466 11.6533 14.4129L11.9934 12.2113C12.0277 12.0233 12.1978 11.8888 12.3658 11.8888H12.9461C14.5079 11.8888 15.7155 11.151 16.0216 9.2998C16.1556 8.56478 16.0216 7.98565 15.7155 7.59637C15.3754 7.17375 14.6592 7 13.8544 7C13.8203 7.19796 13.8203 7.40408 13.7863 7.59637Z" fill="#2790C3" />
                        <path d="M6.00436 7.62027C6.17451 7.62027 6.32664 7.5193 6.36068 7.39492L7.7522 0.818182C7.7863 0.659829 7.65208 0.5 7.48192 0.5H4.38506C4.21494 0.5 4.06281 0.62541 4.02871 0.784777L2 13.6818C2 13.8402 2.1172 13.9659 2.27039 14H4.81385C4.984 14 5.13613 13.8745 5.17017 13.7152L5.9344 8.48504C5.96845 8.29121 5.834 8.09739 6.00436 8.09739V7.62027Z" fill="#27346A" />
                        <path d="M13.7905 7.59637C13.7565 7.7843 13.5865 7.91887 13.4184 7.91887H11.0417C10.9417 7.91887 10.8416 7.98565 10.8076 8.13599L9.73123 14.3622C9.69718 14.5125 9.8133 14.6466 9.95839 14.6466H11.3714C11.5075 14.6466 11.6236 14.5466 11.6576 14.4129L11.9977 12.2113C12.032 12.0233 12.202 11.8888 12.3701 11.8888H12.9504C14.5122 11.8888 15.7198 11.151 16.0259 9.2998C16.1599 8.56478 16.0259 7.98565 15.7198 7.59637C15.3797 7.17375 14.6635 7 13.8587 7C13.8247 7.19796 13.8247 7.40408 13.7905 7.59637Z" fill="#2790C3" />
                        <path d="M8 7.24756C8.00397 7.21651 8.00794 7.15439 8.01588 7.12334C8.47798 4.49626 10.212 3 12.5621 3C14.7142 3 16 4.26391 16 6.33392C16 8.77056 14.6579 10 12.2979 10H9.54861C9.30063 10 9.16067 10.1863 9.12088 10.4599L8 17H5L7.98606 7.30969C7.99001 7.27864 7.99397 7.27864 8 7.24756Z" fill="#2790C3" />
                      </svg>
                      PayPal
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      id="mpesa" 
                      name="payment" 
                      value="mpesa"
                      checked={paymentMethod === 'mpesa'}
                      onChange={() => setPaymentMethod('mpesa')}
                      className="text-orange"
                    />
                    <label htmlFor="mpesa" className="flex items-center gap-2">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" rx="4" fill="#4CAF50" />
                        <path d="M12 6C8.686 6 6 8.686 6 12C6 15.314 8.686 18 12 18C15.314 18 18 15.314 18 12C18 8.686 15.314 6 12 6ZM13.5 15H10.5V13.5H13.5V15ZM13.5 12.75H10.5V11.25H13.5V12.75ZM13.5 10.5H10.5V9H13.5V10.5Z" fill="white" />
                      </svg>
                      M-Pesa
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      id="absa" 
                      name="payment" 
                      value="absa"
                      checked={paymentMethod === 'absa'}
                      onChange={() => setPaymentMethod('absa')}
                      className="text-orange"
                    />
                    <label htmlFor="absa" className="flex items-center gap-2">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" rx="4" fill="#FF0000" />
                        <path d="M7 12L10.5 8.5L14 12L17 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 15H18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      ABSA
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input 
                      type="radio" 
                      id="standard-chartered" 
                      name="payment" 
                      value="standard-chartered"
                      checked={paymentMethod === 'standard-chartered'}
                      onChange={() => setPaymentMethod('standard-chartered')}
                      className="text-orange"
                    />
                    <label htmlFor="standard-chartered" className="flex items-center gap-2">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" rx="4" fill="#0000C1" />
                        <path d="M6 12H18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        <path d="M12 6V18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      Standard Chartered
                    </label>
                  </div>
                </div>
                
                {paymentMethod === 'credit-card' && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <label htmlFor="card-number" className="block text-sm font-medium mb-1">Card Number</label>
                      <Input id="card-number" placeholder="1234 5678 9012 3456" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiry" className="block text-sm font-medium mb-1">Expiry Date</label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div>
                        <label htmlFor="cvc" className="block text-sm font-medium mb-1">CVC</label>
                        <Input id="cvc" placeholder="123" />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="name-on-card" className="block text-sm font-medium mb-1">Name on Card</label>
                      <Input id="name-on-card" placeholder="John Doe" />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item) => (
                  <div key={item.car.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <img 
                        src={item.car.imageUrl} 
                        alt={`${item.car.make} ${item.car.model}`} 
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div>
                        <p className="font-medium">{item.car.make} {item.car.model}</p>
                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-medium">{formatCurrency(item.car.price * item.quantity)}</p>
                  </div>
                ))}
                
                <Separator />
                
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium">{formatCurrency(getTotalPrice())}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Taxes</span>
                  <span className="font-medium">{formatCurrency(getTotalPrice() * 0.1)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span className="font-medium">{formatCurrency(500)}</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>{formatCurrency(getTotalPrice() + getTotalPrice() * 0.1 + 500)}</span>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button 
                  className="w-full bg-orange hover:bg-orange/90 text-white"
                  onClick={handlePayment}
                >
                  Complete Purchase
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="w-full"
                  onClick={() => setIsCheckingOut(false)}
                >
                  Back to Cart
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
