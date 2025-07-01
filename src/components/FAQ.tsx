import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqs = [
    {
      question: 'É 100% online?',
      answer: 'Sim! Todos os cursos são 100% online. Você pode acessar o conteúdo 24h por dia, 7 dias por semana, de qualquer dispositivo com internet.'
    },
    {
      question: 'Tem certificado?',
      answer: 'Sim! Você recebe 4 certificados reconhecidos, um para cada curso do combo. Os certificados são válidos em todo território nacional.'
    },
    {
      question: 'Preciso ter experiência na área?',
      answer: 'Não é necessário! Os cursos foram desenvolvidos tanto para iniciantes quanto para profissionais experientes que querem se atualizar.'
    },
    {
      question: 'Em quanto tempo concluo os cursos?',
      answer: 'Você tem acesso vitalício e pode estudar no seu próprio ritmo. São 44 horas de conteúdo que podem ser concluídas de acordo com sua disponibilidade.'
    },
    {
      question: 'Como acesso o conteúdo?',
      answer: 'Após a compra, você recebe por email os dados de acesso à nossa plataforma. O acesso é liberado em até 5 minutos após a confirmação do pagamento.'
    },
    {
      question: 'Posso pagar parcelado?',
      answer: 'Sim! Você pode parcelar em até 12x no cartão de crédito ou pagar à vista com desconto via PIX ou boleto.'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre os cursos
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  {openItem === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-700" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>
                
                {openItem === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;