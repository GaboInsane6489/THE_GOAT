import React from "react";

export function ObsidianBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Dynamic Ambient Glows (GPU Accelerated) */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-sky-600/10 via-indigo-600/10 to-transparent blur-[120px] rounded-full" />
      <div className="absolute top-[35%] -left-32 w-[500px] h-[300px] bg-gradient-to-br from-emerald-600/10 to-transparent blur-[140px] rounded-full" />
      <div className="absolute top-[70%] -right-32 w-[500px] h-[300px] bg-gradient-to-bl from-purple-600/10 to-transparent blur-[140px] rounded-full" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Subtle Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,7,18,0.7)_100%)]" />
    </div>
  );
}
