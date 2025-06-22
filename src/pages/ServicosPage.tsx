import React, { useEffect } from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  ChevronRight,
  BarChart2,
  Zap,
  Instagram,
  Mail,
  Code,
  FileText
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicosPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Serviços - GT';
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'seo',
      title: 'SEO',
      description: 'Aumente sua visibilidade nos mecanismos de busca e atraia mais tráfego qualificado para o seu site.',
      image: 'https://images.pexels.com/photos/7119258/pexels-photo-7119258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      features: [
        'Análise de palavras-chave e concorrentes',
        'Otimização on-page e técnica',
        'Criação de conteúdo otimizado',
        'Link building estratégico',
        'Relatórios de desempenho mensais'
      ],
      icon: <BarChart2 size={24} className="text-gtgreen" />
    },
    {
      id: 'midia-paga',
      title: 'Mídia Paga',
      description: 'Campanhas estratégicas de anúncios online para aumentar sua visibilidade e conversões rapidamente.',
      image: 'https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      features: [
        'Campanhas no Google Ads e Redes de Display',
        'Anúncios no Facebook, Instagram e LinkedIn',
        'Remarketing e segmentação avançada',
        'Otimização constante para ROI máximo',
        'Análise de resultados e ajustes estratégicos'
      ],
      icon: <Zap size={24} className="text-gtgreen" />
    },
    {
      id: 'redes-sociais',
      title: 'Gestão de Redes Sociais',
      description: 'Gerenciamento profissional das suas redes sociais para engajar seu público e fortalecer sua marca.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      features: [
        'Planejamento de conteúdo estratégico',
        'Design de posts e materiais visuais',
        'Calendário editorial e agendamento',
        'Monitoramento e resposta a comentários',
        'Análise de métricas e otimização de estratégia'
      ],
      icon: <Instagram size={24} className="text-gtgreen" />
    },
    {
      id: 'marketing-conteudo',
      title: 'Marketing de Conteúdo',
      description: 'Crie conteúdo relevante que atrai, engaja e converte seu público em clientes fiéis.',
      image: 'https://images.pexels.com/photos/590011/pexels-photo-590011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      features: [
        'Estratégia de conteúdo personalizada',
        'Produção de artigos, e-books e infográficos',
        'Otimização de conteúdo para SEO',
        'Calendário editorial e distribuição',
        'Análise de engajamento e conversões'
      ],
      icon: <FileText size={24} className="text-gtgreen" />
    },
    {
      id: 'email-marketing',
      title: 'Email Marketing',
      description: 'Comunique-se diretamente com seus clientes e leads através de campanhas de email estratégicas.',
      image: 'https://images.pexels.com/photos/7075408/pexels-photo-7075408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      features: [
        'Segmentação avançada de lista',
        'Criação de templates personalizados',
        'Automação de fluxos de email',
        'A/B testing para otimização',
        'Análise de métricas de desempenho'
      ],
      icon: <Mail size={24} className="text-gtgreen" />
    },
    {
      id: 'desenvolvimento-web',
      title: 'Desenvolvimento Web',
      description: 'Sites modernos, responsivos e otimizados para conversão que impressionam seus visitantes.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      features: [
        'Design UX/UI intuitivo e moderno',
        'Desenvolvimento responsivo',
        'Otimização para SEO e velocidade',
        'Integração com sistemas de pagamento',
        'Painel administrativo para gestão de conteúdo'
      ],
      icon: <Code size={24} className="text-gtgreen" />
    }
  ];

  return (
    <div className="bg-dark-900 text-white min-h-screen">
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
              Soluções Digitais Integradas
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Nossos <span className="text-gtgreen">Serviços</span> de Marketing Digital
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estratégias personalizadas que impulsionam sua presença online e geram resultados tangíveis para seu negócio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Serviços em Destaque */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-gtgreen/50 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-gtgreen/20 backdrop-blur-sm p-3 rounded-lg border border-gtgreen/30">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gtgreen transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle size={18} className="text-gtgreen mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={`#${service.id}-detalhes`} 
                    className="inline-flex items-center text-gtgreen font-medium group-hover:text-white transition-colors"
                  >
                    Ver detalhes
                    <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detalhes dos Serviços */}
      <section className="py-20 bg-dark-950">
        <div className="container mx-auto px-6">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              id={`${service.id}-detalhes`}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center mb-28 last:mb-0`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-xl overflow-hidden border border-dark-700 shadow-2xl">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent"></div>
                </div>
              </div>
              
              <div className="lg:w-1/2 w-full">
                <div className="flex items-center mb-4">
                  <div className="bg-gtgreen/20 p-3 rounded-lg mr-4 border border-gtgreen/30">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gtgreen">{service.title}</h2>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
                
                <div className="bg-dark-800/50 border border-dark-700 rounded-lg p-6 mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">O que incluímos:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                      >
                        <CheckCircle size={20} className="text-gtgreen mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-4">
                   <Link 
                    to="/contato" 
                    className="bg-gtgreen hover:bg-gtgreen/90 text-black font-medium py-3 px-6 rounded-lg transition-all group inline-flex items-center"
                  >
                    Solicitar orçamento
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a 
                    href="https://wa.me/5548991398983" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-green-500 hover:bg-green-600 text-black font-medium py-3 px-6 rounded-lg transition-all"
                  >
                    Conversar por WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

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
              Pronto para <span className="text-gtgreen">transformar</span> seu negócio digital?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para criar uma estratégia personalizada para suas necessidades.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contato" 
                className="bg-gtgreen hover:bg-gtgreen/90 text-black font-medium py-3 px-6 rounded-lg transition-all group"
              >
                Fale com um especialista
                <ArrowRight size={18} className="ml-2 inline group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://wa.me/5548991398983" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-500 hover:bg-green-600 text-black font-medium py-3 px-6 rounded-lg transition-all"
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

export default ServicosPage;