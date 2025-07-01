import React from 'react';
import { Check, Users, GraduationCap, TrendingUp, Briefcase } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const audience = [
    {
      icon: Users,
      title: 'Técnicos em início de carreira',
      description: 'Profissionais que estão começando e querem uma base sólida'
    },
    {
      icon: TrendingUp,
      title: 'Mecânicos industriais em busca de atualização',
      description: 'Profissionais experientes que querem se manter atualizados'
    },
    {
      icon: GraduationCap,
      title: 'Estudantes de cursos técnicos e engenharia',
      description: 'Estudantes que querem complementar a formação acadêmica'
    },
    {
      icon: Briefcase,
      title: 'Profissionais que querem subir de cargo',
      description: 'Quem busca promoção com mais qualificação técnica'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Para Quem É Esse Combo
          </h2>
          <p className="text-xl text-gray-600">
            Desenvolvido especialmente para profissionais da área industrial
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {audience.map((item, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex-shrink-0">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <item.icon className="h-5 w-5 text-blue-700" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;