import React from 'react';
import { BookOpen, Award, Infinity, Smartphone, Briefcase } from 'lucide-react';

const WhatsIncluded: React.FC = () => {
  const includes = [
    {
      icon: BookOpen,
      title: '44 horas de conteúdo técnico',
      subtitle: 'Direto ao ponto',
      description: 'Conteúdo prático e objetivo, sem enrolação'
    },
    {
      icon: Award,
      title: '4 certificados reconhecidos',
      subtitle: 'Válidos em todo Brasil',
      description: 'Certificados que fazem diferença no seu currículo'
    },
    {
      icon: Infinity,
      title: 'Acesso vitalício',
      subtitle: 'Para sempre',
      description: 'Estude no seu ritmo, quando e onde quiser'
    },
    {
      icon: Smartphone,
      title: 'Compatível com dispositivos móveis',
      subtitle: 'Estude em qualquer lugar',
      description: 'Acesse pelo celular, tablet ou computador'
    },
    {
      icon: Briefcase,
      title: 'Currículo fortalecido',
      subtitle: '4 formações técnicas',
      description: 'Destaque-se no mercado de trabalho'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            O Que Está Incluso no Combo
          </h2>
          <p className="text-xl text-gray-600">
            Tudo que você precisa para se tornar um profissional mais qualificado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {includes.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 group hover:-translate-y-1">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-4 rounded-lg mb-4 inline-block">
                <item.icon className="h-8 w-8 text-blue-700" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                📚 {item.title}
              </h3>
              
              <div className="text-blue-700 font-semibold mb-3">
                {item.subtitle}
              </div>
              
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;