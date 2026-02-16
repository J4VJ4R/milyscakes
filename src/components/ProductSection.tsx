"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Category, Product } from "@/data/menu";

interface ProductSectionProps {
  category: Category;
  reversed?: boolean;
}

const ProductCard = ({ product }: { product: Product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  const hasMultipleImages = product.images && product.images.length > 1;

  useEffect(() => {
    if (!hasMultipleImages || isPaused) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % product.images!.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [hasMultipleImages, product.images, isPaused]);

  // Reset pause after 5 seconds of no interaction
  useEffect(() => {
    if (!isPaused) return;
    const timeout = setTimeout(() => setIsPaused(false), 5000);
    return () => clearTimeout(timeout);
  }, [isPaused]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      setCurrentImageIndex((prev) => (prev + 1) % product.images!.length);
    } else if (isRightSwipe) {
      setCurrentImageIndex((prev) => (prev - 1 + product.images!.length) % product.images!.length);
    }
  };

  const imagesToRender = hasMultipleImages ? product.images! : [product.image];

  return (
    <div className="group flex flex-col items-center text-center">
      <div 
        className="relative w-full aspect-square mb-6 overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-300 touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div 
          className="flex h-full transition-transform duration-1000 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {imagesToRender.map((imgSrc, index) => (
            <div key={index} className="relative w-full h-full flex-shrink-0">
              <Image
                src={imgSrc}
                alt={`${product.name} - ${index + 1}`}
                fill
                className={`object-cover transform transition-transform duration-700 ${!hasMultipleImages ? 'group-hover:scale-110' : ''}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
        
        {hasMultipleImages && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
            {imagesToRender.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                  setIsPaused(true);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? "bg-mily-purple w-4" 
                    : "bg-white/60 hover:bg-mily-purple/80"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-mily-purple transition-colors">
        {product.name}
      </h3>
      <p className="text-mily-purple-dark font-semibold mb-3">{product.price}</p>
      {product.description && (
        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
          {product.description}
        </p>
      )}
    </div>
  );
};

export default function ProductSection({ category, reversed = false }: ProductSectionProps) {
  return (
    <section id={category.id} className={`py-20 scroll-mt-36 md:scroll-mt-40 ${reversed ? "bg-gray-50" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-dancing-script text-5xl md:text-6xl text-mily-purple mb-4">
            {category.title}
          </h2>
          <div className="w-24 h-1 bg-mily-purple mx-auto rounded-full opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {category.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
