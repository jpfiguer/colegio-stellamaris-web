const enlaces = [
  {
    label: "Lista de Útiles 2026",
    href: "https://drive.google.com/drive/folders/1CpBLKsttxfXcsHhRjgFawZF6bwKM_LgU?usp=drive_link",
    icon: "list",
    color: "from-primary-dark to-primary",
  },
  {
    label: "Horario de Clases 2026",
    href: "https://drive.google.com/file/d/1hAJOm5M8cOu_URYhbpwZ01a1SHyUW46m/view?usp=sharing",
    icon: "clock",
    color: "from-primary to-primary-light",
  },
  {
    label: "Plan Lector 2026",
    href: "https://drive.google.com/drive/u/0/folders/1nCTF85nSZQ5p1aI8WWSBeIz6gvAPO4tZ",
    icon: "book",
    color: "from-primary-light to-primary-600",
  },
  {
    label: "Talleres",
    href: "/talleres",
    icon: "palette",
    color: "from-accent-dark to-accent",
    internal: true,
  },
];

function LinkIcon({ name }: { name: string }) {
  const cls = "w-6 h-6";
  switch (name) {
    case "list":
      return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>;
    case "clock":
      return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    case "book":
      return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
    case "palette":
      return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>;
    default:
      return null;
  }
}

export default function LinksSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <div className="section-badge">Recursos</div>
          <h2 className="section-heading mt-4 text-3xl md:text-4xl">
            Enlaces <span className="text-gradient-brand">importantes</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {enlaces.map((e) => (
            <a
              key={e.label}
              href={e.href}
              target={e.internal ? undefined : "_blank"}
              rel={e.internal ? undefined : "noopener noreferrer"}
              className="group card-hover glass rounded-2xl p-5 text-center ring-1 ring-primary/[0.05]"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${e.color} text-white flex items-center justify-center mx-auto mb-3 shadow-sm transition-transform duration-400 group-hover:scale-105`}
              >
                <LinkIcon name={e.icon} />
              </div>
              <h3 className="font-heading font-semibold text-ink text-sm group-hover:text-primary transition-colors">
                {e.label}
              </h3>
              <div className="mt-2 flex items-center justify-center gap-1 text-xs text-primary/40 group-hover:text-primary font-medium transition-colors">
                <span>Ver</span>
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
