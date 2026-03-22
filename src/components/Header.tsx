"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

interface MenuItem {
  label: string;
  href: string;
  external?: boolean;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Nosotros",
    href: "https://drive.google.com/file/d/1w7WGG2LIhDytAiHl4TPrGpvmsjuNawqM/view?usp=sharing",
    external: true,
    children: [
      { label: "Cuenta Pública", href: "https://docs.google.com/document/d/1CbpJz-MJ8l6MrwWWVL-WXaho4iFcOkLE/edit?usp=sharing&ouid=100203289150873687976&rtpof=true&sd=true", external: true },
      { label: "Proyecto Educativo", href: "https://drive.google.com/file/d/11Z6Bmyxm-wIpYu80G1HfGgJ7lIHQMRfC/view?usp=sharing", external: true },
      {
        label: "Planes por Normativa", href: "#",
        children: [
          { label: "Plan de formación ciudadana", href: "/pdfs/Plan-de-formacion-ciudadana-2025.pdf" },
          { label: "Plan de afectividad, sexualidad y género", href: "/pdfs/PROGRAMA-AFECTIVIDAD-SEXUALIDAD-Y-GENERO-2025.pdf" },
          { label: "Plan según sellos institucionales", href: "https://drive.google.com/file/d/1mxMLiFCrU-AK5U6y_kibHMPbB-Nk0xD7/view?usp=sharing", external: true },
          { label: "Plan de seguridad escolar", href: "/pdfs/PISE-plan-de-seguridad-2025.pdf" },
          { label: "Plan de gestión convivencia escolar", href: "/pdfs/Plan-de-gestion-de-la-Convivencia-Escolar-2025.pdf" },
        ],
      },
      { label: "Equipo Directivo", href: "/equipo-directivo" },
    ],
  },
  {
    label: "Área Pedagógica", href: "#",
    children: [
      { label: "Reglamento Evaluación 2025", href: "/pdfs/REPE-2025.pdf" },
      { label: "Metas Académicas", href: "https://drive.google.com/file/d/1ycFbFD2mvjHG4RKtK4VbQNfxmrba5CwK/view?usp=sharing", external: true },
      { label: "Plan de evaluación", href: "https://drive.google.com/drive/folders/1nCTF85nSZQ5p1aI8WWSBeIz6gvAPO4tZ?usp=drive_link", external: true },
      { label: "Calendario de evaluación", href: "https://drive.google.com/drive/folders/1WtNb5mGTx5kS6oreQLGEwT9w5kVIkwxY?usp=drive_link", external: true },
    ],
  },
  {
    label: "Convivencia Escolar", href: "#",
    children: [
      { label: "Reglamento interno", href: "https://docs.google.com/document/d/1aD7IsrrJaSXMYseRGCf1C2VYE8b4hf-5/edit?usp=sharing&ouid=111480405254883090487&rtpof=true&sd=true", external: true },
    ],
  },
  { label: "Contacto", href: "/contacto" },
  {
    label: "Docentes", href: "/profesores-basica",
    children: [
      { label: "Básica", href: "/profesores-basica" },
      { label: "Media", href: "/profesores-media" },
    ],
  },
  { label: "Correo", href: "https://colegiostellamaris.cl/webmail", external: true },
];

function NavLink({ item, className }: { item: MenuItem; className: string }) {
  const props = item.external
    ? { href: item.href, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};
  const Tag = item.external ? "a" : Link;
  return <Tag {...props} href={item.href} className={className}>{item.label}</Tag>;
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubs, setOpenSubs] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      scrolled ? "glass shadow-lg" : "bg-transparent"
    }`}>
      {/* Top micro-bar */}
      <div className={`transition-all duration-500 overflow-hidden ${
        scrolled ? "h-0 opacity-0" : "opacity-100"
      }`}>
        <div className="bg-primary-dark/90 text-white/80 text-[10px] sm:text-xs">
          <div className="container-wide py-1.5 sm:py-0 sm:h-9 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-0.5 sm:gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2 sm:gap-4">
              <a href="tel:+56225587611" className="hover:text-white transition-colors flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(201,162,39,0.45)]" />
                +56 2 2558 7611
              </a>
              <span className="text-white/40">|</span>
              <a href="mailto:contacto@colegiostellamaris.cl" className="hover:text-white transition-colors">
                contacto@colegiostellamaris.cl
              </a>
            </div>
            <span className="text-accent font-semibold tracking-wide text-[9px] sm:text-[10px] uppercase">
              Colegio Científico Humanista · CON SEP / SIN PIE
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-wide h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Image src="/images/logo.png" alt="Colegio Stella Maris" width={44} height={44} className="h-10 w-auto transition-transform group-hover:scale-105" />
            <div className="absolute -inset-1 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className={`font-heading font-bold text-lg hidden sm:block transition-colors ${scrolled ? "text-dark" : "text-white"}`}>
            Stella Maris
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {menuItems.map((item) => (
            <div key={item.label} className="group relative">
              <NavLink
                item={item}
                className={`px-3 py-2 text-[13px] font-semibold uppercase tracking-wider transition-colors rounded-lg
                  ${scrolled ? "text-dark/70 hover:text-primary hover:bg-primary/5" : "text-white/80 hover:text-white hover:bg-white/10"}`}
              />
              {item.children && (
                <>
                  <svg className={`inline w-3 h-3 ml-0.5 transition-transform group-hover:rotate-180 ${scrolled ? "text-dark/40" : "text-white/40"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 pt-2 absolute top-full left-0">
                    <div className="glass rounded-2xl shadow-card min-w-[260px] py-2 border border-gray-100">
                      {item.children.map((child) => (
                        <div key={child.label} className="relative group/sub">
                          <NavLink item={child} className="flex items-center justify-between px-4 py-2.5 text-sm text-dark/70 hover:text-primary hover:bg-primary/5 transition-colors" />
                          {child.children && (
                            <div className="invisible group-hover/sub:visible opacity-0 group-hover/sub:opacity-100 transition-all duration-300 absolute left-full top-0 pl-1">
                              <div className="glass rounded-2xl shadow-card min-w-[280px] py-2 border border-gray-100">
                                {child.children.map((sub) => (
                                  <NavLink key={sub.label} item={sub} className="block px-4 py-2.5 text-sm text-dark/70 hover:text-primary hover:bg-primary/5 transition-colors" />
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className={`lg:hidden p-2 rounded-xl transition-colors ${scrolled ? "text-dark hover:bg-gray-100" : "text-white hover:bg-white/10"}`} aria-label="Menú">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-500 overflow-hidden ${mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="glass mx-4 mb-4 rounded-2xl shadow-card p-4 space-y-1 max-h-[70vh] overflow-y-auto">
          {menuItems.map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between">
                <NavLink item={item} className="block px-3 py-2.5 text-sm font-medium text-dark/80 hover:text-primary rounded-lg hover:bg-primary/5 transition-colors flex-1" />
                {item.children && (
                  <button onClick={() => setOpenSubs((p) => ({ ...p, [item.label]: !p[item.label] }))} className="p-2 text-dark/40">
                    <svg className={`w-4 h-4 transition-transform ${openSubs[item.label] ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                )}
              </div>
              {item.children && openSubs[item.label] && (
                <div className="ml-4 pl-3 border-l-2 border-primary/10 space-y-0.5">
                  {item.children.map((child) => (
                    <NavLink key={child.label} item={child} className="block px-3 py-2 text-sm text-dark/60 hover:text-primary rounded-lg hover:bg-primary/5 transition-colors" />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
