import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import IconLink from "@/components/atoms/IconLink";

export default function RightSidebar() {
  return (
    <aside className="w-16 h-full bg-white border-l border-rose-100 flex-shrink-0 flex flex-col items-center justify-center gap-4">
      <span className="text-xs text-rose-300 font-semibold tracking-widest [writing-mode:vertical-rl] rotate-180 mb-2">
        Redes
      </span>

      <IconLink href="https://github.com/yiyilopez" label="GitHub">
        <FaGithub size={18} />
      </IconLink>

      <IconLink href="https://linkedin.com/in/yiyi-lopez" label="LinkedIn">
        <FaLinkedin size={18} />
      </IconLink>

      <IconLink href="mailto:yiyilopez030@gmail.com" label="Email">
        <FaEnvelope size={18} />
      </IconLink>
    </aside>
  );
}
