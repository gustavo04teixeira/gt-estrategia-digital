import { useState, useEffect } from 'react';

const MarketingDigitalClientes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-800 via-dark-600 to-gray-900 text-gray-100 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <article className="prose prose-invert max-w-none">
          <header className="mb-16">
            <h1 className="text-5xl font-extrabold text-white mb-6 leading-tight">
              Como Atrair Mais Clientes com Marketing Digital em 2025
            </h1>
            <p className="text-gray-300 mb-8">Publicado em 15 de Julho de 2025 | Atualizado em 20 de Julho de 2025</p>
            
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Estratégias de Marketing Digital para atrair clientes" 
              className="w-full h-96 object-cover rounded-xl shadow-2xl mb-10"
              loading="lazy"
            />
            
            <p className="text-xl text-gray-300">
              No cenário competitivo de 2025, <strong className="text-gtgreen">atrair clientes qualificados</strong> exige estratégias de marketing digital inteligentes e adaptadas às novas tendências. Descubra como transformar visitantes em clientes fiéis.
            </p>
          </header>

          <section className="mb-16 bg-dark-900/50 p-8 rounded-xl backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-gtgreen mb-8">1. Marketing de Conteúdo que Converte</h2>
            
            <img 
              src="https://images.pexels.com/photos/590045/pexels-photo-590045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Marketing de conteúdo estratégico" 
              className="float-right ml-8 mb-6 w-1/2 rounded-lg shadow-lg"
              loading="lazy"
            />
            
            <p className="text-gray-300 mb-6">O conteúdo continua sendo rei, mas em 2025 precisa ser:</p>
            
            <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-300">
              <li><strong>Hiperpersonalizado</strong> com IA generativa</li>
              <li><strong>Formatos interativos</strong> (quizzes, calculadoras)</li>
              <li><strong>Otimizado para busca por voz</strong></li>
              <li><strong>Distribuído em múltiplos canais</strong> (TikTok, WhatsApp Business)</li>
            </ul>
            
            <div className="bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
              <p className="font-semibold text-gtgreen mb-2">Case GT Marketing:</p>
              <p className="text-gray-300">Para um cliente do ramo imobiliário, desenvolvemos uma série de tours virtuais 360° com conteúdo personalizado por perfil de comprador, aumentando em 140% as conversões.</p>
            </div>
          </section>

          <section className="mb-16 bg-dark-900/50 p-8 rounded-xl backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-gtgreen mb-8">2. SEO Local Avançado</h2>
            
            <img 
              src="https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="SEO Local para negócios físicos" 
              className="float-left mr-8 mb-6 w-1/2 rounded-lg shadow-lg"
              loading="lazy"
            />
            
            <p className="text-gray-300 mb-6">Para negócios com endereço físico, o SEO local em 2025 requer:</p>
            
            <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-300">
              <li><strong>Perfil Google Business completo</strong> com vídeos</li>
              <li><strong>Respostas a perguntas frequentes</strong> no mapa</li>
              <li><strong>Reviews autênticos</strong> gerenciados com IA</li>
              <li><strong>Schema markup</strong> para eventos e promoções</li>
            </ul>
            
            <p className="text-gray-300"><strong>Dado relevante:</strong> 76% das pesquisas locais resultam em visita física em até 24h (Google 2025).</p>
          </section>

          <section className="mb-16 bg-dark-900/50 p-8 rounded-xl backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-gtgreen mb-8">3. Anúncios Inteligentes com IA</h2>
            
            <img 
              src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Publicidade com inteligência artificial" 
              className="float-right ml-8 mb-6 w-1/2 rounded-lg shadow-lg"
              loading="lazy"
            />
            
            <p className="text-gray-300 mb-6">A nova geração de anúncios em 2025:</p>
            
            <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-300">
              <li><strong>Automação de lances</strong> com machine learning</li>
              <li><strong>Anúncios em realidade aumentada</strong></li>
              <li><strong>Conversação direta</strong> via chatbots de anúncios</li>
              <li><strong>Relacionamento pós-venda</strong> automatizado</li>
            </ul>
            
            <div className="bg-green-900/30 p-6 rounded-lg border-l-4 border-green-500">
              <p className="font-semibold text-gtgreen mb-2">Estratégia GT:</p>
              <p className="text-gray-300">Criamos fluxos de remarketing com mensagens adaptativas que reduziram em 30% o CAC para e-commerces de moda.</p>
            </div>
          </section>

          <section className="bg-green-700 rounded-xl p-10 text-white mt-16 shadow-xl">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Quer resultados comprovados?</h2>
              <p className="mb-8 text-blue-100 text-lg">
                Nossa equipe na GT Marketing desenvolve estratégias personalizadas que aumentam em média 200% a geração de leads qualificados.
              </p>
              <a 
                href="/contato" 
                className="inline-block bg-black text-gtgreen font-bold py-4 px-10 rounded-lg hover:bg-gray-900 transition duration-300 text-lg shadow-lg"
              >
                Solicite uma consultoria gratuita
              </a>
            </div>
          </section>

          <SocialShareFooter 
            articleTitle="Como Atrair Mais Clientes com Marketing Digital em 2025"
            shareText="Descubra as estratégias mais eficazes para gerar clientes com marketing digital"
          />
        </article>
      </div>
    </div>
  );
};

interface SocialShareFooterProps {
  articleTitle: string;
  shareText: string;
}

const SocialShareFooter: React.FC<SocialShareFooterProps> = ({ articleTitle, shareText }) => {
  const [currentUrl, setCurrentUrl] = useState("");

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


export default MarketingDigitalClientes;