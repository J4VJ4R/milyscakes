import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import { menuData } from "@/data/menu";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {menuData.map((category, index) => (
        <ProductSection 
          key={category.id} 
          category={category} 
          reversed={index % 2 !== 0}
        />
      ))}

      <Footer />
    </main>
  );
}
