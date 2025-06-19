import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Search, ChevronDown, Phone, User, Menu as MenuIcon, X, ArrowRight, ChevronRight, Home, Building2, Calendar, Info, ChevronLeft } from 'lucide-react';

const services = [
  {
    category: "Infraestrutura e Conectividade",
    icon: "",
    links: [
      { name: "Fibra Óptica", url: "/fibra-optica", description: "Internet de alta velocidade com tecnologia de ponta" },
      { name: "V-Sat", url: "/v-sat", description: "Conectividade via satélite para áreas remotas" },
      { name: "Micro-Onda", url: "/micro-onda", description: "Solução rápida e eficiente para sua empresa" },
      { name: "VPN", url: "/vpn", description: "Segurança e privacidade para sua rede" },
      { name: "Infraestrutura de Rede", url: "/infraestrutura-rede", description: "Soluções completas de infraestrutura" },
      { name: "Voz Fixa", url: "/voz-fixa", description: "Comunicação clara e confiável" }
    ],
  },
  {
    category: "Serviços Digitais",
    icon: "",
    links: [
      { name: "Data Center", url: "/streaming/filmes", description: "Infraestrutura de alta disponibilidade" },
      { name: "Serviço de Hosting", url: "/streaming/series", description: "Hospedagem segura e escalável" },
      { name: "Serviço de Email", url: "/streaming/esportes", description: "Email corporativo profissional" },
      { name: "Automação e Segurança", url: "/streaming/esportes", description: "Soluções inteligentes de segurança" },
      { name: "Serviços Web", url: "/streaming/esportes", description: "Desenvolvimento web personalizado" },
      { name: "Consultorias", url: "/streaming/esportes", description: "Consultoria especializada em TI" },
    ],
  },
  {
    category: "Cyber Segurança",
    icon: "",
    links: [
      { name: "Segurança Aplicacional", url: "/seguranca", description: "Proteção avançada para suas aplicações" },
      { name: "Segurança de Rede", url: "/seguranca", description: "Defesa completa da sua infraestrutura" },
      { name: "Análise Forense", url: "/seguranca", description: "Investigação e prevenção de incidentes" },
      { name: "Segurança Endpoint", url: "/seguranca", description: "Proteção em todos os dispositivos" },
      { name: "Segurança de Dados", url: "/seguranca", description: "Proteção e conformidade de dados" },
      { name: "Treinamento", url: "/seguranca", description: "Capacitação em segurança digital" },
    ],
  },
];

const leftNavItems = [
  { name: "Serviços & Produtos", url: "#", icon: <ChevronDown className="h-4 w-4" />, isMegaMenu: true },
  { name: "Quem Somos", url: "/quemsomos", icon: <Info className="h-5 w-5" /> },
  { name: "Eventos", url: "/eventos", icon: <Calendar className="h-5 w-5" /> },
];

const rightNavItems = [
  { name: "Empresas", url: "/", icon: <Building2 className="h-5 w-5" /> },
  { name: "Residencial", url: "/residencial", icon: <Home className="h-5 w-5" /> },
];

function MegaMenuContent({ services, activeCategory, setActiveCategory, onClose }) {
  return (
    <div className="absolute top-full bg-white shadow-xl rounded-lg p-8 flex gap-12 z-50 min-w-[800px] animate-fadeScale mt-2">
      <div className="flex gap-8 w-full">
        {/* Categories */}
        <div className="w-64 space-y-2">
          {services.map((service, index) => (
            <button
              key={service.category}
              onClick={() => setActiveCategory(index)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 hover-lift ${
                activeCategory === index
                  ? 'bg-blue-50 text-blue-600 shadow-sm'
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl transform transition-transform duration-300 hover:scale-110">{service.icon}</span>
                <span className="font-medium">{service.category}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Links */}
        <div className="flex-1">
          {activeCategory !== null ? (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{services[activeCategory].icon}</span>
                  <h3 className="text-xl font-semibold text-blue-800">
                    {services[activeCategory].category}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveCategory(null)}
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-300 p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {services[activeCategory].links.map((link, index) => (
                  <Link
                    key={link.url}
                    to={link.url}
                    className="group p-4 rounded-lg hover:bg-blue-50 transition-all duration-300 hover-lift border border-gray-100"
                    onClick={onClose}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {link.name}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1 group-hover:text-gray-700 transition-colors duration-300">
                          {link.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-all duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full space-y-4 py-8">
              <p className="text-gray-500 text-center text-lg">
                Selecione uma categoria para explorar nossos serviços
              </p>
              <p className="text-sm text-gray-400 text-center max-w-md">
                Temos soluções completas para sua empresa, desde infraestrutura até segurança digital
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MobileMenu() {
  const [activeSection, setActiveSection] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleBack = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveSection(null);
      setIsAnimating(false);
    }, 300);
  };

  const filteredServices = services.map(service => ({
    ...service,
    links: service.links.filter(link => 
      link.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(service => service.links.length > 0);

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto animate-slideIn">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b p-4 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <Link to="/" className="flex items-center hover-lift">
            <img src="/logo.png" alt="Multitel" className="h-8" />
          </Link>
          <button 
            onClick={handleBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300 active-scale"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar serviços..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeSection === null ? (
          <div className="space-y-6 animate-fadeIn">
            {/* Main Navigation */}
            <div className="space-y-2">
              {leftNavItems.map((item, index) => (
                <Link
                  key={item.url}
                  to={item.url}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 hover-lift"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-blue-600">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>

            {/* Services */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold mb-2">Serviços & Produtos</h3>
              {services.map((service, index) => (
                <button
                  key={service.category}
                  onClick={() => setActiveSection(index)}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 hover-lift"
                  style={{ animationDelay: `${(index + leftNavItems.length) * 50}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl transform transition-transform duration-300 hover:scale-110">{service.icon}</span>
                    <span className="font-medium">{service.category}</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-8">
              <Link
                to="/contacto"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover-lift active-scale"
              >
                <Phone className="h-5 w-5" />
                Fale Conosco
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-4 animate-fadeIn">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-all duration-300 hover-lift"
            >
              <ChevronLeft className="h-5 w-5" />
              Voltar
            </button>
            
            <h2 className="text-xl font-semibold mb-4">
              {services[activeSection].category}
            </h2>

            <div className="space-y-2">
              {services[activeSection].links.map((link, index) => (
                <Link
                  key={link.url}
                  to={link.url}
                  className="block p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 hover-lift"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <h3 className="font-medium text-gray-900">{link.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{link.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Menu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const megaMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        handleMegaMenuClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMegaMenuClose = () => {
    setMegaMenuOpen(false);
    setActiveCategory(null);
  };

  const handleMegaMenuToggle = () => {
    setMegaMenuOpen(!megaMenuOpen);
    if (!megaMenuOpen) {
      setActiveCategory(null);
    }
  };

  return (
    <>
      <div className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        {/* Top Navigation */}
        <nav className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center hover-lift">
                <img src="/logo.png" alt="Multitel" className="h-8" />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center justify-between flex-1 px-8">
                {/* Left Navigation */}
                <div className="flex items-center space-x-8">
                  {leftNavItems.map((item, index) => (
                    <div key={item.url} className="relative" ref={item.isMegaMenu ? megaMenuRef : null}>
                      {item.isMegaMenu ? (
                        <button
                          onClick={handleMegaMenuToggle}
                          className="flex items-center gap-2 text-gray-900 hover:text-blue-600 transition-all duration-300 relative group"
                        >
                          <span className="relative">
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                          </span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${megaMenuOpen ? 'rotate-180' : ''}`} />
                        </button>
                      ) : (
                        <Link
                          to={item.url}
                          className="text-gray-900 hover:text-blue-600 transition-all duration-300 relative group"
                        >
                          {item.name}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                      )}
                      {item.isMegaMenu && megaMenuOpen && (
                        <MegaMenuContent
                          services={services}
                          activeCategory={activeCategory}
                          setActiveCategory={setActiveCategory}
                          onClose={handleMegaMenuClose}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Right Navigation */}
                <div className="flex items-center space-x-8">
                  {rightNavItems.map((item) => (
                    <Link
                      key={item.url}
                      to={item.url}
                      className="text-gray-900 hover:text-blue-600 transition-all duration-300 relative group"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  ))}
                  <Link 
                    to="/contacto" 
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 hover-lift active-scale flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Fale Conosco
                  </Link>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-all duration-300 active-scale"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Search Bar */}
        {searchOpen && (
          <div className="bg-white border-b animate-slideDown">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="O que você está procurando?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <MobileMenu />}
    </>
  );
}

export default Menu;
