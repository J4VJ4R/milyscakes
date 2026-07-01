"use client";

import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import DateLabelsPDF from "@/components/DateLabelsPDF";
import html2canvas from "html2canvas";

// Dynamic import for PDFDownloadLink since it's client-side only
const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  { ssr: false, loading: () => <span className="text-gray-500">Cargando...</span> }
);

export default function FechasPage() {
  // Today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];
  const [ffDate, setFfDate] = useState(today);
  const [fvDate, setFvDate] = useState(today);
  const [columns, setColumns] = useState(12);
  const [rows, setRows] = useState(6);
  const [isDownloading, setIsDownloading] = useState(false);

  // Parse FF date for display
  const ffDateObj = new Date(ffDate);
  const ffDay = String(ffDateObj.getDate()).padStart(2, "0");
  const ffMonth = String(ffDateObj.getMonth() + 1).padStart(2, "0");
  const ffYear = String(ffDateObj.getFullYear()).slice(-2);

  // Parse FV date for display
  const fvDateObj = new Date(fvDate);
  const fvDay = String(fvDateObj.getDate()).padStart(2, "0");
  const fvMonth = String(fvDateObj.getMonth() + 1).padStart(2, "0");
  const fvYear = String(fvDateObj.getFullYear()).slice(-2);

  const totalLabels = columns * rows;
  const labels = Array(totalLabels).fill(null);
  
  const previewRef = useRef<HTMLDivElement>(null);

  const handleDownloadImage = async () => {
    if (!previewRef.current) return;
    
    setIsDownloading(true);
    
    try {
      const canvas = await html2canvas(previewRef.current, {
        backgroundColor: "#ffffff",
        scale: 2,
        useCORS: true,
      });
      
      const link = document.createElement("a");
      link.download = `etiquetas-fechas-${ffDate}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Error al generar la imagen:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <main className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-dancing-script text-mily-purple mb-8 text-center">
          Generador de Etiquetas de Fechas
        </h1>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fecha FF (Fabricación)
              </label>
              <input
                type="date"
                value={ffDate}
                onChange={(e) => setFfDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mily-purple focus:border-mily-purple"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fecha FV (Vencimiento)
              </label>
              <input
                type="date"
                value={fvDate}
                onChange={(e) => setFvDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mily-purple focus:border-mily-purple"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Columnas
              </label>
              <input
                type="number"
                min="1"
                max="30"
                value={columns}
                onChange={(e) => setColumns(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mily-purple focus:border-mily-purple"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Filas
              </label>
              <input
                type="number"
                min="1"
                max="20"
                value={rows}
                onChange={(e) => setRows(Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mily-purple focus:border-mily-purple"
              />
            </div>

            <div>
              <PDFDownloadLink
                document={<DateLabelsPDF ffDate={ffDate} fvDate={fvDate} columns={columns} rows={rows} />}
                fileName={`etiquetas-fechas-${ffDate}.pdf`}
              >
                {({ loading }) => (
                  <button
                    disabled={loading}
                    className="w-full bg-mily-purple hover:bg-mily-purple-dark text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Generando PDF..." : "Descargar PDF"}
                  </button>
                )}
              </PDFDownloadLink>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Vista Previa (Hoja Carta Horizontal)
          </h2>
          <div className="overflow-x-auto">
            <div
              ref={previewRef}
              className="inline-grid gap-0 bg-white p-0"
              style={{ gridTemplateColumns: `repeat(${columns}, 80px)` }}
            >
              {labels.map((_, index) => (
                <div
                  key={index}
                  className="relative"
                  style={{ width: '80px', height: '35px' }}
                >
                  <div
                    className="border border-dashed border-black w-full h-full"
                  >
                    <div
                      className="bg-white flex justify-center items-center w-full h-full box-border"
                      style={{ border: '5px solid #f9a8d4', padding: '0' }}
                    >
                      <div className="flex flex-col justify-center items-center w-full text-center" style={{ marginTop: '-2px' }}>
                        <span className="text-[9px] text-black font-bold leading-none whitespace-nowrap">
                          FF {ffDay}-{ffMonth}-{ffYear}
                        </span>
                        <span className="text-[9px] text-black font-bold leading-none whitespace-nowrap">
                          FV {fvDay}-{fvMonth}-{fvYear}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
