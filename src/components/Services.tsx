import { Utensils, Pills, MessageCircle } from 'lucide-react';

const services = [
  {
    icon: Utensils,
    title: 'Plano Alimentar Personalizado',
    description: 'Baseado nos seus objetivos e preferências.'
  },
  {
    icon: Pills,
    title: 'Orientação sobre Suplementação',
    description: 'O que realmente funciona para você.'
  },
  {
    icon: MessageCircle,
    title: 'Acompanhamento Contínuo',
    description: 'Suporte direto comigo para ajustes e motivação.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Minha Consultoria Inclui:
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg text-center">
              <service.icon className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://wa.me/SEUNUMERO"
            className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Quero minha consultoria
          </a>
        </div>
      </div>
    </section>
  );
}