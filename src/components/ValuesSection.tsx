const values = [
  { title: "Solidaridad y empatía", icon: "heart", color: "from-primary-dark to-primary" },
  { title: "Honestidad y compromiso", icon: "shield", color: "from-primary to-primary-light" },
  { title: "Respeto y libertad", icon: "hand", color: "from-accent-dark to-accent" },
];

const competencies = [
  "Competencias para el aprendizaje globalizado permanente",
  "Competencias socio-afectivas y de convivencia",
  "Competencias para el desarrollo integral",
];

const sellos = [
  "Formación valórica y ciudadana",
  "Formación integral inclusiva y de calidad",
  "Aprendizaje activo, significativo y participativo",
];

function Icon({ name }: { name: string }) {
  switch (name) {
    case "heart":
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
    case "shield":
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
    case "hand":
      return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" /></svg>;
    default:
      return null;
  }
}

export default function ValuesSection() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-radial-brand opacity-80" aria-hidden />
      <div className="container-wide relative">
        <div className="text-center mb-10">
          <div className="section-badge">Fundamentos</div>
          <h2 className="section-heading mt-4 text-3xl md:text-4xl">
            Valores y <span className="text-gradient-brand">competencias</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {values.map((v) => (
            <div key={v.title} className="group card-hover glass rounded-2xl p-6 text-center ring-1 ring-primary/[0.06]">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${v.color} text-white flex items-center justify-center mx-auto mb-4 shadow-sm transition-transform duration-400 group-hover:scale-105`}>
                <Icon name={v.icon} />
              </div>
              <h3 className="font-heading font-semibold text-ink text-sm">{v.title}</h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="glass rounded-2xl p-6 md:p-7 shadow-soft ring-1 ring-primary/[0.06]">
            <h3 className="font-heading font-bold text-ink mb-5 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-sm">
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </span>
              Competencias
            </h3>
            <ul className="space-y-3">
              {competencies.map((c) => (
                <li key={c} className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-2.5 h-2.5 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </span>
                  <span className="text-ink/55 text-sm leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-2xl p-6 md:p-7 shadow-soft ring-1 ring-primary/[0.06]">
            <h3 className="font-heading font-bold text-ink mb-5 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center shadow-sm">
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              </span>
              Sellos Institucionales
            </h3>
            <ul className="space-y-3">
              {sellos.map((s) => (
                <li key={s} className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-2.5 h-2.5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  </span>
                  <span className="text-ink/55 text-sm leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
