import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import InfoCards from './components/InfoCards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-beige flex flex-col font-body">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <ProductShowcase />
        <InfoCards />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
