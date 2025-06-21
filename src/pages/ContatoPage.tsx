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
      <section className="pt-32 pb-12 bg-gradient-to-r from-dark-700 to-dark-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gtgreen">Fale Conosco</h1>
            <p className="text-xl text-gray-100">
              Entre em contato para saber como podemos ajudar seu negócio a alcançar o próximo nível.
            </p>
          </div>
        </div>
      </section>
      
      <ContactForm />
      
    </>
  );
};

export default ContatoPage;