import Link from "next/link";
import { menuData } from "@/data/menu";

export default function CategoryNav() {
  return (
    <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start md:justify-center overflow-x-auto scrollbar-hide py-4 gap-4 md:gap-8 no-scrollbar">
          {menuData.map((category) => (
            <Link
              key={category.id}
              href={`#${category.id}`}
              className="flex-shrink-0 px-6 py-2 rounded-full border border-gray-200 text-gray-600 font-medium text-sm uppercase tracking-wide neon-border-pill hover:text-mily-purple hover:bg-mily-purple-light/10 transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              {category.title}
            </Link>
          ))}
          {/* Add a "Complete Menu" link or similar if needed, but menuData covers categories */}
        </div>
      </div>
    </div>
  );
}
