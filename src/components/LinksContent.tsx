"use client";

import Image from "next/image";
import { Instagram, Facebook, Globe, MessageCircle } from "lucide-react";

export default function LinksContent() {
  const links = [
    {
      name: "Sitio Web Oficial",
      url: "/",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-mily-purple hover:bg-mily-purple-dark",
      textColor: "text-white",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/milyscakes27/",
      icon: <Instagram className="w-6 h-6" />,
      color: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500",
      textColor: "text-white",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@milyscakes0?lang=es-419",
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      color: "bg-black hover:bg-gray-900",
      textColor: "text-white",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/573134583730",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "bg-green-500 hover:bg-green-600",
      textColor: "text-white",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/milyscakes",
      icon: <Facebook className="w-6 h-6" />,
      color: "bg-blue-600 hover:bg-blue-700",
      textColor: "text-white",
    },
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden flex flex-col items-center justify-center p-4">
      {/* Aurora Background */}
      <div className="absolute inset-0 bg-gray-50 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-mily-purple/30 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-200/30 rounded-full blur-[100px] animate-pulse delay-1000" />
        <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-pink-200/30 rounded-full blur-[80px] animate-pulse delay-700" />
      </div>

      {/* Glassmorphism Card */}
      <div className="relative z-10 w-full max-w-md bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl p-8 flex flex-col items-center animate-fade-in-up">
        {/* Profile Image */}
        <div className="relative w-32 h-32 mb-6">
          <div className="absolute inset-0 bg-gradient-to-tr from-mily-purple to-pink-400 rounded-full animate-spin-slow blur-sm opacity-70" />
          <div className="relative w-full h-full rounded-full border-4 border-white overflow-hidden shadow-lg">
            <Image
              src="/img/mildrey.png"
              alt="Mily's Cakes Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Title & Description */}
        <h1 className="font-dancing-script text-4xl font-bold text-gray-800 mb-2">Mily's Cakes</h1>
        <p className="text-gray-600 text-center mb-8 font-medium">
          Dulces que cuentan historias 🍰<br />
          Pastelería Artesanal en Ibagué
        </p>

        {/* Links Stack */}
        <div className="w-full flex flex-col gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={`group relative w-full flex items-center justify-between px-6 py-4 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 active:scale-95 ${link.color} ${link.textColor}`}
            >
              <span className="flex items-center gap-4 font-bold tracking-wide">
                <span className="p-1 bg-white/20 rounded-full">{link.icon}</span>
                {link.name}
              </span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                →
              </span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center space-y-2">
          <p className="text-xs text-gray-500 font-medium tracking-wider uppercase">
            © 2026 Mily's Cakes
          </p>
          <p className="text-[10px] text-gray-400">
            Creado por <a href="https://www.spacecode.com.co" target="_blank" rel="noopener noreferrer" className="text-mily-purple hover:text-mily-purple-dark transition-colors font-bold">Spacecode Technologies</a>
            <br />
            317 678 7316
          </p>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
