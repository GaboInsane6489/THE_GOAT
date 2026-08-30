"use client";

import React, { useState } from "react";
import { FEATURED_PROJECTS } from "@/data/portfolioData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FolderGit2, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const categories = ["Todos", "Enterprise RBAC", "Full Stack"];

  const filteredProjects =
    selectedCategory === "Todos"
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section className="w-full flex flex-col" id="proyectos">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <SectionHeader
          badge="Proyectos & Arquitecturas"
          title="Sistemas Destacados"
          subtitle="Soluciones de ingeniería diseñadas con foco en escalabilidad, modularidad y seguridad."
        />

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/[0.08] self-start md:self-auto mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer",
                selectedCategory === cat
                  ? "bg-white/[0.12] text-white shadow-sm font-semibold border border-white/[0.15]"
                  : "text-slate-400 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col justify-between gap-6 group hover:-translate-y-1 transition-all duration-200"
          >
            <div className="flex flex-col gap-4">
              {/* Category & Icon */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  {project.category}
                </span>
                <div className="p-2 rounded-xl bg-white/[0.04] text-slate-400 group-hover:text-white transition-colors">
                  <FolderGit2 className="w-5 h-5" />
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Impact Highlights */}
              <div className="flex flex-col gap-2 pt-2 border-t border-white/[0.06]">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Aspectos Técnicos Clave
                </span>
                <ul className="flex flex-col gap-1.5 text-xs text-slate-300">
                  {project.impactMetrics.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
