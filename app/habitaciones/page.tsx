import PagesHero from "@/components/PagesHero";
import RoomsGallery from "./components/RoomsGallery";

const RoomsPage = () => {
  return (
    <div className="flex flex-col">
      <PagesHero bgUrl="/default-image.jpg" />
      <section className="w-full pt-20 pb-20 md:pb-40 bg-light">
        <div className="flex flex-col items-center gap-5 px-4 mb-10 text-center md:mb-20 md:px-0">
          <h2 className="text-5xl md:text-6xl font-title">
            Nuestras Habitaciones
          </h2>
          <h4 className="text-lg font-semibold md:text-xl text-primary font-secondary">
            Confort y estilo para cada huésped
          </h4>
          <p className="max-w-3xl mt-5 md:text-lg text-dark/60">
            Descubrí habitaciones diseñadas para brindar descanso y bienestar.
            Desde opciones estándar hasta superiores, cada espacio combina
            comodidad, tranquilidad y detalles pensados para que tu estadía en
            Termas de Río Hondo sea inolvidable
          </p>
        </div>
        {/* Habitaciones */}
        <RoomsGallery />
      </section>
    </div>
  );
};

export default RoomsPage;
