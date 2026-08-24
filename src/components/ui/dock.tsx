import React from "react";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function HeroDock() {
  return (
    <div className="relative w-full">
      <div className="flex items-center justify-center">
        <Dock />
      </div>

      <style>{`
        @keyframes marqueeLeft { 0% { transform: translateX(-60%); } 100% { transform: translateX(0%); } }
        @keyframes marqueeRight { 0% { transform: translateX(60%); } 100% { transform: translateX(0%); } }
        .animate-marquee-left { animation: marqueeLeft 8s linear infinite alternate; }
        .animate-marquee-right { animation: marqueeRight 8s linear infinite alternate; }

        .hover-halo{position:relative}
        .hover-halo::after{content:"";position:absolute;inset:-2px;border-radius:inherit;opacity:0;transition:opacity .25s, transform .25s;box-shadow:0 0 0 0 rgba(212,175,55,.3),0 12px 30px -10px rgba(0,0,0,.82)}
        .hover-halo:hover::after{opacity:1;}
        .tooltip{opacity:0;transform:translateY(6px);transition:opacity .2s, transform .2s}
        .group:hover .tooltip{opacity:1;transform:translateY(0)}

        .dock-icon{transition:color .2s ease, filter .2s ease}
        .group:hover .dock-icon--github{color:rgb(246,211,101);filter:drop-shadow(0 0 8px rgba(246,211,101,.45))}
        .group:hover .dock-icon--linkedin{color:rgb(212,175,55);filter:drop-shadow(0 0 8px rgba(212,175,55,.45))}
        .group:hover .dock-icon--instagram{color:rgb(245,207,112);filter:drop-shadow(0 0 8px rgba(245,207,112,.45))}
        .group:hover .dock-icon--email{color:rgb(253,230,138);filter:drop-shadow(0 0 8px rgba(253,230,138,.45))}
      `}</style>
    </div>
  );
}

function Dock() {
  return (
    <div className="relative flex items-center gap-2 scale-90 sm:gap-4 sm:scale-95">
      <div className="flex items-center gap-3 rounded-[28px] bg-gradient-to-r from-black/90 via-[#071a33]/90 to-[#0f2f55]/90 px-3 py-2 shadow-2xl shadow-black/50 ring-1 ring-amber-200/25 backdrop-blur-lg sm:gap-5 sm:rounded-[48px] sm:px-6 sm:py-3">
        <DockIcon icon={Github} label="GitHub" href="https://github.com/SyedAshraf49" tone="github" />
        <DockIcon icon={Linkedin} label="LinkedIn" href="https://www.linkedin.com/in/syed-ashraf49" tone="linkedin" />
        <DockIcon icon={Instagram} label="Instagram" href="https://www.instagram.com/asher49_" tone="instagram" />
        <DockIcon icon={Mail} label="Email" href="mailto:galladeashraf@gmail.com" tone="email" />
      </div>
    </div>
  );
}

function DockIcon({
  icon: Icon,
  label,
  href,
  tone,
}: {
  icon: any;
  label: string;
  href: string;
  tone: 'github' | 'linkedin' | 'instagram' | 'email';
}) {
  return (
    <a
      className="hover-halo group relative grid h-12 w-12 place-items-center rounded-xl ring-1 ring-amber-200/30 bg-gradient-to-b from-amber-200/15 via-[#12345c]/55 to-black/80 backdrop-blur-xl shadow-lg shadow-black/35 transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.05] hover:ring-amber-200/60 sm:h-14 sm:w-14"
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      <Icon className={`dock-icon dock-icon--${tone} h-5 w-5 text-amber-100 transition-transform duration-200 group-hover:scale-110`} strokeWidth={2.1} />
      <span className="tooltip pointer-events-none absolute -bottom-6 translate-y-1/2 text-[9px] tracking-wide text-amber-100/80 sm:text-[10px]">
        {label}
      </span>
    </a>
  );
}