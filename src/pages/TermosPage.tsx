import React from 'react';

const TermosPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-dark-500 to-dark-900 min-h-screen text-gray-100 pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-white">Termos de Uso</h1>
        
        <p className="mb-4 text-gray-200">
          Bem-vindo ao site da GT Estratégia Digital. Ao acessar ou utilizar nossos serviços, você concorda com os termos e condições descritos abaixo. Se você não concorda com estes termos, por favor, não utilize nosso site.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gtgreen">1. Uso do Site</h2>
        <p className="mb-4 text-gray-200">
          Você se compromete a utilizar este site de forma legal e ética, respeitando as leis vigentes e os direitos da GT Estratégia Digital e de terceiros.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gtgreen">2. Propriedade Intelectual</h2>
        <p className="mb-4 text-gray-200">
          Todo o conteúdo presente neste site, incluindo textos, imagens, logotipos, ícones, vídeos e materiais gráficos, é de propriedade da GT Estratégia Digital ou de seus parceiros e é protegido por leis de direitos autorais.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gtgreen">3. Privacidade</h2>
        <p className="mb-4 text-gray-200">
          Suas informações pessoais serão tratadas com total confidencialidade e de acordo com nossa <a href="/politica-de-privacidade" className="text-gtgreen underline hover:text-gtgreen">Política de Privacidade</a>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gtgreen">4. Alterações nos Termos</h2>
        <p className="mb-4 text-gray-200">
          Podemos atualizar estes Termos de Uso periodicamente. As alterações entrarão em vigor assim que publicadas nesta página. Recomendamos que você reveja este conteúdo com frequência.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gtgreen">5. Contato</h2>
        <p className="mb-4 text-gray-200">
          Em caso de dúvidas sobre estes termos, entre em contato conosco pelo e-mail <a href="mailto:gtestrategiadigital@gmail.com" className="text-gtgreen underline hover:text-gtgreen">gtestrategiadigital@gmail.com</a>.
        </p>

        <p className="text-sm text-gray-400 mt-10 italic">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>
      </div>
    </div>
  );
};

export default TermosPage;
