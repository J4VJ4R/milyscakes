"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: "Tortas", href: "#tortas" },
    { name: "Postres", href: "#postres" },
    { name: "Sal y Dulce", href: "#sal-y-dulce" },
    { name: "Bebidas", href: "#bebidas" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-dancing-script text-3xl md:text-4xl text-mily-purple font-bold">
              Mily's Cakes
              <span className="block text-xs font-sans text-gray-500 font-normal tracking-wider mt-1">
                PASTELERÍA ARTESANAL
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-mily-purple transition-colors font-medium">
              Inicio
            </Link>

            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-mily-purple transition-colors font-medium">
                Menú <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {/* Dropdown */}
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-mily-purple-light hover:text-mily-purple-dark"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="#contacto" className="text-gray-700 hover:text-mily-purple transition-colors font-medium">
              Contacto
            </Link>

            <a
              href="https://wa.me/573134583730"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-medium transition-colors flex items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
            >
              <Phone className="w-4 h-4" /> Pide por WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-mily-purple focus:outline-none p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link
              href="/"
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-mily-purple hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            
            <div>
              <button
                onClick={toggleSubMenu}
                className="w-full flex justify-between items-center px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-mily-purple hover:bg-gray-50"
              >
                Menú <ChevronDown className={`w-4 h-4 transform transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMenuOpen && (
                <div className="pl-6 space-y-1 bg-gray-50 rounded-md mt-1">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-mily-purple"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="#contacto"
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-mily-purple hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>

            <a
              href="https://wa.me/573134583730"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full font-medium transition-colors shadow-sm"
              onClick={() => setIsOpen(false)}
            >
              Pide por WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
