import React from 'react';
import { Shield, Clock, RefreshCw } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="bg-green-100 p-4 rounded-full inline-block mb-6">
              <Shield className="h-12 w-12 text-green-600" />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              🔒 Garantia de 7 dias ou seu dinheiro de volta!
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Aprenda sem riscos. Se não gostar do conteúdo, devolvemos o seu dinheiro.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 p-3 rounded-lg inline-block mb-3">
                  <Clock className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">7 Dias</h3>
                <p className="text-gray-600 text-sm">Para testar todo o conteúdo</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 p-3 rounded-lg inline-block mb-3">
                  <RefreshCw className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">100% Reembolso</h3>
                <p className="text-gray-600 text-sm">Devolução integral garantida</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 p-3 rounded-lg inline-block mb-3">
                  <Shield className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Sem Riscos</h3>
                <p className="text-gray-600 text-sm">Compra 100% segura</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;