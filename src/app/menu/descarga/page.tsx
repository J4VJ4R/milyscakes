"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function MenuDownloadPage() {
  const [status, setStatus] = useState("Preparando la descarga...");

  useEffect(() => {
    setStatus("Iniciando la descarga del menu...");

    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = "/descargar-menu";
    document.body.appendChild(iframe);

    const fallbackTimer = window.setTimeout(() => {
      setStatus("Si no empezo la descarga, usa el boton de abajo.");
    }, 3000);

    return () => {
      window.clearTimeout(fallbackTimer);
      iframe.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-8 md:p-10 text-center">
        <div className="mx-auto mb-6 h-16 w-16 rounded-full border-4 border-mily-purple/20 border-t-mily-purple animate-spin" />

        <h1 className="font-dancing-script text-5xl font-bold text-gray-800">
          Descargando menu
        </h1>

        <p className="mt-4 text-lg font-semibold text-gray-700">{status}</p>

        <p className="mt-3 text-sm md:text-base text-gray-500">
          En algunos celulares la descarga puede tardar unos segundos o mostrarse
          en la barra de notificaciones del navegador.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href="/descargar-menu"
            className="inline-flex items-center justify-center rounded-full bg-mily-purple px-8 py-4 text-white font-bold shadow-lg hover:bg-mily-purple-dark transition-all"
          >
            Descargar menu manualmente
          </a>

          <Link
            href="/menu"
            className="text-mily-purple hover:text-mily-purple-dark font-semibold underline underline-offset-4"
          >
            Volver al QR del menu
          </Link>
        </div>
      </div>
    </div>
  );
}
