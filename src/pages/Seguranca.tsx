import React from 'react';
import { 
  Cloud, 
  Smartphone, 
  Users, 
  Shield, 
  Monitor, 
  History, 
  Database, 
  Search, 
  Terminal, 
  GraduationCap,
  Code,
  CheckSquare,
  BarChart,
  FileText,
  CloudCog,
  Lock,
  Bug,
  AlertTriangle,
  ChevronRight
} from 'lucide-react';

function ServiceCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Seguranca() {
  const services = [
    {
      icon: Cloud,
      title: "Segurança em Nuvem",
      description: "Proteção completa para os seus activos na nuvem, garantindo conformidade e segurança em ambientes AWS, Azure e Google Cloud."
    },
    {
      icon: Smartphone,
      title: "Segurança Mobile",
      description: "Soluções de segurança feitas à medida para dispositivos móveis, protegendo os dados da empresa em smartphones e tablets."
    },
    {
      icon: Users,
      title: "Outsourcing",
      description: "Equipa experiente em segurança da informação pronta para si, ajudando a cortar custos e a aumentar a eficiência."
    },
    {
      icon: Shield,
      title: "Segurança de Rede",
      description: "Proteção total da infra-estrutura de rede, com firewalls, IDS/IPS e monitoramento 24/7."
    },
    {
      icon: Monitor,
      title: "Segurança Endpoint",
      description: "Proteção avançada para todos os dispositivos, prevenindo ameaças e malwares em tempo real."
    },
    {
      icon: History,
      title: "Plano de Recuperação Tecnológico",
      description: "Estratégias e soluções para manter o seu negócio a funcionar mesmo em caso de incidentes de segurança."
    },
    {
      icon: Database,
      title: "Segurança de Dados",
      description: "Proteção e gestão de dados sensíveis, assegurando conformidade com a LGPD e outras regulamentações."
    },
    {
      icon: Search,
      title: "Análise Forense",
      description: "Investigação aprofundada de incidentes de segurança, com recolha e análise de evidências digitais."
    },
    {
      icon: Terminal,
      title: "Pentesting",
      description: "Testes de penetração completos para identificar falhas antes que sejam exploradas."
    },
    {
      icon: GraduationCap,
      title: "Treinamento",
      description: "Formação em segurança da informação para a sua equipa, promovendo uma cultura de proteção digital."
    },
    {
      icon: Code,
      title: "Segurança Aplicacional",
      description: "Análise e proteção de aplicações web e móveis, garantindo um desenvolvimento seguro desde a base."
    },
    {
      icon: CheckSquare,
      title: "Criação e Avaliação de Controlos",
      description: "Implementação e avaliação de medidas de segurança alinhadas às melhores práticas do mercado."
    },
    {
      icon: BarChart,
      title: "Criação de Dashboards Interativos",
      description: "Visualização clara e interactiva de métricas de segurança para uma tomada de decisão bem informada."
    },
    {
      icon: FileText,
      title: "Criação de Normas e Políticas",
      description: "Criação de políticas de segurança à medida, alinhadas com as necessidades do seu negócio."
    },
    {
      icon: CloudCog,
      title: "Avaliação de Segurança na Cloud",
      description: "Análise aprofundada da segurança na nuvem, identificando riscos e recomendando melhorias."
    },
    {
      icon: Lock,
      title: "Soluções de Segurança da Informação",
      description: "Implementação de soluções de segurança da informação integradas e ajustadas à realidade do seu negócio."
    },
    {
      icon: Bug,
      title: "Testes de Penetração",
      description: "Avaliação detalhada de vulnerabilidades com testes de invasão controlados e éticos."
    },
    {
      icon: AlertTriangle,
      title: "Gestão de Riscos",
      description: "Identificação, análise e mitigação de riscos de segurança para proteger os seus activos essenciais."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white bg-center bg-cover"
        style={{
          backgroundImage: 'url("/cyber/cyber-security-concept-digital-art.jpg")',
          backgroundPosition: "cover"
        }}
      >
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Segurança da Informação Completa</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">Mantenha o seu negócio seguro com soluções avançadas e conformes.</p>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-blue-900 rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4">Pronto para reforçar a segurança do seu negócio?</h2>
            <p className="text-blue-100 mb-8 text-lg">Fale com a nossa equipa e encontre as melhores soluções para proteger o seu negócio.</p>
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold flex items-center mx-auto hover:bg-blue-50 transition-colors">
              Solicitar Consultoria
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Seguranca;