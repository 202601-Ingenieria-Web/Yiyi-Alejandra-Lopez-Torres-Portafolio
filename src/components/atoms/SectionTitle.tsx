// Título de sección — tiene dos variantes: para el sidebar y para el contenido central

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  variant?: "sidebar" | "center";
}

export default function SectionTitle({ title, subtitle, variant = "center" }: SectionTitleProps) {
  if (variant === "sidebar") {
    return (
      <h3 className="text-xs font-semibold uppercase tracking-widest text-rose-300 mt-6 mb-3 border-b border-rose-800 pb-1">
        {title}
      </h3>
    );
  }

  return (
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-rose-800">{title}</h2>
      {subtitle && <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">{subtitle}</p>}
      <div className="flex items-center justify-center gap-2 mt-3">
        <div className="h-px w-16 bg-rose-200" />
        <div className="w-2 h-2 rounded-full bg-rose-400" />
        <div className="h-px w-16 bg-rose-200" />
      </div>
    </div>
  );
}
