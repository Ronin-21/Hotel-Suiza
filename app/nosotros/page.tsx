import PagesHero from "@/components/PagesHero";
import { Lightbulb, Target } from "lucide-react";
import HistorySection from "./components/HistorySection";
import FadeComponent from "@/components/animations/FadeComponent";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <PagesHero bgUrl="/default-image.jpg" />

      {/* History Section */}
      <HistorySection />

      {/* Values Section */}
      <section className="px-4 my-20 bg-white md:my-40 md:px-6">
        <div className="container mx-auto">
          <h2 className="mb-12 text-5xl text-center md:text-6xl font-title">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <FadeComponent cascade={true} damping={0.2} direction="down">
              {/* Card 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-amber-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-2xl font-bold font-secondary">
                  Respeto y Confianza
                </h3>
                <p className="mt-2 text-dark/60">
                  Creemos en la importancia de crear vínculos duraderos con
                  nuestros visitantes, basados en la transparencia y el cuidado
                  constante.
                </p>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-amber-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-2xl font-bold font-secondary">
                  Hospitalidad con Calidez
                </h3>
                <p className="mt-2 text-dark/60">
                  Recibimos a cada huésped como parte de nuestra familia, con
                  cercanía y atención personalizada en cada detalle.
                </p>
              </div>
              {/* Card 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-amber-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-2xl font-bold font-secondary">
                  Identidad Regional
                </h3>
                <p className="mt-2 text-dark/60">
                  Resaltamos la esencia de Termas de Río Hondo, ofreciendo
                  experiencias auténticas que reflejan la cultura y hospitalidad
                  santiagueña.
                </p>
              </div>
            </FadeComponent>
          </div>
        </div>
      </section>

      {/* Mision & Vision Section */}
      <section className="px-4 py-20 md:py-40 md:px-6 bg-light">
        <div className="container flex flex-col items-center gap-10 mx-auto">
          <h2 className="text-5xl text-center md:text-6xl font-title">
            Compromiso y Futuro
          </h2>
          <p className="max-w-2xl text-center md:text-lg text-dark/70">
            Trabajamos cada día para ofrecer un servicio de excelencia,
            manteniendo la tradición de la hospitalidad santiagueña.
          </p>
          {/* Cards */}
          <div className="flex flex-col items-center justify-center w-full mt-5 md:flex-row gap-14 md:mt-10">
            {/* Card 1 */}
            <FadeComponent
              direction="left"
              duration={1500}
              delay={500}
              triggerOnce={false}
            >
              <div className="flex gap-6 md:gap-10 flex-col items-center justify-start p-8 md:p-12 text-center bg-white rounded-lg md:h-[350px] h-full shadow-xl shadow-dark/30">
                <div className="flex flex-col items-center gap-3">
                  <Target className="size-12 text-primary" />
                  <h3 className="text-3xl font-bold md:text-4xl font-secondary">
                    Misión
                  </h3>
                </div>
                <p className="max-w-xl leading-7 tracking-tight md:text-lg text-dark/75">
                  Brindar a cada huésped una estadía placentera, donde el
                  confort, la gastronomía regional y la atención personalizada
                  se combinen para crear experiencias memorables en Termas de
                  Río Hondo.
                </p>
              </div>
            </FadeComponent>
            {/* Card 2 */}
            <FadeComponent
              direction="right"
              duration={1500}
              delay={500}
              triggerOnce={false}
            >
              <div className="flex gap-6 md:gap-10 flex-col items-center justify-start p-8 md:p-12 text-center bg-dark text-white rounded-lg md:h-[350px] h-full shadow-xl shadow-dark/30">
                <div className="flex flex-col items-center gap-3">
                  <Lightbulb className="size-12 text-secondary" />
                  <h3 className="text-3xl font-bold md:text-4xl font-secondary">
                    Visión
                  </h3>
                </div>
                <p className="max-w-xl leading-7 tracking-tight md:text-lg">
                  Consolidarnos como un referente en la hotelería de la región,
                  reconocidos por nuestra excelencia en el servicio, nuestra
                  conexión con la cultura local y la confianza de quienes nos
                  eligen año tras año.
                </p>
              </div>
            </FadeComponent>
          </div>
        </div>
      </section>
    </div>
  );
}
