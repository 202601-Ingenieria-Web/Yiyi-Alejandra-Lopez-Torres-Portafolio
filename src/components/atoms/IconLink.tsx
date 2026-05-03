import { ReactNode } from "react";

interface IconLinkProps {
  href: string;
  label: string;
  children: ReactNode;
  className?: string;
}

// Botón de ícono reutilizable — lo uso en el sidebar derecho y en el footer
export default function IconLink({ href, label, children, className = "" }: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`flex items-center justify-center w-10 h-10 rounded-full bg-rose-100 text-rose-600 hover:bg-rose-500 hover:text-white transition-all duration-200 ${className}`}
    >
      {children}
    </a>
  );
}
