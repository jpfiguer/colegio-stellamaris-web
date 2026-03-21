import Image from "next/image";
import Link from "next/link";

const enlaces = [
  { label: "Lista de Útiles 2026", href: "https://drive.google.com/drive/folders/1CpBLKsttxfXcsHhRjgFawZF6bwKM_LgU?usp=drive_link" },
  { label: "Horario de Clases 2026", href: "https://drive.google.com/file/d/1hAJOm5M8cOu_URYhbpwZ01a1SHyUW46m/view?usp=sharing" },
  { label: "Plan Lector 2026", href: "https://drive.google.com/drive/u/0/folders/1nCTF85nSZQ5p1aI8WWSBeIz6gvAPO4tZ" },
  { label: "Talleres", href: "/talleres", internal: true },
];

export default function CommunicationsSection() {
  return (
    <div className="glass rounded-2xl shadow-card ring-1 ring-primary/[0.06] overflow-hidden h-full flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-dark to-primary px-5 py-3 border-b border-white/10">
        <h2 className="font-heading text-sm font-bold text-white tracking-tight">Enlaces</h2>
      </div>

      {/* Links grid */}
      <div className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2">
        {enlaces.map((e) => (
          <a
            key={e.label}
            href={e.href}
            target={e.internal ? undefined : "_blank"}
            rel={e.internal ? undefined : "noopener noreferrer"}
            className="group flex items-center gap-2 rounded-xl border border-primary/[0.08] bg-white hover:border-primary/20 hover:shadow-sm px-3 py-2.5 transition-all text-xs font-semibold text-ink/70 hover:text-primary"
          >
            <svg className="w-3.5 h-3.5 text-primary/40 group-hover:text-primary flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
            <span className="truncate">{e.label}</span>
          </a>
        ))}
      </div>

      {/* Logo + school info / announcements area */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 border-t border-primary/[0.05]">
        <Image src="/images/logo.png" alt="Stella Maris" width={72} height={72} className="mb-3 opacity-90" />
        <h3 className="font-heading font-bold text-ink text-sm text-center mb-1">Complejo Educacional</h3>
        <h3 className="font-heading font-bold text-primary text-base text-center mb-3">Stella Maris</h3>
        <p className="text-[11px] text-ink/40 text-center leading-relaxed max-w-[200px]">
          Formación integral, inclusiva y de calidad. Desde Kinder hasta 4° Medio.
        </p>

        <div className="mt-4 w-full">
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
