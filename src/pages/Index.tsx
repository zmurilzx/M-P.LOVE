import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import LoveDeclarations from "@/components/LoveDeclarations";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <FloatingHearts />
      
      <main className="relative z-10">
        <HeroSection name="Meu Amor" />
        <PhotoGallery />
        <LoveDeclarations />
        <Timeline />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
