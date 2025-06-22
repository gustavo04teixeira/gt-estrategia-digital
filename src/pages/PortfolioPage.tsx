import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  url: string;
}

const PortfolioPage: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Campanha Digital para E-commerce de Moda",
      category: "Mídia Paga",
      image: "https://images.pexels.com/photos/5872361/pexels-photo-5872361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      url: "/portfolio/campanha-ecommerce-moda"
    },
    {
      id: 2,
      title: "Otimização SEO para Clínica Médica",
      category: "SEO",
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      url: "/portfolio/seo-clinica-medica"
    },
    {
      id: 3,
      title: "Gestão de Redes Sociais para Restaurante",
      category: "Redes Sociais",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      url: "/portfolio/redes-sociais-restaurante"
    },
    {
      id: 4,
      title: "Site Institucional para Escritório de Advocacia",
      category: "Desenvolvimento Web",
      image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      url: "/portfolio/site-advocacia"
    }
  ];

  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const categories = ["Todos", "SEO", "Mídia Paga", "Redes Sociais", "Desenvolvimento Web"];

  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="bg-gradient-to-r from-dark-900 via-dark-600 to-dark-500 min-h-screen text-white pt-32 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">Portfólio</h1>
          <p className="text-gray-300">
            Projetos reais, resultados reais. Conheça os cases que demonstram nossa experiência e impacto.
          </p>
        </motion.div>

        {/* Filtro de Categorias */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-green-600 text-black'
                  : 'bg-gtgreen text-black hover:bg-green-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-100 rounded-xl overflow-hidden shadow-md group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <Link
                    to={project.url}
                    className="btn bg-gtgreen text-black hover:bg-green-500"
                  >
                    Ver projeto
                  </Link>
                </div>
              </div>
              <div className="p-6 text-black">
                <span className="inline-block px-3 py-1 bg-dark-600 text-gtgreen rounded-full text-sm font-medium mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <Link
                  to={project.url}
                  className="inline-flex items-center text-dark-900 hover:text-green-600 font-medium mt-2"
                >
                  Ver detalhes <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
