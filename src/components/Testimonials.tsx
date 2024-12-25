import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Maria Silva",
    text: "Com a orientação do Igor, consegui emagrecer 10 kg em 3 meses sem passar fome. Estou muito satisfeita com os resultados!",
    rating: 5
  },
  {
    name: "João Santos",
    text: "Excelente profissional! Consegui ganhar massa muscular mantendo uma alimentação saudável e equilibrada.",
    rating: 5
  },
  {
    name: "Ana Costa",
    text: "O acompanhamento online é muito prático e o Igor está sempre disponível para tirar dúvidas.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          O que meus clientes dizem
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">{testimonial.text}</p>
              <p className="text-white font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}