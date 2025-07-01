import React from 'react';
import { Droplets, Settings, Ruler, Shield } from 'lucide-react';

const WhatYouLearn: React.FC = () => {
  const courses = [
    {
      icon: Droplets,
      title: 'Hidráulica Industrial',
      duration: '12h',
      description: 'Sistemas hidráulicos, bombas, válvulas e componentes industriais',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      icon: Settings,
      title: 'Pneumática Industrial',
      duration: '10h',
      description: 'Ar comprimido, atuadores, válvulas direcionais e circuitos pneumáticos',
      color: 'bg-green-100 text-green-700'
    },
    {
      icon: Ruler,
      title: 'Metrologia',
      duration: '10h',
      description: 'Instrumentos de medição, calibração e controle de qualidade',
      color: 'bg-purple-100 text-purple-700'
    },
    {
      icon: Shield,
      title: 'Elementos de Vedação',
      duration: '12h',
      description: 'Anéis, retentores, juntas e sistemas de vedação industrial',
      color: 'bg-orange-100 text-orange-700'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            O Que Você Vai Aprender
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprenda na prática como funciona cada sistema industrial. Ideal para quem atua ou quer atuar em manutenção, operação ou inspeção de equipamentos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 group hover:-translate-y-1 transition-transform">
              <div className={`inline-flex p-3 rounded-lg ${course.color} mb-4`}>
                <course.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {course.title}
              </h3>
              
              <div className="text-blue-700 font-semibold mb-3">
                💧 {course.duration}
              </div>
              
              <p className="text-gray-600">
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;