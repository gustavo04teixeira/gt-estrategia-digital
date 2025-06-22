import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ChevronRight, Star, Award, ShoppingBag, TrendingUp, Zap, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

const EcommerceModa: React.FC = () => {
  const benefits = [
    { icon: <TrendingUp size={20} />, text: "ROAS de 4.8 em campanhas" },
    { icon: <ShoppingBag size={20} />, text: "Aumento de 120% em vendas" },
    { icon: <Zap size={20} />, text: "Custo de aquisição 35% menor" },
    { icon: <Star size={20} />, text: "Destaque no mercado fashion digital" }
  ];

  const services = [
    {
      title: "Estratégia de Tráfego",
      description: "Segmentação avançada para público fashion",
      features: ["Públicos lookalike", "Remarketing dinâmico", "Testes A/B contínuos"]
    },
    {
      title: "Criação de Conteúdo",
      description: "Produções que destacam seu catálogo",
      features: ["Fotos profissionais", "Vídeos verticais", "Stories convertíveis"]
    },
    {
      title: "Otimização de Conversão",
      description: "Técnicas para maximizar cada visita",
      features: ["Landing pages exclusivas", "UX otimizado", "Fluxos de checkout inteligentes"]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-dark-900 via-dark-700 to-dark-800 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-gtgreen/20 text-gtgreen rounded-full text-sm font-medium mb-6 border border-gtgreen/30">
              Case de Sucesso - E-commerce
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Campanha Digital para <br className="hidden md:block" />
              <span className="text-gtgreen">E-commerce de Moda</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Solução completa que transformou o desempenho digital de uma marca
              de moda feminina, com resultados excepcionais em vendas e ROI.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-dark-600"
          >
            <img 
              src="https://images.pexels.com/photos/5872361/pexels-photo-5872361.jpeg" 
              alt="Modelo com roupa fashion e celular" 
              className="w-full h-auto md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/30 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Destaques */}
      <section className="py-16 bg-dark-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-700/50 p-6 rounded-xl border border-dark-600 hover:border-gtgreen/30 transition-all"
              >
                <div className="text-gtgreen mb-4">
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
              <p className="text-lg text-gray-300 mb-6">
                A marca Bella Fashion buscava melhorar seu desempenho digital em um
                mercado altamente competitivo, com necessidades específicas:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-gtgreen mr-3 mt-1 flex-shrink-0" />
                  <span>Reduzir custo de aquisição de clientes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gtgreen mr-3 mt-1 flex-shrink-0" />
                  <span>Aumentar o ticket médio das compras</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gtgreen mr-3 mt-1 flex-shrink-0" />
                  <span>Melhorar o retorno sobre investimento em mídia</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-dark-700/50 p-8 rounded-2xl border border-dark-600"
            >
              <h3 className="text-2xl font-bold mb-6 text-gtgreen">Nossa Solução</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Análise de Mercado</h4>
                  <p className="text-gray-300">
                    Mapeamento completo da concorrência e identificação de gaps
                    no mercado fashion digital.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Campanhas Performáticas</h4>
                  <p className="text-gray-300">
                    Estratégia multicanal com Facebook Ads, Google Shopping e
                    influenciadores digitais.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Automação Avançada</h4>
                  <p className="text-gray-300">
                    Fluxos de remarketing inteligente e sequências de conversão
                    baseadas em comportamento.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-dark-800/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              O que <span className="text-gtgreen">entregamos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estratégia completa de mídia paga para e-commerce de moda
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
                className="bg-dark-700/50 p-8 rounded-xl border border-dark-600 hover:border-gtgreen/50 transition-all group"
              >
                <div className="text-gtgreen mb-4 text-2xl">
                  <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="text-gtgreen mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-200">{feature}</span>
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
                src="https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg" 
                alt="Gráficos de crescimento e-commerce" 
                className="rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-gtgreen">Resultados</span> Alcançados
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gtgreen mb-2">4.8x</h3>
                  <p className="text-gray-300">Retorno sobre investimento em mídia (ROAS)</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gtgreen mb-2">+120%</h3>
                  <p className="text-gray-300">Aumento nas vendas no primeiro trimestre</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gtgreen mb-2">35%</h3>
                  <p className="text-gray-300">Redução no custo de aquisição de clientes</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Depoimento */}
      <section className="py-20 bg-dark-800/50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-dark-700 p-10 rounded-2xl border border-gtgreen/20 relative"
          >
            <div className="absolute top-6 right-6 text-gtgreen text-5xl opacity-20">"</div>
            <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 font-medium italic">
              "Os resultados superaram todas as expectativas. Em 3 meses, nossa receita digital cresceu mais de 120% com um retorno sobre investimento impressionante. A equipe demonstrou domínio total do mercado de moda digital e soube traduzir nossa identidade em campanhas altamente eficientes."
            </blockquote>
            <div className="flex items-center">
              <div className="mr-4">
                <div className="w-14 h-14 rounded-full bg-gtgreen/20 flex items-center justify-center text-gtgreen">
                  <span className="text-xl font-bold">AS</span>
                </div>
              </div>
              <div>
                <p className="font-bold">Ana Silva</p>
                <p className="text-gray-400 text-sm">Diretora de Marketing - Bella Fashion</p>
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
            className="bg-gradient-to-r from-gtgreen/10 to-gtgreen/5 p-12 rounded-2xl border border-gtgreen/20"
          >
            <span className="inline-block px-6 py-2 bg-gtgreen text-black rounded-full text-sm font-medium mb-6">
              Mídia Paga para E-commerce
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para alavancar suas vendas online?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Nossa equipe especializada em moda digital está pronta para ajudar você.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contato" 
                className="btn-primary flex items-center group"
              >
                Fale com nossos especialistas
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="https://wa.me/5548991398983" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn bg-green-500 hover:bg-green-600 text-black flex items-center"
              >
                <span>Conversar por WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceModa;