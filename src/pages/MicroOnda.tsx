import React from 'react';
import { Link } from 'react-router-dom';
import { Radio, Zap, Timer, Signal } from 'lucide-react';

function MicroOnda() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Enlaces Micro-Onda</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Conexões ponto a ponto de alta capacidade para sua empresa
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
              Solicitar Projecto
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
                <Radio className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Alta Frequência</h3>
              <p className="text-gray-600">Bandas licenciadas de 6 a 23 GHz</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Alta Capacidade</h3>
              <p className="text-gray-600">Até 1 Gbps full duplex</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Timer className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Baixa Latência</h3>
              <p className="text-gray-600">Menos de 1ms de latência</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Signal className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Alta Disponibilidade</h3>
              <p className="text-gray-600">99.99% de uptime</p>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Soluções</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Backhaul</h3>
              <p className="text-gray-600 mb-6">Ideal para interligação de redes e transporte de dados em alta velocidade</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600">✓</span>
                  </span>
                  Alta Capacidade
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600">✓</span>
                  </span>
                  Frequência Licenciada
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600">✓</span>
                  </span>
                  Redundância
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Saiba Mais
              </button>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Last Mile</h3>
              <p className="text-gray-600 mb-6">Conexão dedicada de última milha para empresas e provedores</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600">✓</span>
                  </span>
                  Baixa Latência
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600">✓</span>
                  </span>
                  SLA Garantido
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600">✓</span>
                  </span>
                  Monitoramento 24x7
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Saiba Mais
              </button>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Redundância</h3>
              <p className="text-gray-600 mb-6">Backup para links críticos com alta disponibilidade</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600">✓</span>
                  </span>
                  Failover Automático
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600">✓</span>
                  </span>
                  Alta Disponibilidade
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600">✓</span>
                  </span>
                  Suporte Premium
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Solicite um Projecto</h2>
            <p className="text-xl text-gray-600 mb-8">
              Nossa equipe técnica está pronta para desenvolver a melhor solução para sua empresa
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
              <textarea
                placeholder="Descreva suas necessidades"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
                Enviar Solicitação
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MicroOnda;