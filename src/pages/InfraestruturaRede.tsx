import React from 'react';
import { Link } from 'react-router-dom';
import { Network, Server, Cpu, Router } from 'lucide-react';

function InfraestruturaRede() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Infraestrutura de Rede</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Soluções completas de infraestrutura para redes empresariais de alto desempenho
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
              Solicitar Consultoria
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
                <Network className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cabeamento Estruturado</h3>
              <p className="text-gray-600">Instalação profissional de redes com certificação</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Servidores</h3>
              <p className="text-gray-600">Configuração e manutenção de servidores</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Router className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Roteamento</h3>
              <p className="text-gray-600">Equipamentos de rede de alta performance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Switches</h3>
              <p className="text-gray-600">Switches gerenciáveis de última geração</p>
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
              <select name="" id="" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Banca</option>
                <option value="">PME's</option>
                <option value="">Oil and Gas</option>
              </select>
              <input
                type="email"
                placeholder="E-mail"
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

export default InfraestruturaRede;