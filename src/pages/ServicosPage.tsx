import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicosPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Serviços - DigiMarketing';
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'seo',
      title: 'SEO',
      description: 'Aumente sua visibilidade nos mecanismos de busca e atraia mais tráfego qualificado para o seu site.',
      image: 'https://images.pexels.com/photos/5766242/pexels-photo-5766242.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      features: [
        'Análise de palavras-chave e concorrentes',
        'Otimização on-page e técnica',
        'Criação de conteúdo otimizado',
        'Link building estratégico',
        'Relatórios de desempenho mensais'
      ]
    },
    {
      id: 'midia-paga',
      title: 'Mídia Paga',
      description: 'Campanhas estratégicas de anúncios online para aumentar sua visibilidade e conversões rapidamente.',
      image: 'https://images.pexels.com/photos/5833891/pexels-photo-5833891.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      features: [
        'Campanhas no Google Ads e Redes de Display',
        'Anúncios no Facebook, Instagram e LinkedIn',
        'Remarketing e segmentação avançada',
        'Otimização constante para ROI máximo',
        'Análise de resultados e ajustes estratégicos'
      ]
    },
    {
      id: 'redes-sociais',
      title: 'Gestão de Redes Sociais',
      description: 'Gerenciamento profissional das suas redes sociais para engajar seu público e fortalecer sua marca.',
      image: 'https://images.pexels.com/photos/3638886/pexels-photo-3638886.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      features: [
        'Planejamento de conteúdo estratégico',
        'Design de posts e materiais visuais',
        'Calendário editorial e agendamento',
        'Monitoramento e resposta a comentários',
        'Análise de métricas e otimização de estratégia'
      ]
    },
    {
      id: 'marketing-conteudo',
      title: 'Marketing de Conteúdo',
      description: 'Crie conteúdo relevante que atrai, engaja e converte seu público em clientes fiéis.',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      features: [
        'Estratégia de conteúdo personalizada',
        'Produção de artigos, e-books e infográficos',
        'Otimização de conteúdo para SEO',
        'Calendário editorial e distribuição',
        'Análise de engajamento e conversões'
      ]
    },
    {
      id: 'email-marketing',
      title: 'Email Marketing',
      description: 'Comunique-se diretamente com seus clientes e leads através de campanhas de email estratégicas.',
      image: 'https://images.pexels.com/photos/4064226/pexels-photo-4064226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      features: [
        'Segmentação avançada de lista',
        'Criação de templates personalizados',
        'Automação de fluxos de email',
        'A/B testing para otimização',
        'Análise de métricas de desempenho'
      ]
    },
    {
      id: 'desenvolvimento-web',
      title: 'Desenvolvimento Web',
      description: 'Sites modernos, responsivos e otimizados para conversão que impressionam seus visitantes.',
      image: 'https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      features: [
        'Design UX/UI intuitivo e moderno',
        'Desenvolvimento responsivo',
        'Otimização para SEO e velocidade',
        'Integração com sistemas de pagamento',
        'Painel administrativo para gestão de conteúdo'
      ]
    }
  ];

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary-900 to-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-dark-gtgreen">Nossos Serviços</h1>
            <p className="text-xl text-gray-100">
              Soluções completas em marketing digital para impulsionar seu negócio no ambiente online.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              id={service.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center mb-20`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="lg:w-1/2">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">{service.title}</h2>
                <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                    >
                      <CheckCircle size={20} className="text-secondary-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <button className="btn-primary">
                  Solicitar orçamento
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary-800 to-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Pronto para transformar seu negócio digital?</h2>
          <p className="text-xl text-gray-100 mb-10 max-w-3xl mx-auto">
            Entre em contato hoje mesmo e descubra como podemos ajudar a alavancar sua presença online.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contato" className="btn-accent">
              Fale com um especialista
            </a>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn bg-green-500 hover:bg-green-600 text-white">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicosPage;