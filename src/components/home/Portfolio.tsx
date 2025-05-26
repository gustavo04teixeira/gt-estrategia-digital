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

const Portfolio: React.FC = () => {
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
    <section id="portfolio" className="section bg-gray-50">
      <div className="container-custom">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4">Nosso Portfólio</h2>
          <p>Conheça alguns dos projetos que desenvolvemos e os resultados que alcançamos para nossos clientes.</p>
        </motion.div>*/

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Link to={project.url} className="btn bg-white text-primary-600 hover:bg-gray-100">
                    Ver projeto
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <Link 
                  to={project.url} 
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mt-2"
                >
                  Ver detalhes <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/portfolio" className="btn-primary">
            Ver todos os projetos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
