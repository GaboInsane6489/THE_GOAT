import React from "react";
import { EXPERIENCES_DATA } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section className="w-full flex flex-col" id="experiencia">
      <SectionHeader
        badge="Trayectoria Profesional"
        title="Experiencia en Producción & Sistemas"
        subtitle="Construcción de arquitecturas empresariales, optimización de algoritmos de alta concurrencia e integración de flujos de IA."
      />

      <div className="relative border-l border-white/[0.1] ml-4 sm:ml-8 pl-6 sm:pl-8 flex flex-col gap-12">
        {EXPERIENCES_DATA.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Node Icon */}
            <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border border-white/20 flex items-center justify-center text-sky-400 group-hover:border-sky-400 group-hover:scale-110 transition-all duration-200">
              <Briefcase className="w-3 h-3" />
            </div>

            {/* Experience Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col gap-5">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.06]">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    {exp.isCurrent && (
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        Rol Actual
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-medium text-sky-400">
                    {exp.company}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span className="hidden sm:flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Achievements List */}
              <ul className="flex flex-col gap-2.5 text-sm text-slate-300">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5 opacity-80" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-300 border border-white/[0.08] hover:border-white/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
