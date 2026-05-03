"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaTimes,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaBriefcase,
  FaChartBar,
  FaLanguage,
} from "react-icons/fa";
import { personalInfo } from "@/data/portfolioData";

// Estadísticas que aparecen en la tarjeta del diálogo
const stats = [
  { icon: <FaBriefcase />, value: "4+", label: "Años de exp." },
  { icon: <FaChartBar />, value: "3", label: "Proyectos" },
  { icon: <FaLanguage />, value: "C1", label: "Inglés" },
];

export default function ProfileSection() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <section className="bg-white px-8 py-10 flex flex-col md:flex-row items-center gap-8 border-b border-rose-100">
        <div className="flex-1 order-2 md:order-1">
          <p className="text-rose-500 font-medium text-sm mb-1">Hola, soy</p>
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">
            {personalInfo.name.split(" ").slice(0, 2).join(" ")}
          </h1>
          <h2 className="text-xl font-semibold text-rose-500 mt-1 mb-4">
            {personalInfo.subtitle}
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-md">
            {personalInfo.description}
          </p>

          <button
            onClick={() => setDialogOpen(true)}
            className="mt-6 bg-rose-500 hover:bg-rose-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Contáctame →
          </button>
        </div>

        <div className="order-1 md:order-2 flex-shrink-0">
          <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden border-4 border-rose-200 shadow-lg">
            <Image
              src={personalInfo.photo}
              alt={personalInfo.name}
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Diálogo creativo de presentación */}
      {dialogOpen && (
        <div
          className="dialog-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={(e) => e.target === e.currentTarget && setDialogOpen(false)}
        >
          <div className="dialog-card bg-white rounded-3xl w-full max-w-sm shadow-2xl overflow-hidden">

            {/* Header con gradiente animado */}
            <div className="gradient-animated p-6 relative flex flex-col items-center text-center">
              <button
                onClick={() => setDialogOpen(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                aria-label="Cerrar"
              >
                <FaTimes size={16} />
              </button>

              {/* Foto con glow */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white/80 shadow-xl mb-3">
                <Image
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <h3 className="text-white font-bold text-lg leading-snug">
                {personalInfo.name}
              </h3>
              <p className="text-rose-100 text-sm mt-0.5">{personalInfo.subtitle}</p>

              {/* Badge de disponibilidad con pulso */}
              <div className="flex items-center gap-2 mt-3 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="pulse-ring relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
                <span className="text-white text-xs font-semibold">Disponible para trabajar</span>
              </div>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-3 border-b border-rose-100">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center py-4 gap-1 border-r border-rose-100 last:border-0">
                  <span className="text-rose-400 text-sm">{stat.icon}</span>
                  <span className="text-rose-800 font-bold text-lg leading-none">{stat.value}</span>
                  <span className="text-gray-400 text-xs">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Botones de contacto */}
            <div className="p-5 flex flex-col gap-3">
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="flex items-center gap-3 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-2xl px-4 py-3 transition-colors group"
              >
                <span className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center flex-shrink-0 group-hover:bg-rose-600 transition-colors">
                  <FaEnvelope size={13} />
                </span>
                <div>
                  <p className="text-xs text-gray-400 leading-none mb-0.5">Correo</p>
                  <p className="text-sm font-medium text-gray-700">{personalInfo.contact.email}</p>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.contact.phone}`}
                className="flex items-center gap-3 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-2xl px-4 py-3 transition-colors group"
              >
                <span className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center flex-shrink-0 group-hover:bg-rose-600 transition-colors">
                  <FaPhone size={13} />
                </span>
                <div>
                  <p className="text-xs text-gray-400 leading-none mb-0.5">Teléfono</p>
                  <p className="text-sm font-medium text-gray-700">{personalInfo.contact.phone}</p>
                </div>
              </a>

              {/* Redes sociales */}
              <div className="flex gap-2 mt-1">
                <a
                  href={`https://${personalInfo.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#0077b5] hover:bg-[#005f94] text-white text-xs font-semibold py-2.5 rounded-2xl transition-colors"
                >
                  <FaLinkedin size={14} /> LinkedIn
                </a>
                <a
                  href="https://github.com/yiyilopez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-700 text-white text-xs font-semibold py-2.5 rounded-2xl transition-colors"
                >
                  <FaGithub size={14} /> GitHub
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
