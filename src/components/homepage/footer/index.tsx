import { Wifi, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

function Seguranca() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 py-8 mt-16 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              <img src='./logo_white.png' width="200" />
              </span>
            </div>
            <p className="text-white mb-4">
            Experiência no mercado empresarial, assentando na convergência de telecomunicações e tecnologia de informação.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/multitel.co.ao" className="text-white hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/multitel.ao/" className="text-white hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/multitelao/posts/?feedView=all" className="text-white hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Uteis</h3>
            <ul className="space-y-2text-white">
              <li><a href="/feedback" className="text-white hover:text-white transition-colors">Sugestões e Elogios</a></li>
              <li><a href="#" className="text-white hover:text-white transition-colors">Acção Social</a></li>
              <li><a href="#" className="text-white hover:text-white transition-colors">Carreiras</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-white transition-colors">Centro de Ajuda</a></li>
              <li><a href="#" className="text-white hover:text-white transition-colors">Guia de Instalação</a></li>
              <li><a href="#" className="text-white hover:text-white transition-colors">Portal do Cliente</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-indigo-400 mr-2 mt-0.5" />
                <span className="text-white">(+244) 222 704 200</span>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-indigo-400 mr-2 mt-0.5" />
                <span className="text-white">geral@multitel.co.ao</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-indigo-400 mr-2 mt-0.5" />
                <span className="text-white">
                  Rua Cristiano dos Santos, nº 5 <br />Bairro Miramar, Distrito Urbano<br />do Sambizanga
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm">              
              <p>{new Date().getFullYear()} | Todos os Direitos Reservados à <a href='/'>Multitel</a>.</p>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Acceptable Use Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Seguranca;