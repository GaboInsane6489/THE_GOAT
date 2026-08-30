"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Mail, Copy, Check, ArrowUpRight, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full flex flex-col" id="contacto">
      <SectionHeader
        badge="Iniciemos Conversación"
        title="Contacto & Colaboración"
        subtitle="¿Buscas un ingeniero de software enfocado en alto rendimiento, seguridad y resultados de producción? Hablemos."
      />

      <div className="glass-panel p-8 sm:p-12 rounded-3xl flex flex-col items-center text-center gap-8 relative overflow-hidden">
        {/* Glow Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col items-center gap-3 max-w-xl">
          <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/[0.1] text-sky-400">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            ¿Listo para llevar tus plataformas al siguiente nivel?
          </h3>
          <p className="text-sm text-slate-300">
            Disponible para posiciones de Software Engineer, proyectos de alta concurrencia y consultorías de arquitectura.
          </p>
        </div>

        {/* Copy Email & Direct Action Button */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="w-full sm:flex-1 flex items-center justify-between gap-3 px-5 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-slate-200 text-sm font-mono transition-all duration-200 group active:scale-[0.98]"
            title="Copiar correo electrónico"
          >
            <span className="truncate">{PERSONAL_INFO.email}</span>
            <div className="p-1.5 rounded-lg bg-white/[0.06] group-hover:bg-white/[0.12] transition-colors">
              {copied ? (
                <Check className="w-4 h-4 text-emerald-400 animate-in zoom-in" />
              ) : (
                <Copy className="w-4 h-4 text-slate-400 group-hover:text-white" />
              )}
            </div>
          </button>

          <Link
            href={`mailto:${PERSONAL_INFO.email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-200 transition-all duration-200 shadow-lg shadow-white/10 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Enviar Correo</span>
            <Send className="w-4 h-4" />
          </Link>
        </div>

        {copied && (
          <span className="text-xs font-mono text-emerald-400 -mt-4 animate-in fade-in">
            ✓ Correo copiado al portapapeles
          </span>
        )}

        {/* Social Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06] w-full justify-center">
          <Link
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>Perfil de LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </Link>
          <span className="text-slate-600">•</span>
          <Link
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Repositorios GitHub</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </Link>
        </div>
      </div>
    </section>
  );
}
