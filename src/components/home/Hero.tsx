import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Target, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-dark-500 text-dark-800 pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-white"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-white"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-white md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforme sua presença digital e <span className="text-gtgreen">amplie seus resultados</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-lg">
              Somos especialistas em estratégias digitais que convertem visitas em clientes e aumentam o reconhecimento da sua marca.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contato" className="bg-gtgreen hover:bg-green-500 text-black py-2 px-6 rounded transition-colors">
                Fale com um especialista <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/servicos" className="btn bg-white text-black hover:bg-green-500">
                Conheça nossos serviços
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="mr-4 bg-white/10 p-3 rounded-full">
                  <TrendingUp size={24} className="text-accent-400" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gtgreen">300%</h4>
                  <p className="text-gray-200 text-sm">Aumento médio em conversões</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="mr-4 bg-white/10 p-3 rounded-full">
                  <Target size={24} className="text-accent-400" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gtgreen">98%</h4>
                  <p className="text-gray-200 text-sm">Clientes satisfeitos</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="mr-4 bg-white/10 p-3 rounded-full">
                  <Award size={24} className="text-accent-400" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gtgreen">50+</h4>
                  <p className="text-gray-200 text-sm">Projetos premiados</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
              alt="Equipe de marketing digital trabalhando" 
              className="rounded-lg shadow-xl w-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.6C149.93,118.92,242.7,75.93,321.39,56.44Z" className="fill-dark-700"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;