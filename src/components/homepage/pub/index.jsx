import React from 'react';
import { Smartphone, Building2, Building, HomeIcon, Landmark, Factory, Megaphone } from 'lucide-react';
import Countmtl from "./../countmtl"

export function Pub() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="w-full h-[400px] bg-gray-100 flex items-center justify-center mb-20">
        <img 
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Hero banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Portfolio Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mt-2 leading-tight text-blue-800">
            Nossos Parceiros
          </h2>
          <p className="text-lg text-gray-600 mb-16 animate-fade-in-delay">
            Empresas que confiam em nossos serviços e fazem parte da nossa história de sucesso.
          </p>          
          
          {/* Client Logos Grid with Enhanced Styling */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {/* Partner Logo Card 1 */}
            <div className="group relative bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img 
                  src="./partners/cpc_africa.png" 
                  alt="CPC Africa"
                  className="object-contain w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>

            {/* Partner Logo Card 2 */}
            <div className="group relative bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img 
                  src="./partners/logo pgts.png" 
                  alt="PGTS"
                  className="object-contain w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>

            {/* Partner Logo Card 3 */}
            <div className="group relative bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img 
                  src="./partners/Logotipo sem fundo_ARCO BRANCO E LETERRINGpng...png" 
                  alt="Arco"
                  className="object-contain w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>

            {/* Partner Logo Card 4 */}
            <div className="group relative bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img 
                  src="./partners/Velonet_marca horizontal.png" 
                  alt="Velonet"
                  className="object-contain w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

