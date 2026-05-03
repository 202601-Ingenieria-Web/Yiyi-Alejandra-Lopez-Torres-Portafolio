import SectionTitle from "@/components/atoms/SectionTitle";
import PortfolioCard from "@/components/molecules/PortfolioCard";
import { portfolio } from "@/data/portfolioData";

export default function PortfolioSection() {
  return (
    <section className="py-10 bg-rose-50">
      <div className="px-8">
        <SectionTitle
          title="Portafolio"
          subtitle="Proyectos que construí o lideré — sistemas de datos, dashboards y automatización."
        />
      </div>

      {/* Scroll horizontal para los proyectos */}
      <div className="flex gap-5 overflow-x-auto portfolio-scroll pb-4 px-8">
        {portfolio.map((project) => (
          <PortfolioCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            details={project.details}
            link={project.link}
            tags={project.tags}
            projectNumber={project.id}
          />
        ))}
      </div>
    </section>
  );
}
