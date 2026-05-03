// Barra de progreso reutilizable para idiomas y habilidades

interface ProgressBarProps {
  percentage: number;
}

export default function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <div className="w-full bg-rose-900/40 rounded-full h-1.5">
      <div
        className="bg-rose-300 h-1.5 rounded-full transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
