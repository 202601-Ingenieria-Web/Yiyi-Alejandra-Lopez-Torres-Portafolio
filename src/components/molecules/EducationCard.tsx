interface EducationCardProps {
  institution: string;
  dates: string;
  title: string;
  description: string;
}

export default function EducationCard({ institution, dates, title, description }: EducationCardProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 py-5 border-b border-rose-100 last:border-0">
      <div className="sm:w-1/3">
        <p className="font-semibold text-rose-800 text-sm leading-snug">{institution}</p>
        <span className="inline-block mt-1 text-xs bg-rose-100 text-rose-600 px-2.5 py-0.5 rounded-full font-medium">
          {dates}
        </span>
      </div>
      <div className="sm:w-2/3">
        <p className="font-semibold text-gray-800 text-sm">{title}</p>
        <p className="text-gray-500 text-xs mt-1 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
