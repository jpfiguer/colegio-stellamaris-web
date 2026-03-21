import Link from "next/link";
import Image from "next/image";

const noticias = [
  {
    slug: "premiacion-de-alumna",
    title: "Premiación de Alumna",
    date: "25 Nov 2025",
    excerpt: "Reconocimiento especial a alumna destacada del colegio Stella Maris.",
    image: "/images/carousel-1.png",
  },
  {
    slug: "expo-talleres-2025",
    title: "Expo Talleres 2025",
    date: "25 Nov 2025",
    excerpt: "Exposición de los talleres extraescolares del año 2025.",
    image: "/images/carousel-4.png",
  },
  {
    slug: "proyecto-lectura-viva",
    title: 'Proyecto "Lectura viva y con sentido"',
    date: "25 Nov 2025",
    excerpt: "Trabajo colaborativo Educación Básica Carrera Docente.",
    image: "/images/carousel-3.png",
  },
  {
    slug: "celebracion-dia-del-alumno",
    title: "Celebración día del alumno y la alumna",
    date: "17 May 2025",
    excerpt: "Celebración del día del alumno y la alumna Stella Maris.",
    image: "/images/carousel-5.png",
  },
  {
    slug: "salida-pedagogica-planetario",
    title: "Salida pedagógica 3ros básico - Planetario",
    date: "25 Abr 2025",
    excerpt: "Los estudiantes de 3ro básico visitaron el Planetario.",
    image: "/images/carousel-6.png",
  },
  {
    slug: "taller-de-natacion",
    title: "Taller de Natación: Información e implementos",
    date: "22 Abr 2025",
    excerpt: "Información sobre el taller de natación e implementos necesarios.",
    image: "/images/carousel-7.png",
  },
];

export default function NewsSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-wide">
        <div className="text-center mb-10">
          <div className="section-badge">Novedades</div>
          <h2 className="section-heading mt-4 text-3xl md:text-4xl">
            Últimas <span className="text-gradient-brand">noticias</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {noticias.map((n) => (
            <Link
              key={n.slug}
              href={`/informaciones#${n.slug}`}
              className="group card-hover glass rounded-2xl overflow-hidden ring-1 ring-primary/[0.05] flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={n.image}
                  alt={n.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-heading font-bold text-ink group-hover:text-primary transition-colors line-clamp-2 mb-2 text-base leading-snug">
                  {n.title}
                </h3>
                <p className="text-sm text-ink/45 line-clamp-2 leading-relaxed flex-1">{n.excerpt}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-ink/30 uppercase tracking-wider">{n.date}</span>
                  <span className="text-xs text-primary/50 group-hover:text-primary font-semibold transition-colors flex items-center gap-1">
                    Leer más
                    <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/informaciones"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold px-7 py-3 text-sm shadow-md hover:shadow-glow transition-all duration-300"
          >
            Ver todas las noticias
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
