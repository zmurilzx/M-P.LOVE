import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import Timeline from "@/components/Timeline";
import PhotoGallery from "@/components/PhotoGallery";
import LoveDeclarations from "@/components/LoveDeclarations";
import LoveLetter from "@/components/LoveLetter";
import MusicPlayer from "@/components/MusicPlayer";
import LoveAction from "@/components/LoveAction";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <FloatingHearts />

      <main className="relative z-10">
        <HeroSection name="Paolla" />
        <MusicPlayer />
        <Timeline />
        <PhotoGallery />
        <LoveDeclarations />
        <LoveLetter />
        <LoveAction />
        <Footer />
      </main>
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
