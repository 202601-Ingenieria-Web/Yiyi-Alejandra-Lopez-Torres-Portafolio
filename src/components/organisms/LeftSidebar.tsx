// Sidebar fijo izquierdo: muestra foto, nombre, contacto, idiomas, habilidades y skills extra.
// Todos los datos vienen del archivo central portfolioData.ts para facilitar actualizaciones.
import Image from "next/image";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
import SectionTitle from "@/components/atoms/SectionTitle";
import SkillTag from "@/components/atoms/SkillTag";
import ContactItem from "@/components/molecules/ContactItem";
import LanguageBar from "@/components/molecules/LanguageBar";
import { personalInfo, languages, programmingSkills, extraSkills } from "@/data/portfolioData";

export default function LeftSidebar() {
  return (
    <aside className="w-64 h-full bg-[#3d0019] overflow-y-auto flex-shrink-0 flex flex-col">
      {/* Foto, nombre y título */}
      <div className="flex flex-col items-center pt-8 pb-4 px-5">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-rose-400 shadow-lg mb-3">
          <Image
            src={personalInfo.photo}
            alt={personalInfo.name}
            fill
            className="object-cover object-top"
          />
        </div>
        <h2 className="text-white font-semibold text-sm text-center leading-snug">
          {personalInfo.name}
        </h2>
        <span className="text-rose-300 text-xs mt-1 text-center">{personalInfo.title}</span>
        <span className="text-rose-400 text-xs mt-0.5 text-center">{personalInfo.subtitle}</span>
      </div>

      <div className="px-5 pb-6">
        {/* Datos de contacto */}
        <SectionTitle title="Contacto" variant="sidebar" />
        <div className="space-y-1">
          <ContactItem icon={<FaMapMarkerAlt size={11} />} text={personalInfo.contact.city} />
          <ContactItem
            icon={<FaPhone size={11} />}
            text={personalInfo.contact.phone}
            href={`tel:${personalInfo.contact.phone}`}
          />
          <ContactItem
            icon={<FaEnvelope size={11} />}
            text={personalInfo.contact.email}
            href={`mailto:${personalInfo.contact.email}`}
          />
          <ContactItem
            icon={<FaLinkedin size={11} />}
            text={personalInfo.contact.linkedin}
            href={`https://${personalInfo.contact.linkedin}`}
          />
        </div>

        {/* Idiomas */}
        <SectionTitle title="Idiomas" variant="sidebar" />
        {languages.map((lang) => (
          <LanguageBar
            key={lang.name}
            name={lang.name}
            percentage={lang.percentage}
            level={lang.level}
          />
        ))}

        {/* Habilidades técnicas */}
        <SectionTitle title="Habilidades Técnicas" variant="sidebar" />
        {programmingSkills.map((skill) => (
          <LanguageBar key={skill.name} name={skill.name} percentage={skill.percentage} />
        ))}

        {/* Habilidades extra */}
        <SectionTitle title="Habilidades Extra" variant="sidebar" />
        <div className="grid grid-cols-2 gap-y-1.5 gap-x-2">
          {extraSkills.map((skill) => (
            <SkillTag key={skill} label={skill} />
          ))}
        </div>
      </div>
    </aside>
  );
}
