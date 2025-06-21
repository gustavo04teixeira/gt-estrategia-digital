import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const SobrePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Sobre - GT';
    window.scrollTo(0, 0);
  }, []);

  const values = [
    'Inovação e criatividade em cada projeto',
    'Compromisso com resultados mensuráveis',
    'Transparência e comunicação clara',
    'Atendimento personalizado',
    'Aprendizado contínuo'
  ];

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-r from-dark-500 to-dark-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gtgreen">Nossa História</h1>
            <p className="text-xl text-gray-100">
              Conheça mais sobre a GT Marketing e nossa missão de transformar negócios através do marketing digital.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-dark-600 to-dark-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Nossa equipe" 
                className="rounded-lg shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gtgreen">Nossa História</h2>
              <p className="text-gray-200 mb-6">
                Fundada em 2015, a GT Estratégia Digital nasceu da paixão por transformar negócios através do marketing digital. 
                Começamos como uma pequena consultoria e hoje somos referência em soluções digitais completas.
              </p>
              <p className="text-gray-200 mb-6">
                Nossa equipe é formada por profissionais especializados em diferentes áreas do marketing digital, 
                unidos pelo objetivo de entregar resultados excepcionais para nossos clientes.
              </p>
              <p className="text-gray-200">
                Ao longo dos anos, ajudamos centenas de empresas a estabelecer uma presença digital forte e 
                conquistar resultados significativos em seus mercados.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-dark-600 to-dark-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gtgreen">Nossos Valores</h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Estes são os princípios que guiam nosso trabalho e relacionamento com clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-dark-100 p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CheckCircle className="text-green-500 mb-4" size={24} />
                <p className="text-dark-900">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-dark-600 to-dark-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-8">Pronto para começar seu projeto?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer no ambiente digital.
          </p>
          <a href="/contato" className="btn-accent">
            Fale com nossa equipe 
          </a>
        </div>
      </section>
    </>
  );
};

export default SobrePage;