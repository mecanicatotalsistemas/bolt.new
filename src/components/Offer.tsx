import React from 'react';
import { Clock, Gift, Users } from 'lucide-react';
import AnimatedButton from './AnimatedButton';
import CountdownTimer from './CountdownTimer';

const Offer: React.FC = () => {
  const handlePurchase = () => {
    // Aqui você integraria com o Hotmart ou seu sistema de pagamento
    window.open('https://hotmart.com/seu-link-aqui', '_blank');
  };

  return (
    <section id="offer" className="py-16 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            💥 Oferta por Tempo Limitado!
          </h2>
          
          <div className="bg-white/10 backdrop-blur rounded-xl p-8 mb-8">
            <CountdownTimer />
          </div>
          
          <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8 lg:p-12 mb-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <div className="text-red-500 line-through text-2xl mb-2">
                  De R$ 297,00
                </div>
                <div className="text-5xl font-bold text-green-600 mb-4">
                  R$ 197,00
                </div>
                <div className="text-gray-600 mb-4">
                  ou em até 12x de R$ 19,70
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-blue-700" />
                    <span className="text-sm">Promoção por tempo limitado</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-blue-700" />
                    <span className="text-sm">Últimas vagas com acesso vitalício</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Gift className="h-5 w-5 text-blue-700" />
                    <span className="text-sm">Bônus surpresa para os primeiros 50 alunos</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <AnimatedButton 
                  onClick={handlePurchase} 
                  size="xl"
                  className="w-full"
                  variant="red-pulse"
                >
                  🔵 Quero Me Qualificar Agora
                </AnimatedButton>
                
                <p className="text-sm text-gray-500">
                  🔒 Compra 100% segura • Garantia de 7 dias
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-2xl font-bold">2.847</div>
              <div className="text-sm opacity-90">Alunos Matriculados</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-2xl font-bold">4.9/5</div>
              <div className="text-sm opacity-90">Avaliação Média</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-2xl font-bold">97%</div>
              <div className="text-sm opacity-90">Recomendam</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;