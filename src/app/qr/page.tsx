"use client";

import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Download } from "lucide-react";

export default function QRPage() {
  const qrRef = useRef<HTMLDivElement>(null);
  const [url] = useState("https://milyscakes.vercel.app/links");

  const downloadQR = () => {
    const originalCanvas = qrRef.current?.querySelector("canvas");
    if (originalCanvas) {
      // Create a new canvas with extra padding for text
      const newCanvas = document.createElement("canvas");
      const ctx = newCanvas.getContext("2d");
      
      if (ctx) {
        const padding = 60;
        const topTextHeight = 60;
        const bottomTextHeight = 60;
        const width = originalCanvas.width + (padding * 2);
        const height = originalCanvas.height + topTextHeight + bottomTextHeight + (padding * 1.5);
        
        newCanvas.width = width;
        newCanvas.height = height;
        
        // Fill white background
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, width, height);
        
        // Draw Top Text
        ctx.font = "bold 24px Arial";
        ctx.fillStyle = "#333333";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("ESCANÉAME - REDES SOCIALES", width / 2, padding / 2 + 20);
        
        // Draw Original QR
        ctx.drawImage(originalCanvas, padding, topTextHeight + padding / 2);
        
        // Draw Bottom Text
        ctx.font = "14px Arial";
        ctx.fillStyle = "#666666";
        ctx.fillText("Creado por Spacecode Technologies", width / 2, height - bottomTextHeight + 10);
        
        // Draw WhatsApp Contact
        ctx.font = "bold 16px Arial";
        ctx.fillStyle = "#25D366"; // WhatsApp Green
        ctx.fillText("📱 317 678 7316", width / 2, height - bottomTextHeight + 35);
        
        // Download
        const image = newCanvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = "milyscakes-qr-redes.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-gray-50 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-mily-purple/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-200/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 animate-fade-in-up">
        <h1 className="font-dancing-script text-5xl font-bold text-gray-800 text-center">
          Escanea para conectarte
        </h1>
        <p className="text-gray-600 text-center max-w-md">
          Comparte este código QR con tus clientes para que accedan rápidamente a todas tus redes sociales y menú.
        </p>

        {/* QR Card */}
        <div 
          ref={qrRef}
          className="bg-white p-8 rounded-3xl shadow-2xl border-4 border-white flex flex-col items-center gap-4 transform transition-transform hover:scale-105"
        >
          <div className="bg-white p-2 rounded-xl">
            <QRCodeCanvas
              value={url}
              size={256}
              level={"H"}
              includeMargin={true}
              imageSettings={{
                src: "/img/mildrey.png",
                x: undefined,
                y: undefined,
                height: 50,
                width: 50,
                excavate: true,
              }}
            />
          </div>
          <p className="font-bold text-gray-800 tracking-wider">MILY'S CAKES</p>
        </div>

        {/* Download Button */}
        <button
          onClick={downloadQR}
          className="flex items-center gap-2 bg-mily-purple hover:bg-mily-purple-dark text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95"
        >
          <Download className="w-5 h-5" />
          Descargar QR
        </button>
      </div>

      <div className="mt-8 text-center space-y-2 relative z-10">
        <p className="text-[10px] text-gray-400">
          Creado por <a href="https://www.spacecode.com.co" target="_blank" rel="noopener noreferrer" className="text-mily-purple hover:text-mily-purple-dark transition-colors font-bold">Spacecode Technologies</a>
          <br />
          317 678 7316
        </p>
      </div>

      <style jsx global>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
