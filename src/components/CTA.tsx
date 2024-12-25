import { WhatsappIcon } from './Icons';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-t from-black to-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Pronto para mudar sua vida?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Transforme seu corpo com uma abordagem que realmente funciona.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/SEUNUMERO"
            className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <WhatsappIcon className="w-5 h-5 mr-2" />
            Comece agora!
          </a>
          <a
            href="https://wa.me/SEUNUMERO"
            className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Fale comigo no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}