import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { pageview } from './gtag';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import ServicosPage from './pages/ServicosPage';
import SobrePage from './pages/SobrePage';
import ContatoPage from './pages/ContatoPage';
import TermosPage from './pages/TermosPage';
import PoliticaPage from './pages/PoliticaPage';
import PortfolioPage from './pages/PortfolioPage';
import SiteAdvocacia from './pages/portfolio/SiteAdvocacia';
import EcommerceModa from './pages/portfolio/EcommerceModa';
import SeoClinica from './pages/portfolio/SeoClinica';
import RedesRestaurante from './pages/portfolio/RedesRestaurante';
import BlogPage from './pages/BlogPage';
import Seo2025 from './pages/blog/Seo2025'; 
import MarketingDigitalClientes from "./pages/blog/MarketingDigitalClientes";


const App: React.FC = () => {
  const location = useLocation(); // 👈 necessário para detectar mudança de rota

  useEffect(() => {
    pageview(location.pathname + location.search); // 👈 dispara o pageview
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="servicos" element={<ServicosPage />} />
          <Route path="sobre" element={<SobrePage />} />
          <Route path="contato" element={<ContatoPage />} />
          <Route path="termos-de-uso" element={<TermosPage />} />
          <Route path="politica-de-privacidade" element={<PoliticaPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="portfolio/site-advocacia" element={<SiteAdvocacia />} />
          <Route path="portfolio/campanha-ecommerce-moda" element={<EcommerceModa />} />
          <Route path="portfolio/seo-clinica-medica" element={<SeoClinica />} />
          <Route path="portfolio/redes-sociais-restaurante" element={<RedesRestaurante />} />
          <Route path="blog" element={<BlogPage />} />

          <Route path="blog/seo2025" element={<Seo2025 />} />
          <Route path="blog/marketing-digital-clientes" element={<MarketingDigitalClientes />} />
        </Route>
      </Routes>

      <a 
        href="https://wa.me/5548991398983?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20marketing%20digital." 
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
