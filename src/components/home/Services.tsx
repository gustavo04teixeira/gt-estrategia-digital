import React from 'react';
import { Link } from 'react-router-dom';
import { Search, TrendingUp, Mail, BarChart4, Share2, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link, delay }) => {
  return (
    <motion.div 
      className="card p-6 hover:translate-y-[-8px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="bg-primary-50 w-16 h-16 rounded-lg flex items-center justify-center mb-5 text-primary-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={link} 
        className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
      >
        Saiba mais
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </Link>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Search size={30} />,
      title: "SEO",
      description: "Otimização para mecanismos de busca para aumentar sua visibilidade orgânica e atrair mais visitantes qualificados.",
      link: "/servicos#seo",
      delay: 1
    },
    {
      icon: <TrendingUp size={30} />,
      title: "Mídia Paga",
      description: "Campanhas de anúncios estratégicos no Google Ads, Facebook Ads e outras plataformas para resultados imediatos.",
      link: "/servicos#midia-paga",
      delay: 2
    },
    {
      icon: <Share2 size={30} />,
      title: "Redes Sociais",
      description: "Gestão profissional das suas redes sociais com conteúdo relevante e estratégias de engajamento.",
      link: "/servicos#redes-sociais",
      delay: 3
    },
    {
      icon: <BarChart4 size={30} />,
      title: "Marketing de Conteúdo",
      description: "Desenvolvimento de conteúdo estratégico que atrai, engaja e converte seu público-alvo em clientes.",
      link: "/servicos#marketing-conteudo",
      delay: 4
    },
    {
      icon: <Mail size={30} />,
      title: "Email Marketing",
      description: "Estratégias de email marketing personalizadas para nutrir leads, converter clientes e aumentar vendas.",
      link: "/servicos#email-marketing",
      delay: 5
    },
    {
      icon: <Globe size={30} />,
      title: "Desenvolvimento Web",
      description: "Criação de sites, landing pages e lojas virtuais otimizados para conversão e experiência do usuário.",
      link: "/servicos#desenvolvimento-web",
      delay: 6
    }
  ];

  return (
    <section id="servicos" className="section bg-dark-700">
      <div className="container-custom">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4">Nossos Serviços</h2>
          <p>Oferecemos soluções completas em marketing digital para ajudar sua empresa a crescer, conquistar clientes e aumentar vendas.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              delay={service.delay}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/servicos" className="btn-primary">
            Ver todos os serviços
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;