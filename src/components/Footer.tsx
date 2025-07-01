import React from 'react';
import { Settings, Phone, Mail, Instagram, Shield, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-700 p-2 rounded-lg">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Mecânica Total</h3>
                <p className="text-gray-400">Educação Profissional</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Capacitação técnica de qualidade para profissionais da indústria. 
              Cursos práticos e certificados reconhecidos.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/mecanicatotalbr" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Política de Privacidade</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>Termos de Uso</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="https://wa.me/5511999999999" className="hover:text-white transition-colors flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="mailto:contato@mecanicatotal.com.br" className="hover:text-white transition-colors flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>E-mail</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            © 2024 Mecânica Total Educação Profissional LTDA. 
            CNPJ: 00.000.000/0001-00 - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;