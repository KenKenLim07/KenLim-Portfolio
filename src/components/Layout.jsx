import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';
import { MobileMenu } from './MobileMenu';

export const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}; 