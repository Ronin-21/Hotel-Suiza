"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { default as MyButton } from "./MyButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para desplazarse a una sección
  const scrollToSection = (id: string) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false); // Cierra el menú en mobile al hacer clic
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b backdrop-blur-sm border-dark/10">
      {/* Container */}
      <div className="container flex items-center justify-between h-20 p-2 mx-auto font-secondary">
        {/* Logo */}
        <Link href="/" className="relative w-32 h-full overflow-hidden">
          <Image src={"/logo.png"} alt="logo" fill className="object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <div className="items-center hidden gap-10 font-semibold md:flex">
          <button
            onClick={scrollToTop}
            className="text-lg transition-colors duration-200 text-dark/70 hover:text-primary cursor-pointer"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("galeria")}
            className="text-lg transition-colors duration-200 text-dark/70 hover:text-primary cursor-pointer"
          >
            Galería
          </button>
          <button
            onClick={() => scrollToSection("servicios")}
            className="text-lg transition-colors duration-200 text-dark/70 hover:text-primary cursor-pointer"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("paquetes")}
            className="text-lg transition-colors duration-200 text-dark/70 hover:text-primary cursor-pointer"
          >
            Paquetes
          </button>
          <MyButton variant="outline">
            <Link href={"/reservas"}>Reservar Ahora</Link>
          </MyButton>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            className="text-dark/80 hover:text-primary focus:outline-none"
          >
            {isOpen ? <X size={36} /> : <Menu size={36} />}
          </button>
        </div>
        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full gap-10 bg-white md:hidden h-dvh -z-10">
            <button
              onClick={scrollToTop}
              className="text-3xl font-semibold text-dark/80"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-3xl font-semibold text-dark/80"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-3xl font-semibold text-dark/80"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("paquetes")}
              className="text-3xl font-semibold text-dark/80"
            >
              Paquetes
            </button>
            <MyButton
              href="/reservas"
              size="lg"
              onClick={() => setIsOpen(false)}
            >
              Reservar Ahora
            </MyButton>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
