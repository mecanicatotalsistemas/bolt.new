import React from 'react';
import { Play, Star } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

const Hero: React.FC = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer');
    offerSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.9/5 (2.847 avaliações)</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                🔥 Torne-se um Profissional Mais{' '}
                <span className="text-blue-700">Competitivo</span> com o Combo Hidráulica + 3 Cursos Técnicos!
              </h1>
              
              <p className="text-xl text-gray-600">
                Capacitação 100% Online • Certificado Reconhecido • Acesso Vitalício
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <AnimatedButton 
                onClick={scrollToOffer} 
                size="lg" 
                variant="red-pulse"
              >
                👉 Comece Agora por Apenas R$197
              </AnimatedButton>
              
              <button className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-blue-700 transition-colors">
                <Play className="h-5 w-5" />
                <span>Ver Demonstração</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-700">44h</div>
                <div className="text-sm text-gray-600">de Conteúdo</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-700">4</div>
                <div className="text-sm text-gray-600">Certificados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-700">∞</div>
                <div className="text-sm text-gray-600">Acesso Vitalício</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1029240/pexels-photo-1029240.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Cursos de Mecânica Industrial" 
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold animate-pulse">
                🔥 Oferta Limitada!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;