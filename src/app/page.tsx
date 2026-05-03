"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LeftSidebar from "@/components/organisms/LeftSidebar";
import RightSidebar from "@/components/organisms/RightSidebar";
import ProfileSection from "@/components/organisms/ProfileSection";
import KnowledgeSection from "@/components/organisms/KnowledgeSection";
import EducationSection from "@/components/organisms/EducationSection";
import PortfolioSection from "@/components/organisms/PortfolioSection";
import Footer from "@/components/organisms/Footer";

// Layout principal: 3 columnas (sidebar izquierdo | contenido central | sidebar derecho)
// En mobile el sidebar izquierdo se convierte en un drawer deslizante
export default function Home() {
  // Controla si el sidebar izquierdo está abierto en mobile
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    // overflow-hidden en el contenedor para que el scroll quede solo en el contenido central
    <div className="flex h-screen overflow-hidden bg-rose-50">
      {/* Botón hamburguesa — solo visible en mobile */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed top-4 left-4 z-40 lg:hidden bg-rose-500 text-white p-2 rounded-lg shadow-md"
        aria-label="Open menu"
      >
        <FaBars size={18} />
      </button>

      {/* Overlay oscuro al abrir el sidebar en mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar izquierdo — fijo en desktop, deslizante en mobile */}
      <div
        className={`fixed lg:relative z-40 lg:z-auto h-full transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Botón para cerrar en mobile */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute top-3 right-3 text-rose-300 hover:text-white lg:hidden z-50"
          aria-label="Close menu"
        >
          <FaTimes size={18} />
        </button>
        <LeftSidebar />
      </div>

      {/* Contenido central con scroll vertical */}
      <main className="flex-1 overflow-y-auto center-scroll">
        <ProfileSection />
        <KnowledgeSection />
        <EducationSection />
        <PortfolioSection />
        <Footer />
      </main>

      {/* Sidebar derecho — solo en desktop */}
      <div className="hidden lg:flex">
        <RightSidebar />
      </div>
    </div>
  );
}
