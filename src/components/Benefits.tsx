import { CheckCircle } from 'lucide-react';

const benefits = [
  {
    title: 'Planos Personalizados',
    description: 'Alimentação ajustada aos seus horários e preferências.'
  },
  {
    title: 'Atendimento Flexível',
    description: 'Consultas on-line que se adaptam à sua rotina.'
  },
  {
    title: 'Resultados Sustentáveis',
    description: 'Sem dietas extremas ou efeitos rebote.'
  },
  {
    title: 'Acompanhamento Contínuo',
    description: 'Suporte por WhatsApp para dúvidas e ajustes.'
  },
  {
    title: 'Experiência Real',
    description: 'Sou nutricionista, militar e atleta de jiu-jitsu, entendo a importância da performance.'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Por Que Escolher Minha Consultoria?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}