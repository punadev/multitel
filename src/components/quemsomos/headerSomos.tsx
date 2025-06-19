import React from 'react';
import { Users, Target, Eye, Heart, Award, BookOpen, Gem, Coffee, Building2 } from 'lucide-react';

function HeaderSomos() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("/aboutme/angolatelecomunications.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">Quem Somos</h1>
            </div>
          </div>
        </div>
      </div>

      {/* História Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
            A MULTITEL Serviços de Telecomunicações, Lda é uma empresa angolana presente no mercado desde 1999, licenciada pelo INACOM para a prestação de serviços de comunicação de dados e Internet. Com sócios como a PT Ventures, Angola Telecom e BCI, tem como foco soluções empresariais, consultoria, manutenção e gestão de telecomunicações.  

            Comprometida com a evolução tecnológica e a satisfação dos clientes, aposta numa relação próxima e personalizada, garantindo suporte local e remoto. Conta com uma equipa qualificada e mais de 100 colaboradores, complementando os seus serviços com parceiros estratégicos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-gray-50 rounded-lg">
                <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">+54.643</h3>
                <p className="text-gray-600">Projectos Realizados</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">+25</h3>
                <p className="text-gray-600">Anos</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <Coffee className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">+1000</h3>
                <p className="text-gray-600">Clientes Satisfeitos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Target className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Missão</h3>
              <p className="text-gray-600 leading-relaxed">
              Contribuir para a inclusão digital e desenvolvimento das TICs no mercado através de soluções inovadoras e experiências de valor.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Eye className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Visão</h3>
              <p className="text-gray-600 leading-relaxed">
              Ser reconhecida como um provedor de serviços integrados de excelência em Telecomunicações, Tecnologias e sistemas de informação através de relações de confiança com os clientes e parceiros.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Heart className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Valores</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Gem className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-600">Inovação</span>
                </li>
                <li className="flex items-center">
                  <Award className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-600">Excelência</span>
                </li>
                <li className="flex items-center">
                  <Users className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-600">Proximidade com os clientes</span>
                </li>
                <li className="flex items-center">
                  <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-600">Responsabilidade Social</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cultura Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Nossa Cultura</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="/aboutme/2150690154.jpg" 
                  alt="Equipe trabalhando" 
                  className="rounded-lg shadow-lg mb-8"
                />
                <p className="text-gray-600 leading-relaxed">
                  Cultivamos um ambiente de trabalho colaborativo e dinâmico, onde cada membro da equipa é valorizado e incentivado a contribuir com as suas ideias e experiências únicas.
                </p>
              </div>
              <div>
                <img 
                  src="/aboutme/2149370170.jpg" 
                  alt="Reunião de equipe" 
                  className="rounded-lg shadow-lg mb-8"
                />
                <p className="text-gray-600 leading-relaxed">
                  Acreditamos que o sucesso vem da união de talentos diversos, do respeito mútuo e do compromisso com a excelência em cada projecto que realizamos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeaderSomos;