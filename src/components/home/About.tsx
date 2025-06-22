import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const benefits = [
    "Equipe especializada em diversas áreas do marketing digital",
    "Estratégias personalizadas para cada cliente e segmento",
    "Análise de dados e relatórios detalhados de resultados",
    "Atendimento ágil e transparente",
    "Metodologia orientada a resultados"
  ];

  return (
    <section id="sobre" className="section bg-gradient-to-r from-dark-900 to-green-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-primary-100 absolute -top-8 -left-8 w-full h-full rounded-lg"></div>
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
              alt="Nossa equipe de marketing digital" 
              className="rounded-lg shadow-lg relative z-10 w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent-500 text-white p-6 rounded-lg shadow-lg z-20">
              <span className="block text-3xl font-bold text-black">8+</span>
              <span className="text-black">Anos de experiência</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-gtgreen font-bold mb-6">Sobre a GT Estratégia digital</h2>
            <p className="text-gray-100 mb-6 leading-relaxed">
              Somos uma agência de marketing digital focada em resultados. Há mais de 8 anos no mercado, 
              ajudamos empresas de diversos segmentos a aumentar sua presença online, atrair mais clientes 
              e impulsionar suas vendas através de estratégias digitais eficientes e personalizadas.
            </p>
            <p className="text-gray-100 mb-6 leading-relaxed">
              Nossa equipe é composta por profissionais especializados nas diversas áreas do marketing digital, 
              que trabalham de forma integrada para oferecer soluções completas e gerar resultados concretos para nossos clientes.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl text-gtgreen font-semibold mb-4">Por que escolher a GT Estratégia digital?</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CheckCircle size={20} className="text-gtgreen mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-100">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <Link to="/sobre" className="btn-primary">
              Conheça nossa história
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;