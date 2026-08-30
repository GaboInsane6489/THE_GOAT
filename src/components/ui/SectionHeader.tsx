import React from "react";

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
}

export function SectionHeader({ badge, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-2 mb-10 text-left">
      <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-mono text-sky-400">
        <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
        {badge}
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
        {title}
      </h2>
      <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
        {subtitle}
      </p>
    </div>
  );
}
