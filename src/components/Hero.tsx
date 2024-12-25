import { WhatsappIcon } from './Icons';

export default function Hero() {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Transforme seu Corpo e Saúde com Nutrição Personalizada
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Consultorias on-line para emagrecimento e hipertrofia, com planos 100% adaptados à sua rotina.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/SEUNUMERO"
              className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <WhatsappIcon className="w-5 h-5 mr-2" />
              Quero Começar Agora
            </a>
            <button className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
              Entre na Lista de Espera
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}