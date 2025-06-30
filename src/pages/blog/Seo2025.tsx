import { useState, useEffect } from 'react';

const Seo2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-800 via-dark-600 to-gray-900 text-gray-100 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      {/* SEO Meta Tags - Use react-helmet-async or your preferred method */}
      
      <div className="max-w-4xl mx-auto">
        <article className="prose prose-invert max-w-none">
          <header className="mb-16">
            <h1 className="text-5xl font-extrabold text-white mb-6 leading-tight">
              SEO em 2025: O Guia Completo para Dominar os Mecanismos de Busca
            </h1>
            <p className="text-gray-300 mb-8">Publicado em 20 de Junho de 2025 | Atualizado em 25 de Junho de 2025</p>
            
            <img 
              src="https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="SEO 2025 - Estratégias Avançadas" 
              className="w-full h-96 object-cover rounded-xl shadow-2xl mb-10"
              loading="lazy"
            />
            
            <p className="text-xl text-gray-300">
              O <strong className="text-gtgreen">SEO em 2025</strong> está mais dinâmico do que nunca. Com as constantes atualizações dos algoritmos dos buscadores, especialmente do Google, as estratégias que funcionavam há alguns anos já não são suficientes.
            </p>
          </header>

          <section className="mb-16 bg-dark-900/50 p-8 rounded-xl backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-gtgreen mb-8">1. Experiência do Usuário (UX) como Fator Decisivo</h2>
            
            <img 
              src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="UX e SEO em 2025" 
              className="float-right ml-8 mb-6 w-1/2 rounded-lg shadow-lg"
              loading="lazy"
            />
            
            <p className="text-gray-300 mb-6">O Google prioriza sites que oferecem <strong>experiências excepcionais</strong>. Isso inclui:</p>
            
            <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-300">
              <li><strong>Design intuitivo e responsivo</strong> para todos os dispositivos</li>
              <li><strong>Tempo de permanência no site</strong> (Engajamento do usuário)</li>
              <li><strong>Taxa de rejeição baixa</strong> (Menos de 40% ideal)</li>
              <li><strong>Navegação simplificada</strong> com arquitetura clara</li>
            </ul>
            
            <div className="bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
              <p className="font-semibold text-gtgreen mb-2">Dica da GT Marketing:</p>
              <p className="text-gray-300">Utilize ferramentas como <strong>Hotjar e Google Analytics 4</strong> para analisar o comportamento do usuário e melhorar continuamente sua experiência.</p>
            </div>
          </section>

          <section className="mb-16 bg-dark-900/50 p-8 rounded-xl backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-gtgreen mb-8">2. Conteúdo de Alta Autoridade (E-E-A-T)</h2>
            
            <img 
              src="https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Conteúdo de Alta Qualidade para SEO" 
              className="float-left mr-8 mb-6 w-1/2 rounded-lg shadow-lg"
              loading="lazy"
            />
            
            <p className="text-gray-300 mb-6">O Google valoriza <strong>Expertise, Experiência, Autoridade e Confiabilidade (E-E-A-T)</strong> mais do que nunca em 2025.</p>
            
            <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-300">
              <li><strong>Artigos aprofundados</strong> (3.000+ palavras com pesquisa detalhada)</li>
              <li><strong>Dados atualizados</strong> com fontes confiáveis e citações</li>
              <li><strong>Multimídia integrada</strong> (vídeos explicativos, infográficos, podcasts)</li>
              <li><strong>Respostas diretas</strong> a perguntas de busca com featured snippets</li>
            </ul>
            
            <p className="text-gray-300"><strong>Exemplo prático:</strong> Se você escreve sobre "melhores estratégias de marketing digital", inclua estudos de caso reais, depoimentos de especialistas e dados comparativos.</p>
          </section>

          <section className="bg-green-700 rounded-xl p-10 text-white mt-16 shadow-xl">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Precisa de ajuda com SEO em 2025?</h2>
              <p className="mb-8 text-blue-100 text-lg">
                A GT Marketing tem uma equipe especializada em estratégias de SEO atualizadas para alavancar seu negócio nos mecanismos de busca.
              </p>
              <a 
                href="/contato" 
                className="inline-block bg-black text-gtgreen font-bold py-4 px-10 rounded-lg hover:bg-blue-50 transition duration-300 text-lg shadow-lg"
              >
                Fale com nossos especialistas
              </a>
            </div>
          </section>

          <SocialShareFooter />
        </article>
      </div>
    </div>
  );
};

const SocialShareFooter = () => {
  const [currentUrl, setCurrentUrl] = useState('');
  const articleTitle = "SEO em 2025: O Guia Completo para Dominar os Mecanismos de Busca";
  const shareText = "Confira este guia completo sobre SEO em 2025 da GT Marketing";

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const socialLinks = [
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(`${shareText} - ${articleTitle}`)}`
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(articleTitle)}&summary=${encodeURIComponent(shareText)}`
    },
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
    }
  ];

  return (
    <footer className="mt-16 pt-8 border-t border-gray-700">
      <p className="text-gray-400 text-sm">
        Compartilhe este artigo:
        {socialLinks.map((social, index) => (
          <span key={social.name}>
            {index > 0 && ' | '}
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-gtgreen hover:text-green-300 transition-colors duration-200"
              aria-label={`Compartilhar no ${social.name}`}
            >
              {social.name}
            </a>
          </span>
        ))}
      </p>
    </footer>
  );
};

export default Seo2025;