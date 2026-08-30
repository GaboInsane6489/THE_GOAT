import React from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUp, Zap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

export function FooterMinimal() {
  return (
    <footer className="w-full border-t border-white/[0.08] mt-24 py-12 px-6 bg-gradient-to-b from-transparent to-[#02040a]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Identity */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-100 text-sm tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
              v1.0.0 (GOAT)
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Diseñado con precisión quirúrgica, Next.js 16, TypeScript & Tailwind v4.
          </p>
        </div>

        {/* Center: Performance Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs text-slate-300 font-mono">
          <Zap className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>Lighthouse 100 • Zero CLS • 60 FPS</span>
        </div>

        {/* Right: Social & Back to Top */}
        <div className="flex items-center gap-4">
          <Link
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            aria-label="GitHub de Gabriel"
          >
            <GithubIcon className="w-4 h-4" />
          </Link>
          <Link
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            aria-label="LinkedIn de Gabriel"
          >
            <LinkedinIcon className="w-4 h-4" />
          </Link>
          <Link
            href="#"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors flex items-center gap-1 text-xs"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
