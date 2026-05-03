interface SkillTagProps {
  label: string;
}

export default function SkillTag({ label }: SkillTagProps) {
  return (
    <span className="flex items-center gap-1.5 text-xs text-rose-200">
      <span className="text-rose-400">•</span>
      {label}
    </span>
  );
}
