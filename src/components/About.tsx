export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1000"
              alt="Igor Menezes"
              className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Conheça Igor Menezes
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Sou Igor Menezes, nutricionista especializado em emagrecimento e hipertrofia. 
              Minha missão é ajudar homens e mulheres a alcançar seus objetivos com uma 
              abordagem eficiente e prática, sem complicar o dia a dia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}