import Image from "next/image";
import Link from "next/link";

const talleres = [
  { name: "Karate", icon: "/images/talleres-karate.png" },
  { name: "Ballet", icon: "/images/talleres-ballet.png" },
  { name: "Basketball", icon: "/images/talleres-basketball.png" },
  { name: "Fútbol", icon: "/images/talleres-futbol.png" },
  { name: "Tenis de Mesa", icon: "/images/talleres-tenis.png" },
  { name: "Ent. Funcional", icon: "/images/talleres-funcional.png" },
  { name: "Baby Fútbol", icon: "/images/talleres-babyfutbol.png" },
];

export default function TalleresSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-wide max-w-5xl">
        <div className="glass rounded-3xl shadow-card p-8 md:p-10 ring-1 ring-primary/[0.06] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

          <div className="text-center mb-8">
            <div className="section-badge">Actividades</div>
            <h2 className="section-heading mt-4 text-3xl md:text-4xl">
              Talleres <span className="text-gradient-brand">extraescolares</span>
            </h2>
          </div>

          {/* Even grid: 4 cols on md+, all items same size */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 mb-8 justify-items-center">
            {talleres.map((t) => (
              <div key={t.name} className="flex flex-col items-center group cursor-default w-full max-w-[120px]">
                <div className="w-20 h-20 md:w-24 md:h-24 relative mb-3 rounded-2xl border border-primary/[0.08] bg-white shadow-soft transition-all duration-400 group-hover:shadow-card group-hover:-translate-y-1 group-hover:border-primary/15">
                  <Image src={t.icon} alt={t.name} fill className="object-contain p-3" />
                </div>
                <span className="text-xs font-semibold text-ink/50 text-center leading-tight group-hover:text-primary transition-colors">
                  {t.name}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/talleres"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold px-7 py-3 text-sm shadow-md hover:shadow-glow transition-all duration-300"
            >
              Ver todos los talleres
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
