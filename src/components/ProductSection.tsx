import Image from "next/image";
import { Category } from "@/data/menu";

interface ProductSectionProps {
  category: Category;
  reversed?: boolean;
}

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
            <div key={product.id} className="group flex flex-col items-center text-center">
              <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
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
          ))}
        </div>
      </div>
    </section>
  );
}
