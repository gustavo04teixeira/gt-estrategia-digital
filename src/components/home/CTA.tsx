import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  const benefits = [
    "Análise gratuita do seu site",
    "Estratégia personalizada",
    "Relatórios detalhados de resultados",
    "Suporte contínuo"
  ];

  return (
    <section className="section bg-gray-50 py-20">
      <div className="container-custom">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Content */}
            <motion.div 
              className="p-8 lg:p-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                Comece Agora
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para transformar sua presença digital?
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Entre em contato hoje mesmo e descubra como podemos ajudar sua empresa a crescer no mundo digital.
              </p>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <CheckCircle size={20} className="text-secondary-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contato" className="btn-primary">
                  Fale com um especialista <ArrowRight size={18} className="ml-2" />
                </Link>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn bg-green-500 hover:bg-green-600 text-white">
                  WhatsApp
                </a>
              </div>
            </motion.div>
            
            {/* Image */}
            <motion.div 
              className="hidden lg:block bg-gradient-to-br from-primary-600 to-primary-900 relative overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white"></div>
              </div>
              <div className="relative z-10 h-full flex items-center justify-center p-12">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="Equipe de marketing digital" 
                  className="rounded-lg shadow-xl max-h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;