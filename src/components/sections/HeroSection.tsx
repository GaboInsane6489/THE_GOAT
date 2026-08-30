import React from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowRight, Sparkles, Shield, Cpu } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { TerminalSimulator } from "@/components/interactive/TerminalSimulator";

export function HeroSection() {
  return (
    <section className="relative pt-4 sm:pt-8 flex flex-col gap-10" id="inicio">
      {/* Top Grid: Value Proposition + Interactive Terminal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Headlines & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-panel text-xs font-mono text-slate-200 border-white/[0.12]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span>{PERSONAL_INFO.statusMessage}</span>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              <span className="gradient-text-hero block">Gabriel Alexander</span>
              <span className="gradient-text-accent block">González García</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Interactive Quick CTAs & Social Links */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            <Link
              href="#proyectos"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-950 font-semibold text-sm hover:bg-slate-200 transition-all duration-200 shadow-lg shadow-white/10 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explorar Proyectos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-panel text-slate-200 font-semibold text-sm hover:text-white hover:border-white/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Conectar / Contacto</span>
            </Link>
            <div className="flex items-center gap-2 pl-1">
              <Link
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-panel text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </Link>
              <Link
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-panel text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Terminal Simulator */}
        <div className="lg:col-span-5 w-full">
          <TerminalSimulator />
        </div>
      </div>

      {/* Highlights Capsule / Architecture Pills */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <div className="glass-panel p-4 rounded-2xl flex items-start gap-3.5">
          <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <Shield className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white">RBAC & Seguridad</span>
            <span className="text-xs text-slate-400">Matrices de permisos y protección JWT</span>
          </div>
        </div>

        <div className="glass-panel p-4 rounded-2xl flex items-start gap-3.5">
          <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Cpu className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white">AI Agents & n8n</span>
            <span className="text-xs text-slate-400">Automatizaciones y Gemini API</span>
          </div>
        </div>

        <div className="glass-panel p-4 rounded-2xl flex items-start gap-3.5">
          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white">Alta Concurrencia</span>
            <span className="text-xs text-slate-400">+20k DAU en producción real</span>
          </div>
        </div>
      </div>
    </section>
  );
}
