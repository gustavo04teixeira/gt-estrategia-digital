import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Página não encontrada - DigiMarketing';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-32">
      <div className="container-custom">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Página não encontrada</h2>
          <p className="text-gray-600 mb-8">
            A página que você está procurando não existe ou foi movida.
          </p>
          <Link to="/" className="btn-primary inline-flex items-center">
            <ArrowLeft size={18} className="mr-2" /> Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;