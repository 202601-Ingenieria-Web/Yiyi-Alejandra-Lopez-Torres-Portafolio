import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import IconLink from "@/components/atoms/IconLink";

export default function Footer() {
  return (
    <footer className="bg-[#3d0019] text-rose-200 py-8 px-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-white text-sm">Yiyi Alejandra Lopez Torres</p>
          <p className="text-xs text-rose-400 mt-0.5">Estudiante de Ingeniería de Sistemas · Especialista en Datos</p>
        </div>

        {/* Redes sociales visibles en mobile (el sidebar derecho está oculto) */}
        <div className="flex gap-3">
          <IconLink href="https://github.com/yiyilopez" label="GitHub" className="bg-rose-800 text-rose-300 hover:bg-rose-400 hover:text-white">
            <FaGithub size={16} />
          </IconLink>
          <IconLink href="https://linkedin.com/in/yiyi-lopez" label="LinkedIn" className="bg-rose-800 text-rose-300 hover:bg-rose-400 hover:text-white">
            <FaLinkedin size={16} />
          </IconLink>
          <IconLink href="mailto:yiyilopez030@gmail.com" label="Email" className="bg-rose-800 text-rose-300 hover:bg-rose-400 hover:text-white">
            <FaEnvelope size={16} />
          </IconLink>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-rose-800 text-center text-xs text-rose-500 flex items-center justify-center gap-1.5">
        <span>© 2026 Hecho con</span>
        <FaHeart className="text-rose-400" size={11} />
        <span>en Medellín, Colombia</span>
      </div>
    </footer>
  );
}
