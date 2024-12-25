import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white font-bold text-xl mb-6 md:mb-0">
            Igor Menezes
          </div>
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="https://instagram.com/" className="text-white hover:text-gray-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="mailto:contato@igormenezes.com" className="text-white hover:text-gray-300">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://wa.me/SEUNUMERO" className="text-white hover:text-gray-300">
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>Atendimento exclusivamente online</p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Igor Menezes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}