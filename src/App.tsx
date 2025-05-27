import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import ServicosPage from './pages/ServicosPage';
import SobrePage from './pages/SobrePage';
import ContatoPage from './pages/ContatoPage';


const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="servicos" element={<ServicosPage />} />
          <Route path="sobre" element={<SobrePage />} />
          <Route path="contato" element={<ContatoPage />} />
        </Route>
      </Routes>
      
      <a 
        href="https://wa.me/5548991740063?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20marketing%20digital." 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-button"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </>
  );
};

export default App;