import { ReactNode } from "react";

interface KnowledgeCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function KnowledgeCard({ title, description, icon }: KnowledgeCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-rose-100 hover:shadow-md hover:border-rose-300 transition-all duration-200 group">
      <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-3 group-hover:bg-rose-500 transition-colors duration-200">
        <span className="text-rose-500 text-xl group-hover:text-white transition-colors duration-200">
          {icon}
        </span>
      </div>
      <h4 className="font-semibold text-rose-900 mb-1.5 text-sm">{title}</h4>
      <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
    </div>
  );
}
