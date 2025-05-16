
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
  const location = useLocation();
  
  // Only add margin to the main content for certain pages (not home page)
  const shouldAddMargin = location.pathname !== '/';
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-grow ${shouldAddMargin ? 'mt-5' : ''}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
