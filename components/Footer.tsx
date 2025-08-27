"use client";

import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  // Función para desplazarse a una sección
  const scrollToSection = (id: string) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 text-white bg-dark">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8 font-secondary">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Social */}
          <div>
            <Image
              src={"/logo.png"}
              alt="logo"
              width={200}
              height={100}
              className="invert"
            />
            <p className="my-5 italic text-light">
              Relajate, disfrutá, repetí <br />
              Escapate a Termas, viví el Panamericano!
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="transition-colors text-light hover:text-secondary"
              >
                <Facebook className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="transition-colors text-light hover:text-secondary"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="transition-colors text-light hover:text-secondary"
              >
                <Twitter className="w-6 h-6" />
              </Link>
            </div>
          </div>
          {/* Nav Links */}
          <div>
            <h4 className="mb-4 text-xl font-semibold">Enlaces Rápidos</h4>
            <div className="flex flex-col items-start gap-2">
              <button
                onClick={scrollToTop}
                className="transition-colors duration-200 text-light hover:text-secondary cursor-pointer"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("galeria")}
                className="transition-colors duration-200 text-light hover:text-secondary cursor-pointer"
              >
                Galería
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="transition-colors duration-200 text-light hover:text-secondary cursor-pointer"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("paquetes")}
                className="transition-colors duration-200 text-light hover:text-secondary cursor-pointer"
              >
                Paquetes
              </button>
              <Link
                href={"/reservas"}
                className="transition-colors duration-200 text-light hover:text-secondary"
              >
                Reservar Ahora
              </Link>
            </div>
          </div>
          {/* Services */}
          <div>
            <h4 className="mb-4 text-xl font-semibold">Servicios</h4>
            <ul className="space-y-2 text-light">
              <li>Spa y Gimnasio</li>
              <li>Restaurante</li>
              <li>Shows y Recreación</li>
              <li>Piletas y Sauna</li>
              <li>Estacionamiento</li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xl font-semibold">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-secondary" />
                <span className="text-light">
                  Juan Bautista Alberdi 341, Termas de Río Hondo
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-secondary" />
                <span className="text-light">+54 9 (3858) 42-4147</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-secondary" />
                <span className="text-light">
                  ideasdelnortesrl@yahoo.com.ar
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="pt-8 mt-12 text-center border-t border-gray-800">
          <p className="text-sm text-white md:text-base">
            © 2025 Hotel City · Todos los derechos reservados · Sitio
            desarrollado por
            <Link
              href={"https://ronin-webdesign.vercel.app/"}
              target="_blank"
              className="transition-all duration-100 text-secondary hover:font-semibold"
            >
              {" "}
              Ronin WebDesign{" "}
            </Link>
            · Powered by
            <Link
              href={"https://www.aldereteinformatica.com.ar"}
              target="_blank"
              className="transition-all duration-100 text-secondary hover:font-semibold"
            >
              {" "}
              Alderete Informática
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
