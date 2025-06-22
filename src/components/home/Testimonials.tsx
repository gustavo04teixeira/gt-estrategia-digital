import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ana Oliveira",
      position: "Gerente de Marketing",
      company: "Moda Express",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      quote: "A GT Marketing transformou completamente nossa estratégia digital. Em apenas 3 meses, aumentamos nossas vendas online em 200%. A equipe é extremamente profissional e está sempre disponível para resolver qualquer problema.",
      rating: 5
    },
    {
      id: 2,
      name: "Roberto Santos",
      position: "CEO",
      company: "Clínica Vitalle",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      quote: "Desde que contratamos a GT Marketing para cuidar do nosso SEO e marketing de conteúdo, o número de novos pacientes aumentou significativamente. Estamos muito satisfeitos com os resultados e a transparência no trabalho.",
      rating: 5
    },
    {
      id: 3,
      name: "Carla Mendes",
      position: "Proprietária",
      company: "Restaurante Sabor & Arte",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      quote: "A gestão de redes sociais realizada pela GT Marketing aumentou nosso engajamento e trouxe novos clientes para o restaurante. O retorno sobre o investimento foi muito além do esperado.",
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section bg-gradient-to-r from-dark-900 to-green-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-white">O que nossos clientes dizem</h2>
          <p className="text-gray-200">Veja o depoimento de alguns dos nossos clientes sobre nossos serviços e resultados.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-gtgreen rounded-xl shadow-xl p-8 text-gray-800">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-center">{currentTestimonial.name}</h4>
                <p className="text-dark-900 font-bold text-center text-sm">{currentTestimonial.position}</p>
                <p className="text-black font-medium text-center text-sm">{currentTestimonial.company}</p>
                
                <div className="flex items-center mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < currentTestimonial.rating ? "text-yellow-300 fill-current " : "text-gray-600"} 
                    />
                  ))}
                </div>
              </div>
              
              <div className="md:w-2/3">
                <svg className="text-dark-900 w-12 h-12 mb-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                </svg>
                
                <p className="text-dark-900 italic text-lg leading-relaxed mb-6">
                  {currentTestimonial.quote}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={goToPrevious}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={goToNext}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-gtgreen scale-125' : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;