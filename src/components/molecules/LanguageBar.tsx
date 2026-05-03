// Reutilizo este componente tanto para idiomas como para habilidades técnicas
import ProgressBar from "@/components/atoms/ProgressBar";

interface LanguageBarProps {
  name: string;
  percentage: number;
  level?: string;
}

export default function LanguageBar({ name, percentage, level }: LanguageBarProps) {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-rose-100 font-medium">{name}</span>
        <span className="text-xs text-rose-300">{level ?? `${percentage}%`}</span>
      </div>
      <ProgressBar percentage={percentage} />
    </div>
  );
}
