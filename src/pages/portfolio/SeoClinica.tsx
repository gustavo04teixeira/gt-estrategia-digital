import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ChevronRight, Star, Activity, HeartPulse, Search, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const SeoClinica: React.FC = () => {
  const benefits = [
    { icon: <Activity size={20} />, text: "Aumento de 60% no tráfego orgânico" },
    { icon: <HeartPulse size={20} />, text: "Maior visibilidade para especialidades" },
    { icon: <Search size={20} />, text: "Posicionamento em 1º lugar para palavras-chave" },
    { icon: <BadgeCheck size={20} />, text: "Selo de qualidade Google My Business" }
  ];

  const services = [
    {
      title: "Pesquisa de Palavras-Chave",
      description: "Estratégia focada nos termos mais buscados por pacientes",
      features: ["Análise de concorrência", "Mapa de intenção de busca", "Priorização por potencial"]
    },
    {
      title: "Otimização On-Page",
      description: "Ajustes técnicos e de conteúdo para melhor rankeamento",
      features: ["Meta tags otimizadas", "Estrutura de conteúdo", "Schema markup médico"]
    },
    {
      title: "Autoridade Digital",
      description: "Construção de backlinks e reputação online",
      features: ["Links de fontes médicas", "Citações em diretórios", "Artigos convidados"]
    }
  ];

  const results = [
    { value: "+60%", label: "Aumento no tráfego orgânico" },
    { value: "1.2K", label: "Novos pacientes/ano" },
    { value: "#1", label: "Posição para termos principais" },
    { value: "4.9★", label: "Avaliação média no Google" }
  ];

  return (
    <div className="bg-gradient-to-br from-dark-900 via-dark-500 to-gtgreen text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-dark-900 text-gtgreen rounded-full text-sm font-medium mb-6 border border-teal-400/30">
              Case de Sucesso - Saúde Digital
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Otimização SEO para <br className="hidden md:block" />
              <span className="text-gtgreen">Clínica Médica</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Estratégia que posicionou uma clínica médica como referência em sua região,
              atraindo pacientes qualificados através do Google.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-800"
          >
            <img 
              src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg" 
              alt="Clínica médica moderna" 
              className="w-full h-auto md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/30 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Destaques */}
      <section className="py-16 bg-gradient-to-r from-dark-700 to-dark-600">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gtgreen p-6 rounded-xl text-black border border-white hover:border-teal-400/30 transition-all"
              >
                <div className="text-dark-900">
                  {item.icon}
                </div>
                <p className="font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre o Projeto */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-gtgreen">Desafio</span> do Cliente
              </h2>
              <p className="text-lg text-blue-100 mb-6">
                A Clínica Saúde Integral enfrentava dificuldades para se destacar nos resultados de busca, apesar de oferecer serviços médicos de excelência:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-gtgreen mr-3 mt-1 flex-shrink-0" />
                  <span>Site não aparecia nas primeiras páginas do Google</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gtgreen mr-3 mt-1 flex-shrink-0" />
                  <span>Concorrência acirrada com grandes hospitais</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gtgreen mr-3 mt-1 flex-shrink-0" />
                  <span>Dificuldade em atrair pacientes online</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-dark-700 p-8 rounded-2xl border border-gtgreen"
            >
              <h3 className="text-2xl font-bold mb-6 text-gtgreen">Nossa Solução</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">SEO Técnico Especializado</h4>
                  <p className="text-blue-100">
                    Otimização completa da estrutura do site para mecanismos de busca, com foco em performance e experiência do usuário.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Conteúdo Médico Autoritativo</h4>
                  <p className="text-blue-100">
                    Artigos e páginas otimizadas com termos buscados por pacientes, escritos por especialistas.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Google My Business Premium</h4>
                  <p className="text-blue-100">
                    Perfil otimizado com fotos profissionais, perguntas frequentes e gestão de avaliações.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-green-900/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Estratégia de <span className="text-gtgreen">Otimização</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Abordagem completa que transformou a presença digital da clínica
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-dark-900/80 p-8 rounded-xl border border-gtgreen hover:border-white transition-all group"
              >
                <div className="text-gtgreen mb-4 text-2xl">
                  <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-blue-100 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="text-gtgreen mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-blue-50">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg" 
                alt="Gráficos de crescimento médico" 
                className="rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-dark-900/80 p-8 rounded-2xl"
            >
              <h2 className="text-3xl font-bold mb-8">
                <span className="text-gtgreen">Resultados</span> Mensuráveis
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {results.map((result, index) => (
                  <div key={index} className="text-center">
                    <h3 className="text-3xl font-bold text-gtgreen mb-2">{result.value}</h3>
                    <p className="text-gray-100">{result.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Depoimento */}
      <section className="py-20 bg-dark-900/30">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-dark-900/80 p-10 rounded-2xl border border-teal-400/20 relative"
          >
            <div className="absolute top-6 right-6 text-teal-400 text-5xl opacity-20">"</div>
            <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 font-medium italic">
              "A estratégia de SEO desenvolvida pela GT transformou nosso fluxo de pacientes. Em 6 meses, passamos de poucas visitas diárias para mais de 15 agendamentos online por dia, com taxa de conversão impressionante. O trabalho superou todas nossas expectativas."
            </blockquote>
            <div className="flex items-center">
              <div className="mr-4">
                <div className="w-14 h-14 rounded-full bg-gtgreen flex border border-white items-center justify-center text-teal-400">
                  <span className="text-xl font-bold text-black">DR</span>
                </div>
              </div>
              <div>
                <p className="font-bold text-gray-200">Dra. Renata Oliveira</p>
                <p className="text-gtgreen text-sm">Diretora Clínica - Saúde Integral</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-dark-900/60 to-dark-700/90 p-12 rounded-2xl border border-teal-400/20"
          >
            <span className="inline-block px-6 py-2 bg-gtgreen text-black rounded-full text-sm font-medium mb-6">
              SEO Médico Especializado
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quer mais pacientes para sua clínica?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Nossa equipe especializada em saúde digital pode ajudar sua clínica a ser encontrada por mais pacientes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contato" 
                className="btn bg-gtgreen hover:bg-green-500 text-black flex items-center group px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Falar com especialista em SEO
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="https://wa.me/5548991398983" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn bg-white hover:bg-gray-300 text-blue-900 flex items-center px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <span className='text-black '>Agendar Consultoria Gratuita</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SeoClinica;