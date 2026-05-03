// PortfolioCard: muestra una card de proyecto con imagen, título y descripción.
// Al hacer clic en "Saber más" se abre un modal con detalles y link a GitHub.
// "use client" es necesario porque usa useState para controlar el modal.
"use client";

import { useState } from "react";
import Image from "next/image";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  details: string;
  link: string;
  tags: string[];
  projectNumber: number;
}

// Gradientes de fondo para cuando no hay imagen disponible
const gradients = [
  "from-rose-400 to-pink-600",
  "from-pink-500 to-rose-700",
  "from-rose-300 to-pink-500",
];

export default function PortfolioCard({
  title,
  description,
  image,
  details,
  link,
  tags,
  projectNumber,
}: PortfolioCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const gradient = gradients[(projectNumber - 1) % gradients.length];

  return (
    <>
      <div className="flex-shrink-0 w-64 bg-white rounded-xl overflow-hidden shadow-sm border border-rose-100 hover:shadow-md hover:border-rose-200 transition-all duration-200">
        {/* Imagen del proyecto */}
        <div className={`relative h-36 bg-gradient-to-br ${gradient}`}>
          {!imgError && (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              onError={() => setImgError(true)}
            />
          )}
          {imgError && (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-white/70 text-xs font-medium text-center px-4">{title}</span>
            </div>
          )}
        </div>

        <div className="p-4">
          <h4 className="font-semibold text-rose-900 text-sm leading-snug mb-1">{title}</h4>
          <p className="text-gray-500 text-xs leading-relaxed mb-3">{description}</p>
          <button
            onClick={() => setIsOpen(true)}
            className="text-xs text-rose-500 font-semibold hover:text-rose-700 transition-colors"
          >
            Saber más →
          </button>
        </div>
      </div>

      {/* Modal con información detallada del proyecto */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
            <div className={`relative h-44 bg-gradient-to-br ${gradient}`}>
              {!imgError && (
                <Image src={image} alt={title} fill className="object-cover" />
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 bg-white/90 rounded-full p-1.5 text-rose-600 hover:bg-rose-500 hover:text-white transition-colors"
              >
                <FaTimes size={14} />
              </button>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold text-rose-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{details}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-rose-100 text-rose-600 px-2.5 py-0.5 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-rose-500 hover:text-rose-700 font-semibold transition-colors"
                >
                  <FaExternalLinkAlt size={12} />
                  Ver en GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
