import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=2880&auto=format&fit=crop"
          alt="Mily's Cakes Hero Background"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-dancing-script text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-lg">
          Dulces que cuentan historias
        </h1>
        <p className="text-white text-lg md:text-xl font-light tracking-wide mb-10 drop-shadow-md max-w-2xl mx-auto">
          Pastelería artesanal en Ibagué. Creamos momentos inolvidables con los mejores ingredientes y mucho amor.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#tortas"
            className="bg-mily-purple hover:bg-mily-purple-dark text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Ver Menú
          </Link>
          <a
            href="https://wa.me/573134583730"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Hacer Pedido
          </a>
        </div>
      </div>
    </section>
  );
}
