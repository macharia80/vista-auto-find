
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BrowseCars from "./pages/BrowseCars";
import CarDetails from "./pages/CarDetails";
import SellCar from "./pages/SellCar";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./components/Layout";
import { CartProvider } from "./context/CartContext";
import PricingGuide from "./pages/PricingGuide";
import CarValuation from "./pages/CarValuation";
import Blog from "./pages/Blog";
import SupportCenter from "./pages/SupportCenter";
import HowItWorks from "./pages/HowItWorks";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light" storageKey="car-marketplace-theme">
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Index />} />
                <Route path="browse" element={<BrowseCars />} />
                <Route path="cars/:id" element={<CarDetails />} />
                <Route path="sell" element={<SellCar />} />
                <Route path="cart" element={<Cart />} />
                <Route path="wishlist" element={<WishList />} />
                <Route path="about" element={<About />} />
                <Route path="how-it-works" element={<HowItWorks />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="pricing-guide" element={<PricingGuide />} />
                <Route path="car-valuation" element={<CarValuation />} />
                <Route path="blog" element={<Blog />} />
                <Route path="support" element={<SupportCenter />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
