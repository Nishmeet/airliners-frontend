import React from 'react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Sections
import Hero from './sections/Hero';
import Legacy from './sections/Legacy';
import Services from './sections/Services';
import Partners from './sections/Partners';
import WhyUs from './sections/WhyUs';
import Testimonials from './sections/Testimonials';

function App() {
  return (
    <div className="min-h-screen">
      {/* Header - Sticky navigation */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section - Full screen with carousel */}
        <Hero />
        
        {/* Legacy & Expertise Section */}
        <Legacy />
        
        {/* Services Section - Travel deals and solutions */}
        <Services />
        
        {/* Partners Section - Airline partners */}
        <Partners />
        
        {/* Why Us Section - Benefits of partnering */}
        <WhyUs />
        
        {/* Testimonials Section - Success stories */}
        <Testimonials />
      </main>
      
      {/* Footer - Comprehensive multi-column footer */}
      <Footer />
    </div>
  );
}

export default App;
