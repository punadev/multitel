import React, { useRef, useState, useEffect } from 'react';
import {Zap, CreditCard, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ServiceModal } from './ServiceModal';

export function Solutions() {
  const [activeCard, setActiveCard] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const containerRef = useRef(null);

  const scrollToCard = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: <Zap className="w-10 h-10 mx-auto mb-4 text-blue-600" />,
      title: "Conectividade",
      description: "Ligue a sua empresa ao futuro. Conexões rápidas, seguras e sem limites.",
      benefits: [
        "Internet de alta velocidade com até 1Gbps",
        "Conexão dedicada para sua empresa",
        "Suporte técnico 24/7",
        "Garantia de uptime de 99.9%",
        "Instalação profissional e rápida"
      ],
      advantages: [
        "Aumento da produtividade da equipe",
        "Melhor experiência para seus clientes",
        "Suporte a múltiplos dispositivos",
        "Segurança reforçada",
        "Escalabilidade conforme sua necessidade"
      ]
    },
    {
      icon: <CheckCircle className="w-10 h-10 mx-auto mb-4 text-blue-600" />,
      title: "Inovação",
      description: "Ideias que viram soluções, soluções que fazem o seu negócio crescer.",
      benefits: [
        "Consultoria especializada em transformação digital",
        "Implementação de tecnologias emergentes",
        "Treinamento da equipe",
        "Suporte contínuo",
        "Análise de resultados"
      ],
      advantages: [
        "Processos mais eficientes",
        "Redução de custos operacionais",
        "Diferencial competitivo",
        "Adaptação ao mercado digital",
        "Crescimento sustentável"
      ]
    },
    {
      icon: <CreditCard className="w-10 h-10 mx-auto mb-4 text-purple-600" />,
      title: "Cyber Segurança",
      description: "Proteção forte para os dados e o futuro da sua empresa.",
      benefits: [
        "Proteção contra ataques cibernéticos",
        "Monitoramento 24/7",
        "Backup automático de dados",
        "Firewall avançado",
        "Atualizações de segurança regulares"
      ],
      advantages: [
        "Dados da empresa protegidos",
        "Conformidade com LGPD",
        "Prevenção de perdas financeiras",
        "Confiança dos clientes",
        "Reputação empresarial preservada"
      ]
    }
  ];

  const streamingServices = [
    {
      title: "Fibra Enterprise",
      description: "1 Gbps (com possibilidade de expansão)",
      image: "Fiber.jpg",
      promotion: "Grandes Empresas e Grupos Empresariais",
      benefits: [
        "Link dedicado com SLA de 99,9%",
        "Segurança de rede gerida (firewall, antivírus empresarial)",
        "Apoio técnico personalizado com gestor de conta"
      ],
      advantages: [
        "Perfeito para operações com múltiplos departamentos e sedes",
        "Tráfego prioritário para videoconferências e cópias de segurança na nuvem",
        "Serviço escalável conforme as necessidades da empresa"
      ]
    },
    {
      title: "Pro Office",
      description: "Soluções completa para Pequenas Empresas",
      image: "./teste_img.jpg",
      benefits: [
        "Wi-Fi de alto desempenho incluído",
        "IP dinâmico com opção de IP fixo",
        "Apoio técnico prioritário com tempo de resposta até 6 horas"
      ],
      advantages: [
        "Recomendado para escritórios com até 10 colaboradores",
        "Permite utilização simultânea de plataformas online, software de facturação, CRM, etc.",
        "Internet móvel (4G) incluída como backup"
      ]
    },
    {
      title: "SmartBiz",
      description: "Empresas em Crescimento",
      image: "./webb.jpg",
      benefits: [
        "Velocidade simétrica (download e upload iguais)",
        "IP fixo incluído",
        "Apoio técnico 24 horas por dia, todos os dias"
      ],
      advantages: [
        "Ideal para equipas híbridas (presencial e remoto)",
        "Perfeito para atendimento ao cliente online, e-commerce e servidores internos",
        "Atendimento técnico rápido, com visitas presenciais sempre que necessário"
      ]
    },
    {
      title: "PowerNet",
      description: "Empresas de Médio Porte",
      image: "./speed.jpg",
      benefits: [
        "Link dedicado com largura de banda garantida",
        "Gestão remota da rede incluída",
        "Monitorização contínua 24h/7"
      ],
      advantages: [
        "Ideal para ambientes com muitos equipamentos ligados",
        "Estabilidade garantida para sistemas de gestão (ERP), chamadas VoIP e plataformas internas",
        "Consultoria técnica trimestral para optimização da rede"
      ]
    },
    {
      title: "StartUP",
      description: "Microempresas e Startups",
      image: "./ServicessFiber.jpg",
      benefits: [
        "Conexão estável para pequenas equipes (até 5 pessoas)",
        "Instalação gratuita",
        "Suporte técnico 8h-20h (dias úteis)"
      ],
      advantages: [
        "Ideal para videoconferências, redes sociais, e uso de ferramentas como Google Workspace e Zoom",
        "Preço acessível e plano mensal flexível",
        "Opção de upgrade conforme crescimento da empresa"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-12 items-start"
        >
          <div className="lg:w-1/2 flex items-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-5xl mt-4 leading-tight"
            >
              Soluções <span className="text-blue-900 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">que mudam tudo</span>
            </motion.h1>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center p-6 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {item.icon}
                <p className="font-semibold text-lg mb-3">{item.title}</p>
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Streaming Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl mt-2 leading-tight">
              <span className="text-blue-800">A sua empresa precisa de</span>
              <br />
              <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                mais Fibras para crescer
              </span>
            </h2>
          </motion.div>

          {/* Navigation Buttons and Cards Container */}
          <div className="relative mt-16">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollToCard('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-blue-50 p-4 rounded-full shadow-lg transition-all border border-gray-100"
            >
              <ChevronLeft className="w-6 h-6 text-blue-800" />
            </motion.button>

            <div
              ref={containerRef}
              className="flex overflow-x-auto gap-8 pb-8 scroll-smooth scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {streamingServices.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex-none w-[350px] h-[450px] rounded-2xl p-8 text-white shadow-xl cursor-pointer relative overflow-hidden"
                  onClick={() => setSelectedService(service)}
                >
                  {service.image ? (
                    <div className="absolute inset-0 w-full h-full">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0" />
                    </div>
                  ) : (
                    <div className="absolute inset-0  from-blue-900 to-blue-800" />
                  )}
                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className="text-center text-2xl font-medium mb-2">{service.title}</h3>
                    {service.promotion && (
                      <p className="text-center text-blue-700 font-medium mb-4">{service.promotion}</p>
                    )}
                    <p className="text-center text-gray-200 mb-6 flex-grow">{service.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-blue-700 text-white py-4 rounded-full hover:bg-blue-500 transition-colors font-semibold shadow-lg"
                    >
                      Consultar Agora
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollToCard('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-blue-50 p-4 rounded-full shadow-lg transition-all border border-gray-100"
            >
              <ChevronRight className="w-6 h-6 text-blue-800" />
            </motion.button>
          </div>
        </div>
      </section>

      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </div>
  );
}
