import { Instagram, Facebook, Phone, MapPin, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-dancing-script text-4xl mb-4 text-mily-purple">Mily's Cakes</h2>
            <p className="text-gray-400 mb-6 max-w-sm">
              Pastelería artesanal hecha con amor en Ibagué. Llevamos dulzura a tu mesa con los ingredientes más frescos y deliciosos.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/milyscakes27/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-800 p-2 rounded-full hover:bg-mily-purple transition-colors"
                aria-label="Síguenos en Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-mily-purple transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@milyscakes0?lang=es-419" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-800 p-2 rounded-full hover:bg-mily-purple transition-colors"
                aria-label="Síguenos en TikTok"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-mily-purple flex-shrink-0" />
                <span>Ibagué, Tolima, Colombia</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-mily-purple flex-shrink-0" />
                <span>+57 313 458 3730</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Send className="w-5 h-5 text-mily-purple flex-shrink-0" />
                <span>milys.cakes27@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Horario */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6">Horario</h3>
            <div className="text-gray-400 flex flex-col items-center md:items-start gap-1">
              <span>Lunes - Domingo</span>
              <span className="text-white font-medium">9:00 AM - 10:00 PM</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm flex flex-col gap-2">
          <p>&copy; {new Date().getFullYear()} Mily's Cakes. Todos los derechos reservados.</p>
          <p>
            Creado por <a href="https://www.spacecode.com.co" target="_blank" rel="noopener noreferrer" className="text-mily-purple hover:text-white transition-colors font-medium">Spacecode Technologies</a> - 317 678 7316
          </p>
        </div>
      </div>
    </footer>
  );
}
