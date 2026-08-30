"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function NavbarFloating() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Experiencia", href: "#experiencia" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Stack Técnico", href: "#stack" },
    { name: "Métricas", href: "#metricas" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 sm:px-6">
      <nav className="w-full max-w-5xl glass-nav rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between shadow-2xl transition-all duration-300">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg"
          aria-label="Gabriel González García - Home"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm tracking-tight shadow-md group-hover:scale-105 transition-transform duration-200">
            GG
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-slate-100 group-hover:text-white transition-colors">
              {PERSONAL_INFO.shortName}
            </span>
            <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Junior Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors duration-150"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button & Status */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold bg-white/[0.08] hover:bg-white/[0.15] text-slate-200 hover:text-white border border-white/[0.1] rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
          aria-label="Abrir menú de navegación"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-4 right-4 glass-nav rounded-2xl p-4 flex flex-col gap-2 md:hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/[0.08] rounded-xl transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between">
            <span className="text-xs text-emerald-400 font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Disponible para proyectos
            </span>
            <Link
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-sky-400 flex items-center gap-1 font-semibold"
            >
              LinkedIn <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
