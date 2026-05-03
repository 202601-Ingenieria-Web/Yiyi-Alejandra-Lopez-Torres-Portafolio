import { ReactNode } from "react";

interface ContactItemProps {
  icon: ReactNode;
  text: string;
  href?: string;
}

export default function ContactItem({ icon, text, href }: ContactItemProps) {
  const inner = (
    <div className="flex items-start gap-2 text-xs text-rose-200 hover:text-white transition-colors py-0.5">
      <span className="text-rose-400 mt-0.5 flex-shrink-0">{icon}</span>
      <span className="break-all leading-relaxed">{text}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </a>
    );
  }

  return inner;
}
