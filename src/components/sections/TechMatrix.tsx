import React from "react";
import { TECH_RADAR, CERTIFICATIONS_DATA } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Award, Code2, Layers, Cpu, Database } from "lucide-react";

export function TechMatrix() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-4 h-4 text-sky-400" />;
      case 1:
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 2:
        return <Cpu className="w-4 h-4 text-indigo-400" />;
      default:
        return <Layers className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <section className="w-full flex flex-col gap-12" id="stack">
      <SectionHeader
        badge="Dominio Técnico"
        title="Stack & Especialización"
        subtitle="Herramientas y patrones arquitectónicos aplicados en desarrollo frontend, backend, automatizaciones con IA y bases de datos."
      />

      {/* Tech Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TECH_RADAR.map((cat, idx) => (
          <div
            key={cat.category}
            className="glass-panel p-6 rounded-2xl flex flex-col gap-4"
          >
            <div className="flex items-center gap-2.5 pb-2 border-b border-white/[0.06]">
              <div className="p-2 rounded-lg bg-white/[0.05]">
                {getCategoryIcon(idx)}
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">
                {cat.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/20 transition-all text-xs font-medium text-slate-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* University Endorsed Certification Showcase */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-sky-500/20 relative overflow-hidden">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 border border-sky-500/30 text-sky-400 shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="text-base sm:text-lg font-bold text-white">
                {CERTIFICATIONS_DATA[0].title}
              </h4>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-sky-400/10 text-sky-400 border border-sky-400/20">
                {CERTIFICATIONS_DATA[0].hours} Horas Académicas
              </span>
            </div>
            <span className="text-xs font-medium text-slate-400">
              {CERTIFICATIONS_DATA[0].issuer} • {CERTIFICATIONS_DATA[0].location} ({CERTIFICATIONS_DATA[0].period})
            </span>
            <p className="text-xs text-slate-300 pt-1 leading-relaxed max-w-2xl">
              {CERTIFICATIONS_DATA[0].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
