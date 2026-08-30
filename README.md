# 🏛️ THE GOAT Portfolio — Gabriel Alexander González García

> **Ultra-High Performance Engineering Portfolio**: Construido bajo el estándar **Lighthouse 100/100**, Server Components First, diseño *Obsidian & Glass* con aceleración por GPU y cero saltos de diseño (CLS = 0).

---

## ⚡ Estado Actual del Proyecto: **Fase 2 & 3 Completadas**

- **Rama Activa**: `gabo-dev`
- **Arquitectura**: Next.js 16 (App Router) + React 19 + TypeScript (Strict) + Tailwind CSS v4.
- **Rendimiento**: Server Components por defecto, carga de fuentes optimizada con `display: swap`, SVGs inline ligeros y utilidades CSS puras.
- **Status de Código**: **0 Errores, 0 Warnings** en auditoría de problemas IDE.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología | Propósito |
| :--- | :--- | :--- |
| **Framework** | Next.js 16.3.3 (App Router) | Renderizado híbrido ultra-rápido y Server Components |
| **UI & Runtime** | React 19.2.8 + TypeScript | Tipado estricto y componentes atómicos |
| **Estilos** | Tailwind CSS v4 (`@theme`) | Tokens Obsidian, Glassmorphism y animaciones GPU |
| **Package Manager** | `pnpm` | Gestión de dependencias rápida y aislada |
| **Despliegue & CI/CD** | Vercel | Previews automáticas en `gabo-dev` y prod en `main` |

---

## 📂 Estructura Modular del Proyecto

```text
src/
├── app/
│   ├── globals.css           # Tokens de diseño Obsidian, utilidades glass y animaciones
│   ├── layout.tsx            # RootLayout con SEO Schema.org Person JSON-LD y fuentes Geist
│   ├── page.tsx              # HomePage modular
│   ├── robots.ts             # Directivas de rastreo para buscadores
│   └── sitemap.ts            # Mapa del sitio optimizado
├── components/
│   ├── core/
│   │   ├── NavbarFloating.tsx     # Navbar flotante con blur dinámico y menú móvil
│   │   ├── ObsidianBackground.tsx # Gradientes de luz ambiental y grid sin JS
│   │   └── FooterMinimal.tsx      # Footer con métricas y enlaces
│   ├── sections/
│   │   ├── HeroSection.tsx        # Propuesta de valor, badges y CTAs
│   │   ├── MetricsRibbon.tsx      # Métricas de impacto (+20k DAU, O(1), etc.)
│   │   ├── ExperienceTimeline.tsx # Experiencia en producción (Obeltech & HPH)
│   │   ├── ProjectsGrid.tsx       # Sistemas y arquitecturas destacadas
│   │   ├── TechMatrix.tsx         # Matriz de tecnologías y certificación universitaria
│   │   └── ContactSection.tsx     # Tarjeta de contacto con copiado rápido de email
│   └── ui/
│       ├── BrandIcons.tsx         # Iconos SVG nativos (GitHub, LinkedIn)
│       └── SectionHeader.tsx      # Encabezados de sección consistentes
├── data/
│   └── portfolioData.ts      # Datos reales extraídos y tipados
├── lib/
│   └── utils.ts              # Composición segura cn() con clsx y tailwind-merge
└── types/
    └── index.ts              # Definiciones TypeScript de datos y componentes
```

---

## 🚀 Comandos de Ejecución

```bash
# 1. Instalar dependencias
pnpm install

# 2. Compilar para producción (validación de tipos y rutas)
pnpm build

# 3. Iniciar servidor de desarrollo local
pnpm dev
```
