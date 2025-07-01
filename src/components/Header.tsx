import React from 'react';
import { Settings } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

const Header: React.FC = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer');
    offerSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-700 p-2 rounded-lg">
              <Settings className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Mecânica Total</h1>
              <p className="text-sm text-gray-600">Educação Profissional</p>
            </div>
          </div>
          
          <AnimatedButton 
            onClick={scrollToOffer} 
            className="hidden md:block" 
            variant="red-pulse"
          >
            Quero Me Qualificar Agora
          </AnimatedButton>
        </div>
      </div>
    </header>
  );
};

export default Header;