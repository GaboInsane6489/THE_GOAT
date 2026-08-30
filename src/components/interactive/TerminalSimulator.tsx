"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal, Send, Trash2, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface LogEntry {
  type: "input" | "output" | "system";
  text: string;
}

export function TerminalSimulator() {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      type: "system",
      text: "⚡ Zeus Terminal v1.0.0 — Gabriel González [Junior Software Engineer]",
    },
    {
      type: "system",
      text: "Escribe 'help' o pulsa un comando rápido para explorar la arquitectura.",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const executeCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    const newLogs: LogEntry[] = [...logs, { type: "input", text: `$ ${cleanCmd}` }];

    switch (cleanCmd) {
      case "help":
        newLogs.push({
          type: "output",
          text: "Comandos disponibles:\n  • skills       - Muestra el stack técnico clave\n  • exp          - Resumen de experiencia en producción\n  • metrics      - Métricas de rendimiento y optimización\n  • contact      - Información de contacto directa\n  • clear        - Limpia la consola",
        });
        break;
      case "skills":
        newLogs.push({
          type: "output",
          text: "Frontend: Next.js (App Router), React 19, TypeScript, Tailwind v4, Astro\nBackend: FastAPI, Node.js, PostgreSQL, Supabase, MongoDB, GraphQL\nSeguridad & AI: RBAC, JWT, Clean Architecture, Gemini API, n8n",
        });
        break;
      case "exp":
      case "experience":
        newLogs.push({
          type: "output",
          text: "1. Obeltech C.A. (Ago 2026 - Presente): RBAC granular, visores Next.js/Tailwind, agentes IA (Gemini API), pipelines n8n, hashing SHA-256.\n2. HarryPotterHead (Nov 2025 - Mar 2026): +20k DAU, refactor SQL atómico O(n)->O(1), gamificación en tiempo real, tooltips AJAX.",
        });
        break;
      case "metrics":
        newLogs.push({
          type: "output",
          text: "✓ +20,000 DAU en producción real\n✓ O(n) → O(1) Optimización SQL atómica\n✓ 100% Rutas protegidas por RBAC & JWT\n✓ 100/100 Lighthouse Performance & CLS 0",
        });
        break;
      case "contact":
        newLogs.push({
          type: "output",
          text: `Email: ${PERSONAL_INFO.email}\nLinkedIn: ${PERSONAL_INFO.linkedin}\nGitHub: ${PERSONAL_INFO.github}`,
        });
        break;
      case "clear":
        setLogs([]);
        setInput("");
        return;
      default:
        newLogs.push({
          type: "output",
          text: `Comando no reconocido: '${cleanCmd}'. Escribe 'help' para ver la lista.`,
        });
        break;
    }

    setLogs(newLogs);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(input);
    }
  };

  const quickChips = [
    { label: "help", cmd: "help" },
    { label: "skills", cmd: "skills" },
    { label: "exp", cmd: "exp" },
    { label: "metrics", cmd: "metrics" },
    { label: "contact", cmd: "contact" },
  ];

  return (
    <div className="w-full glass-panel rounded-2xl overflow-hidden border-white/[0.1] shadow-2xl flex flex-col font-mono text-xs">
      {/* Terminal Header */}
      <div className="px-4 py-3 bg-slate-950/80 border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[11px] text-slate-400 pl-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-sky-400" />
            gabriel@olympus: ~
          </span>
        </div>

        <button
          type="button"
          onClick={() => setLogs([])}
          className="text-slate-500 hover:text-slate-300 transition-colors p-1"
          title="Limpiar consola"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 h-64 overflow-y-auto flex flex-col gap-2 text-slate-300 bg-slate-950/50">
        {logs.map((log, i) => (
          <div key={i} className="leading-relaxed whitespace-pre-line">
            {log.type === "system" && (
              <span className="text-slate-400 font-semibold">{log.text}</span>
            )}
            {log.type === "input" && (
              <span className="text-sky-400 font-bold">{log.text}</span>
            )}
            {log.type === "output" && (
              <span className="text-slate-200">{log.text}</span>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Quick Action Chips & Input Form */}
      <div className="p-3 bg-slate-950/80 border-t border-white/[0.08] flex flex-col gap-2.5">
        {/* Quick Chips */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-sky-400" />
            Quick:
          </span>
          {quickChips.map((chip) => (
            <button
              key={chip.cmd}
              type="button"
              onClick={() => executeCommand(chip.cmd)}
              className="px-2.5 py-1 rounded-md bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 text-[11px] border border-white/[0.08] hover:border-white/20 transition-colors cursor-pointer active:scale-95"
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="flex items-center gap-2">
          <span className="text-sky-400 font-bold">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe un comando (ej: skills)..."
            className="flex-1 bg-transparent text-white placeholder:text-slate-600 focus:outline-none text-xs"
          />
          <button
            type="button"
            onClick={() => executeCommand(input)}
            className="p-1.5 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-400 transition-colors"
            title="Enviar comando"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
