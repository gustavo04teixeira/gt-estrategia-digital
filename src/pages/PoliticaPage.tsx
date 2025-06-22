import React from 'react';

const PoliticaPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-dark-900 via-dark-600 to-dark-500 min-h-screen text-gray-100 pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-white">Política de Privacidade</h1>

        <p className="mb-4 text-gray-200">
          Esta Política de Privacidade descreve como a GT Estratégia Digital coleta, usa, protege e compartilha as informações pessoais dos usuários ao utilizar nosso site.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gtgreen">1. Informações que Coletamos</h2>
        <p className="mb-4 text-gray-200">
          Podemos coletar informações como nome, e-mail, número de telefone e outras informações fornecidas voluntariamente por você através de formulários ou interações no site.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gtgreen">2. Uso das Informações</h2>
        <p className="mb-4 text-gray-200">
          As informações coletadas são utilizadas para fornecer e melhorar nossos serviços, responder a solicitações, enviar comunicações e garantir a melhor experiência possível para o usuário.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gtgreen">3. Compartilhamento de Dados</h2>
        <p className="mb-4 text-gray-200">
          Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para prestação de serviços contratados, cumprimento de obrigações legais ou com seu consentimento explícito.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gtgreen">4. Cookies e Tecnologias de Rastreamento</h2>
        <p className="mb-4 text-gray-200">
          Utilizamos cookies para melhorar a navegação e a experiência do usuário. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gtgreen">5. Segurança</h2>
        <p className="mb-4 text-gray-200">
          Adotamos medidas de segurança apropriadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gtgreen">6. Seus Direitos</h2>
        <p className="mb-4 text-gray-200">
          Você tem o direito de acessar, corrigir ou excluir seus dados pessoais. Para isso, entre em contato conosco pelo e-mail <a href="mailto:gtestrategiadigital@gmail.com" className="text-gtgreen underline hover:text-gtgreen">gtestrategiadigital@gmail.com</a>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-gtgreen">7. Alterações nesta Política</h2>
        <p className="mb-4 text-gray-200">
          Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página com frequência para estar sempre informado.
        </p>

        <p className="text-sm text-gray-400 mt-10 italic">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>
      </div>
    </div>
  );
};

export default PoliticaPage;
