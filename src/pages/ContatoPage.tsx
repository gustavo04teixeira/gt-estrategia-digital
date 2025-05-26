import React, { useEffect } from 'react';
import ContactForm from '../components/contact/ContactForm';

const ContatoPage: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'Contato - DigiMarketing';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-to-r from-primary-900 to-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Fale Conosco</h1>
            <p className="text-xl text-gray-100">
              Entre em contato para saber como podemos ajudar seu negócio a alcançar o próximo nível.
            </p>
          </div>
        </div>
      </section>
      
      <ContactForm />
      
      <section className="py-12">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Google Maps Embed would go here in a real implementation */}
            <div className="bg-gray-200 h-96 w-full flex items-center justify-center">
              <p className="text-gray-500">Mapa de localização estaria aqui</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContatoPage;