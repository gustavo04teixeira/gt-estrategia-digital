import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="text-primary-800 font-heading font-bold text-2xl">
            <span className="text-gtgreen">GT </span>
            <span className="text-white">Estratégia Digital</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/servicos" className={({ isActive }) => 
            `text-sm font-medium transition-colors ${isActive 
              ? 'text-gtgreen' 
              : isScrolled ? 'text-white hover:text-gtgreen' : 'text-white hover:text-gtgreen'
            }`
          }>
            Serviços
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => 
            `text-sm font-medium transition-colors ${isActive 
              ? 'text-gtgreen' 
              : isScrolled ? 'text-white hover:text-gtgreen' : 'text-gray-100 hover:text-gtgreen'
            }`
          }>
            Portfólio
          </NavLink>
          
          <NavLink to="/sobre" className={({ isActive }) => 
            `text-sm font-medium transition-colors ${isActive 
              ? 'text-gtgreen' 
              : isScrolled ? 'text-white hover:text-gtgreen' : 'text-gray-100 hover:text-gtgreen'
            }`
          }>
            Sobre
          </NavLink>
          <Link to="/contato" className="btn-primary bg-gtgreen text-black">
            Fale Conosco <ArrowRight size={16} className="ml-2 text-black" />
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-gtgreen' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-gtgreen' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `py-2 px-4 text-gray-800 rounded-md ${isActive ? 'bg-primary-50 text-gtgreen' : 'hover:bg-gray-100'}`
              }
              onClick={toggleMenu}
            >
              Início
            </NavLink>
            <NavLink 
              to="/servicos" 
              className={({ isActive }) => 
                `py-2 px-4 text-gray-800 rounded-md ${isActive ? 'bg-primary-50 text-gtgreen' : 'hover:bg-gray-100'}`
              }
              onClick={toggleMenu}
            >
              Serviços
            </NavLink>
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => 
                `py-2 px-4 text-gray-800 rounded-md ${isActive ? 'bg-primary-50 text-gtgreen' : 'hover:bg-gray-100'}`
              }
              onClick={toggleMenu}
            >
              Portfólio
            </NavLink>
            
            <NavLink 
              to="/sobre" 
              className={({ isActive }) => 
                `py-2 px-4 text-gray-800 rounded-md ${isActive ? 'bg-primary-50 text-gtgreen' : 'hover:bg-gray-100'}`
              }
              onClick={toggleMenu}
            >
              Sobre
            </NavLink>
            <Link 
              to="/contato" 
              className="btn-primary w-full justify-center"
              onClick={toggleMenu}
            >
              Fale Conosco <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
