import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // This would be a real API endpoint in production
      // await axios.post('/api/contact', formData);
      
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (err) {
      setError('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section bg-gradient-to-r from-dark-600 to-dark-800">
      <div className="container-custom">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-gtgreen">Entre em Contato</h2>
          <p className='text-white'>Estamos prontos para responder suas dúvidas e ajudar a impulsionar seu negócio.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 bg-gradient-to-r from-dark-900 to-green-900">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className=" rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-100">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-dark-900 p-3 border border-white rounded-full mr-4">
                    <MapPin size={20} className="text-gtgreen" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-100">Endereço</h4>
                    <p className="text-gray-300 mt-1">Florianópolis - SC, Brasil</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dark-900 p-3 border border-white rounded-full mr-4">
                    <Mail size={20} className="text-gtgreen" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-100">Email</h4>
                    <a href="mailto:contato@digimarketing.com.br" className="text-green-600 hover:text-green-900 mt-1 block">
                      gtestrategiadigital@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dark-900 p-3 border border-white rounded-full mr-4">
                    <Phone size={20} className="text-gtgreen" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-100">Telefone</h4>
                    <a href="tel:+5548991740063" className="text-green-600 hover:text-green-900 mt-1 block">
                      +55 48 99139 - 8983
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-medium text-gray-100 mb-4">Horário de Atendimento</h4>
                <p className="text-dark-200">Segunda a Sexta: 09:00 - 18:00</p>
                <p className="text-dark-200">Sábado: 09:00 - 13:00</p>
              </div>
            </div>
          </div>
          
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-r from-dark-900 to-green-900 rounded-lg shadow-md p-8">
              {success ? (
                <motion.div 
                  className="flex flex-col items-center justify-center text-center h-full py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-green-100 p-3 rounded-full mb-6">
                    <CheckCircle size={48} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-200 mb-4">Mensagem Enviada!</h3>
                  <p className="text-gray-200 max-w-md mb-8">
                    Obrigado por entrar em contato conosco. Nossa equipe responderá sua mensagem em breve.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="btn-primary"
                  >
                    Enviar nova mensagem
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
                        Nome Completo*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 text-black bg-gray-300 border border-dark-900 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                        Email* 
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 text-black bg-gray-300 border border-dark-900 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-1">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-black bg-gray-300 border border-dark-900 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-200 mb-1">
                        Serviço de Interesse
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-black bg-gray-300 border border-dark-900 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="SEO">SEO</option>
                        <option value="Mídia Paga">Mídia Paga</option>
                        <option value="Redes Sociais">Gestão de Redes Sociais</option>
                        <option value="Marketing de Conteúdo">Marketing de Conteúdo</option>
                        <option value="Email Marketing">Email Marketing</option>
                        <option value="Desenvolvimento Web">Desenvolvimento Web</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
                      Mensagem*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 text-black py-2 bg-gray-300 border border-dark-900 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    ></textarea>
                  </div>
                  
                  {error && (
                    <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-md">
                      {error}
                    </div>
                  )}
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="btn-primary"
                      disabled={loading}
                    >
                      {loading ? (
                        <>Enviando...</>
                      ) : (
                        <>Enviar Mensagem <Send size={16} className="ml-2" /></>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;