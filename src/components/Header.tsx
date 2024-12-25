import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/95 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-white font-bold text-xl">Igor Menezes</div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            <Menu />
          </button>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-16 md:top-0 left-0 right-0 bg-black/95 md:bg-transparent`}>
            <ul className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0">
              <li><a href="#benefits" className="text-white hover:text-gray-300">Benefícios</a></li>
              <li><a href="#about" className="text-white hover:text-gray-300">Sobre</a></li>
              <li><a href="#services" className="text-white hover:text-gray-300">Serviços</a></li>
              <li><a href="#testimonials" className="text-white hover:text-gray-300">Depoimentos</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}