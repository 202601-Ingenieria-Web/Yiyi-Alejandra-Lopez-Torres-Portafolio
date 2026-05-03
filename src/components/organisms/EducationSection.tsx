// Sección educación: itera sobre el array education de portfolioData
// y renderiza una EducationCard por cada entrada.
import SectionTitle from "@/components/atoms/SectionTitle";
import EducationCard from "@/components/molecules/EducationCard";
import { education } from "@/data/portfolioData";

export default function EducationSection() {
  return (
    <section className="px-8 py-10 bg-white">
      <SectionTitle
        title="Educación"
        subtitle="Formación académica y certificaciones."
      />

      <div className="max-w-2xl mx-auto">
        {education.map((item) => (
          <EducationCard
            key={item.id}
            institution={item.institution}
            dates={item.dates}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
