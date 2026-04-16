import Image from "next/image";
import Link from "next/link";

const enlaces = [
  { label: "Lista de Útiles", href: "https://drive.google.com/drive/folders/1CpBLKsttxfXcsHhRjgFawZF6bwKM_LgU?usp=drive_link" },
  { label: "Horario de Clases", href: "https://drive.google.com/file/d/1hAJOm5M8cOu_URYhbpwZ01a1SHyUW46m/view?usp=sharing" },
  { label: "Plan Lector 2026", href: "https://drive.google.com/drive/u/0/folders/1nCTF85nSZQ5p1aI8WWSBeIz6gvAPO4tZ" },
  { label: "Talleres", href: "/talleres", internal: true },
];

const destacado = {
  label: "Cuenta Pública 2025",
  href: "/pdfs/cuenta-publica-2025.pdf",
};

export default function CommunicationsSection() {
  return (
    <div className="glass rounded-2xl shadow-card ring-1 ring-primary/[0.06] overflow-hidden h-full flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-dark to-primary px-5 py-3 border-b border-white/10">
        <h2 className="font-heading text-sm font-bold text-white tracking-tight">Enlaces</h2>
      </div>

      {/* Links - stacked vertically for full text visibility */}
      <div className="p-3 space-y-2">
        {enlaces.map((e) => (
          <a
            key={e.label}
            href={e.href}
            target={e.internal ? undefined : "_blank"}
            rel={e.internal ? undefined : "noopener noreferrer"}
            className="group flex items-center gap-2.5 rounded-xl border border-primary/[0.08] bg-white hover:border-primary/20 hover:shadow-sm px-3 py-2.5 transition-all"
          >
            <svg className="w-4 h-4 text-primary/40 group-hover:text-primary flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
            <span className="text-xs font-semibold text-ink/70 group-hover:text-primary transition-colors">{e.label}</span>
          </a>
        ))}
      </div>

      {/* Destacado */}
      <div className="px-3 pb-2">
        <a
          href={destacado.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 px-4 py-3 transition-all shadow-sm hover:shadow-md"
        >
          <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-xs font-bold text-white block">{destacado.label}</span>
            <span className="text-[9px] text-white/70">PDF · Click para abrir</span>
          </div>
          <svg className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </a>
      </div>

      {/* Logo + school info */}
      <div className="flex-1 flex flex-col items-center justify-center p-5 border-t border-primary/[0.05]">
        <Image src="/images/logo.png" alt="Stella Maris" width={64} height={64} className="mb-2 opacity-90" />
        <h3 className="font-heading font-bold text-ink text-xs text-center">Complejo Educacional</h3>
        <h3 className="font-heading font-bold text-primary text-sm text-center mb-2">Stella Maris</h3>
        <p className="text-[10px] text-ink/40 text-center leading-relaxed">
          Formación integral, inclusiva y de calidad. Desde Kinder hasta 4° Medio.
        </p>

        <div className="mt-3 w-full">
          <Link
            href="/contacto"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold px-4 py-2.5 text-xs shadow-sm hover:shadow-md transition-all"
          >
            Contáctanos
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
