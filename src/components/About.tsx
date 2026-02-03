import Image from "next/image";

export default function About() {
  return (
    <section id="historia" className="py-20 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Column */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Decorative background element */}
              <div className="absolute inset-0 bg-mily-purple-light rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
              
              {/* Main Image */}
              <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-lg border-4 border-white">
                <Image
                  src="/img/mildrey.png"
                  alt="Mildrey - Creadora de Mily's Cakes"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Floating Badge (optional) */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-full shadow-xl border border-gray-100 hidden sm:block">
                <p className="font-dancing-script text-mily-purple text-2xl font-bold text-center leading-none">
                  Hecho<br/>con Amor
                </p>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-mily-purple-light/30 text-mily-purple-dark text-sm font-semibold tracking-wider mb-4 uppercase">
              Nuestra Historia
            </span>
            <h2 className="font-dancing-script text-5xl lg:text-6xl text-gray-800 mb-6 leading-tight">
              Hola, soy <span className="text-mily-purple">Mildrey</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Bienvenidos a <span className="font-semibold text-gray-800">Mily's Cakes</span>, un sueño que nació en mi cocina y creció gracias al amor por la repostería artesanal.
              </p>
              <p>
                Cada torta, postre y detalle que ves aquí es el resultado de horas de dedicación y una búsqueda incansable de los sabores más auténticos. No utilizamos premezclas ni atajos; aquí batimos, horneamos y decoramos a mano, como lo harían las abuelas.
              </p>
              <p>
                Mi misión es simple: endulzar tus momentos más especiales con creaciones que no solo se ven hermosas, sino que saben a hogar. ¡Gracias por dejarme ser parte de tus celebraciones!
              </p>
            </div>

            <div className="mt-10">
              <Image 
                src="/img/logo-horizontal-1.png" 
                alt="Mily's Cakes Signature" 
                width={150} 
                height={50} 
                className="mx-auto md:mx-0 opacity-80"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
