"use client";

import React, { useEffect, useMemo, useState } from "react";
import { pdf } from "@react-pdf/renderer";
import CatalogDocument from "./CatalogDocument";
import { Download, FileText, Loader2 } from "lucide-react";
import { menuData, Category } from "@/data/menu";

const CatalogButton = () => {
  const [isClient, setIsClient] = useState(false);
  const [origin, setOrigin] = useState("");
  const [processedMenuData, setProcessedMenuData] = useState<Category[] | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [progress, setProgress] = useState(0);
  const [pdfError, setPdfError] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
    setOrigin(window.location.origin);
  }, []);

  const pdfFileName = useMemo(() => {
    const ymd = new Date().toISOString().split("T")[0];
    return `Catalogo-MilysCakes-${ymd}.pdf`;
  }, []);

  const pdfDocument = useMemo(() => {
    return <CatalogDocument origin={origin} data={processedMenuData ?? undefined} />;
  }, [origin, processedMenuData]);

  const downloadOrSharePdf = async () => {
    if (!processedMenuData || isProcessing || isGeneratingPdf) return;
    setPdfError(null);
    setIsGeneratingPdf(true);
    try {
      const blob = await pdf(pdfDocument).toBlob();
      const file = new File([blob], pdfFileName, { type: "application/pdf" });

      const canShareFiles =
        typeof navigator !== "undefined" &&
        "canShare" in navigator &&
        typeof (navigator as unknown as { canShare?: (data: unknown) => boolean }).canShare === "function" &&
        (navigator as unknown as { canShare: (data: unknown) => boolean }).canShare({ files: [file] });

      if (canShareFiles && typeof navigator.share === "function") {
        await navigator.share({
          title: "Catálogo Mily's Cakes",
          files: [file],
        });
        return;
      }

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = pdfFileName;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 30_000);
    } catch (e) {
      console.error("PDF Generation Error:", e);
      setPdfError("No se pudo generar el PDF. Intenta de nuevo.");
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const convertImageToBase64 = (url: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      // Only set crossOrigin if not same origin, though for local dev it's usually fine either way.
      // But removing it for local images can sometimes help if server doesn't send CORS.
      img.crossOrigin = "Anonymous"; 
      
      // Add a timeout to prevent hanging forever
      const timeoutId = setTimeout(() => {
        console.warn(`Timeout loading image: ${url}`);
        resolve("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=");
      }, 5000);

      img.src = url;
      img.onload = () => {
        clearTimeout(timeoutId);
        const canvas = document.createElement("canvas");
        
        // RESIZE LOGIC: Limit max dimension to 300px to reduce memory usage and prevent PDF generation hang
        const MAX_SIZE = 300;
        let width = img.width;
        let height = img.height;
        
        if (width > height) {
          if (width > MAX_SIZE) {
            height *= MAX_SIZE / width;
            width = MAX_SIZE;
          }
        } else {
          if (height > MAX_SIZE) {
            width *= MAX_SIZE / height;
            height = MAX_SIZE;
          }
        }

        canvas.width = width;
        canvas.height = height;
        
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          // Use JPEG with 0.6 quality for photos - significantly smaller than PNG
          resolve(canvas.toDataURL("image/jpeg", 0.6));
        } else {
          reject(new Error("Canvas context failed"));
        }
      };
      img.onerror = (err) => {
        clearTimeout(timeoutId);
        console.warn(`Failed to load image for PDF: ${url}`, err);
        // Return a transparent 1x1 pixel as fallback to prevent crash
        resolve("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=");
      };
    });
  };

  const prepareImages = async () => {
    if (processedMenuData || isProcessing) return;

    setIsProcessing(true);
    // Create a deep copy to avoid mutating original state
    const newData = JSON.parse(JSON.stringify(menuData)) as Category[];
    let totalImages = 0;
    let processedImages = 0;

    // Count total images
    newData.forEach(cat => cat.products.forEach(p => { if (p.image) totalImages++; }));

    // Process images
    for (const category of newData) {
      for (const product of category.products) {
        if (product.image) {
          try {
            // Use window.location.origin for local path resolution
            const fullUrl = product.image.startsWith('http') 
              ? product.image 
              : `${window.location.origin}${product.image}`;
            
            // Yield to main thread to keep UI responsive
            await new Promise(resolve => setTimeout(resolve, 10));
            
            const base64 = await convertImageToBase64(fullUrl);
            product.image = base64;
          } catch (e) {
            console.error("Error converting image", e);
          }
          processedImages++;
          setProgress(Math.round((processedImages / totalImages) * 100));
        }
      }
    }

    setProcessedMenuData(newData);
    setIsProcessing(false);
  };

  if (!isClient) {
    return (
      <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-400 rounded-xl cursor-not-allowed opacity-50 font-medium">
        <Loader2 className="w-5 h-5 animate-spin" />
        <span>Cargando...</span>
      </button>
    );
  }

  return (
    <div className="relative group">
      {/* Abstract background decorative element for asymmetry */}
      <div className="absolute -top-1 -right-1 w-full h-full bg-mily-purple rounded-xl opacity-20 transform rotate-2 group-hover:rotate-6 transition-transform duration-300"></div>
      
      {!processedMenuData ? (
        <button 
          onClick={prepareImages}
          disabled={isProcessing}
          className="relative flex items-center gap-3 px-6 py-3 bg-white border border-mily-purple/30 text-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden w-full justify-center"
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin text-mily-purple" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-xs font-bold text-mily-purple uppercase tracking-wider mb-1">Preparando PDF</span>
                <span className="text-sm font-medium">{progress}% completado</span>
              </div>
            </>
          ) : (
            <>
              <div className="p-2 bg-mily-purple/10 rounded-lg group-hover:bg-mily-purple group-hover:text-white transition-colors duration-300">
                <FileText className="w-5 h-5" />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-xs font-bold text-mily-purple uppercase tracking-wider mb-1">Generar</span>
                <span className="text-lg font-bold font-dancing-script">Catálogo</span>
              </div>
              <Download className="w-4 h-4 text-gray-400 ml-2" />
            </>
          )}
        </button>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <button
            type="button"
            onClick={downloadOrSharePdf}
            disabled={isGeneratingPdf}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 neon-border group disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isGeneratingPdf ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Generando PDF...</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Descargar Catálogo</span>
              </>
            )}
          </button>
          {pdfError ? <span className="text-xs text-red-600">{pdfError}</span> : null}
        </div>
      )}
    </div>
  );
};

export default CatalogButton;
