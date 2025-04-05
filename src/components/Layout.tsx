import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen w-full bg-blue-50 dark:bg-blue-950 transition-colors duration-300">
      <Navbar />
      <main className="w-full">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 