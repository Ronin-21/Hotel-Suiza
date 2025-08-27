import PagesHero from "@/components/PagesHero";
import GalleryGrid from "./components/GalleryGrid";

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PagesHero bgUrl="/default-image.jpg" />
      {/* Gallery Section */}
      <section className="px-4 pt-20 pb-40 md:px-6 bg-light">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-5 mb-20 text-center">
            <h2 className="text-5xl md:text-6xl font-title">Nuestra Galería</h2>
            <h4 className="text-lg font-semibold md:text-xl text-primary font-secondary">
              Cada rincón cuenta su historia
            </h4>
            <p className="max-w-3xl mt-5 md:text-lg text-dark/60">
              Sumergite en nuestra galería y recorré los espacios del Hotel
              Principado: habitaciones, piletas, restaurante y áreas de relax.
              Las fotos reflejan la calidez, elegancia y experiencias únicas que
              te esperan en Termas de Río Hondo
            </p>
          </div>
          <GalleryGrid />
        </div>
      </section>
    </div>
  );
}
