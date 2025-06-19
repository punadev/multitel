import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Headphones, Settings, Users } from 'lucide-react';

function VozFixa() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Telefonia Fixa Empresarial</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comunicação empresarial de alta qualidade com recursos avançados
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">PABX Virtual</h3>
              <p className="text-gray-600">Central telefônica na nuvem</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">URA</h3>
              <p className="text-gray-600">Atendimento automático personalizado</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ramais</h3>
              <p className="text-gray-600">Ramais ilimitados</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Conferência</h3>
              <p className="text-gray-600">Salas de conferência</p>
            </div>
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Planos Empresariais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Básico</h3>
              <div className="text-4xl font-bold mb-6">99 AOA<span className="text-lg text-gray-600">/mês</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600">✓</span>
                  </span>
                  5 Ramais
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600">✓</span>
                  </span>
                  URA Básica
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600">✓</span>
                  </span>
                  Suporte 8x5
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contratar
              </button>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 transform scale-105 border-2 border-blue-600">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">Mais Popular</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Profissional</h3>
              <div className="text-4xl font-bold mb-6">199 AOA<span className="text-lg text-gray-600">/mês</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600">✓</span>
                  </span>
                  15 Ramais
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600">✓</span>
                  </span>
                  URA Avançada
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600">✓</span>
                  </span>
                  Gravação de Chamadas
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600">✓</span>
                  </span>
                  Suporte 24x7
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contratar
              </button>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
              <div className="text-4xl font-bold mb-6">399 AOA<span className="text-lg text-gray-600">/mês</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600">✓</span>
                  </span>
                  Ramais Ilimitados
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600">✓</span>
                  </span>
                  URA Personalizada
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600">✓</span>
                  </span>
                  API de Integração
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600">✓</span>
                  </span>
                  Suporte Premium
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contratar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Fale com um Especialista</h2>
            <p className="text-xl text-gray-600 mb-8">
              Tire suas dúvidas e descubra o melhor plano para sua empresa
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nome da Empresa"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="E-mail Corporativo"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Telefone"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
                Solicitar Contato
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VozFixa;