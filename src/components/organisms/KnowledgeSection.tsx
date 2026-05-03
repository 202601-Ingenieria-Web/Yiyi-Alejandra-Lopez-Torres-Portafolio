// Sección de conocimientos: renderiza un grid de KnowledgeCards.
// Los íconos se mapean por string desde portfolioData para mantener los datos serializables.
import { ReactNode } from "react";
import {
  FaChartBar,
  FaPython,
  FaDatabase,
  FaCheckCircle,
  FaTable,
  FaMicrochip,
} from "react-icons/fa";
import SectionTitle from "@/components/atoms/SectionTitle";
import KnowledgeCard from "@/components/molecules/KnowledgeCard";
import { knowledge } from "@/data/portfolioData";

// Mapeo de íconos por tipo de conocimiento
const iconMap: Record<string, ReactNode> = {
  chart: <FaChartBar />,
  code: <FaPython />,
  database: <FaDatabase />,
  check: <FaCheckCircle />,
  bar: <FaTable />,
  cpu: <FaMicrochip />,
};

export default function KnowledgeSection() {
  return (
    <section className="px-8 py-10 bg-rose-50">
      <SectionTitle
        title="Mis Conocimientos"
        subtitle="Herramientas y disciplinas que estoy aprendiendo y aplicando."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {knowledge.map((item) => (
          <KnowledgeCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={iconMap[item.icon]}
          />
        ))}
      </div>
    </section>
  );
}
