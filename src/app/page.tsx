import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryNav from "@/components/CategoryNav";
import ProductSection from "@/components/ProductSection";
import About from "@/components/About";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { menuData } from "@/data/menu";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <CategoryNav />
      
      {menuData.map((category, index) => (
        <ProductSection 
          key={category.id} 
          category={category} 
          reversed={index % 2 !== 0}
        />
      ))}

      <About />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
