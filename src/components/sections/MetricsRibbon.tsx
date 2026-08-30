import React from "react";
import { METRICS_DATA } from "@/data/portfolioData";
import { TrendingUp } from "lucide-react";

export function MetricsRibbon() {
  return (
    <section className="w-full flex flex-col gap-6" id="metricas">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {METRICS_DATA.map((metric) => (
          <div
            key={metric.id}
            className="glass-panel p-6 rounded-2xl flex flex-col justify-between gap-4 relative overflow-hidden group"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-sky-500/10 rounded-full blur-xl group-hover:bg-sky-500/20 transition-all duration-300 pointer-events-none" />

            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-sky-400 px-2.5 py-0.5 rounded-full bg-sky-400/10 border border-sky-400/20">
                {metric.highlightText}
              </span>
              <TrendingUp className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {metric.value}
              </span>
              <span className="text-sm font-semibold text-slate-200">
                {metric.label}
              </span>
              <span className="text-xs text-slate-400 leading-normal">
                {metric.sublabel}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
