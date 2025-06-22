import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, BarChart2, Globe, Shield, Rocket, HeartHandshake, ArrowRight } from 'lucide-react';

const SobrePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Sobre - GT Estratégia Digital';
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <Rocket size={24} className="text-gtgreen" />,
      title: "Inovação Constante",
      description: "Buscamos sempre as soluções mais criativas e tecnológicas"
    },
    {
      icon: <BarChart2 size={24} className="text-gtgreen" />,
      title: "Resultados Mensuráveis",
      description: "Foco em métricas que realmente impactam seu negócio"
    },
    {
      icon: <HeartHandshake size={24} className="text-gtgreen" />,
      title: "Parceria Transparente",
      description: "Comunicação clara e relacionamento de confiança"
    },
    {
      icon: <Users size={24} className="text-gtgreen" />,
      title: "Atendimento Personalizado",
      description: "Soluções sob medida para cada cliente"
    },
    {
      icon: <Award size={24} className="text-gtgreen" />,
      title: "Excelência Garantida",
      description: "Compromisso com a mais alta qualidade"
    },
    {
      icon: <Globe size={24} className="text-gtgreen" />,
      title: "Visão Estratégica",
      description: "Planejamento a longo prazo para crescimento sustentável"
    }
  ];

  const milestones = [
    { year: "2015", title: "Fundação", description: "Nascimento da GT como consultoria especializada" },
    { year: "2017", title: "Primeiro Grande Cliente", description: "Parceria com marca nacional" },
    { year: "2019", title: "Expansão", description: "Equipe multidisciplinar completa" },
    { year: "2022", title: "Reconhecimento", description: "Premiada como melhor agência de performance" },
    { year: "2023", title: "Atual", description: "200+ clientes atendidos com excelência" }
  ];

  return (
    <div className="bg-dark-900 text-white">
      {/* Hero Section */}
      <section className="pt-40 pb-28 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-5 py-2 bg-gtgreen/20 text-gtgreen rounded-full text-sm font-medium mb-6 border border-gtgreen/30">
              Nossa Jornada
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transformando negócios com <span className="text-gtgreen">estratégia digital</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conheça a história, valores e equipe por trás da GT Estratégia Digital
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-dark-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-8 -left-8 w-full h-full bg-gtgreen/10 rounded-2xl -z-10"></div>
              <div className="overflow-hidden rounded-2xl border border-dark-700 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="Equipe GT Estratégia Digital" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gtgreen">Nossa História</h2>
              <p className="text-gray-300 leading-relaxed">
                Fundada em 2015, a GT Estratégia Digital nasceu da visão de transformar negócios através do marketing digital. 
                Começamos como uma pequena consultoria e hoje somos referência em soluções digitais completas.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Nossa equipe multidisciplinar combina expertise técnica com visão estratégica para entregar 
                resultados excepcionais. Ao longo dos anos, ajudamos centenas de empresas a estabelecer uma 
                presença digital forte e conquistar seus objetivos.
              </p>
              
              {/* Linha do tempo */}
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-white mb-4">Marcos Importantes:</h3>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="bg-gtgreen/20 p-2 rounded-lg mr-4 border border-gtgreen/30">
                        <span className="font-bold text-gtgreen">{milestone.year}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{milestone.title}</h4>
                        <p className="text-gray-400 text-sm">{milestone.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Nossos <span className="text-gtgreen">Valores</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Os princípios que guiam cada decisão e ação em nossa empresa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-800/50 p-8 rounded-xl border border-gray-400 hover:border-gtgreen/50 transition-all"
              >
                <div className="bg-gtgreen/20 p-4 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Time */}
     

      {/* CTA Final */}
      <section className="py-28 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-gtgreen/10 to-gtgreen/5 border border-gtgreen/20 rounded-2xl p-12 max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Pronto para <span className="text-gtgreen">transformar</span> seu negócio?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para criar uma estratégia personalizada para suas necessidades.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contato" 
                className="bg-gtgreen hover:bg-gtgreen/90 text-black font-medium py-3 px-6 rounded-lg transition-all group inline-flex items-center"
              >
                Fale com nossos especialistas
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://wa.me/5548991398983" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-500 hover:bg-green-600 text-black font-medium py-3 px-6 rounded-lg transition-all inline-flex items-center"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SobrePage;