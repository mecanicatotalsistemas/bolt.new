import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatYouLearn from './components/WhatYouLearn';
import TargetAudience from './components/TargetAudience';
import WhatsIncluded from './components/WhatsIncluded';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import Offer from './components/Offer';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhatYouLearn />
      <TargetAudience />
      <WhatsIncluded />
      <Testimonials />
      <Guarantee />
      <Offer />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;