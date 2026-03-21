import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Informaciones - Colegio Stella Maris",
};

const noticias = [
  {
    slug: "premiacion-de-alumna",
    title: "Premiación de Alumna",
    date: "25 Noviembre 2025",
    content: "Reconocimiento especial a alumna destacada del colegio Stella Maris por su excelencia académica y participación en actividades extracurriculares.",
  },
  {
    slug: "expo-talleres-2025",
    title: "Expo Talleres 2025",
    date: "25 Noviembre 2025",
    content: "Exposición de los talleres extraescolares realizados durante el año 2025, donde los estudiantes mostraron sus trabajos y aprendizajes.",
  },
  {
    slug: "proyecto-lectura-viva",
    title: 'Proyecto "Lectura viva y con sentido"',
    date: "25 Noviembre 2025",
    content: "Trabajo colaborativo Educación Básica Carrera Docente. Un proyecto que busca fomentar la lectura comprensiva y el amor por los libros.",
  },
  {
    slug: "celebracion-dia-del-alumno",
    title: "Celebración día del alumno y la alumna Stella Maris",
    date: "17 Mayo 2025",
    content: "Gran celebración del día del alumno y la alumna en nuestro colegio, con actividades recreativas y artísticas para toda la comunidad estudiantil.",
  },
  {
    slug: "salida-pedagogica-planetario",
    title: "Salida pedagógica 3ros básico - Planetario",
    date: "25 Abril 2025",
    content: "Los estudiantes de 3ro básico disfrutaron de una enriquecedora salida pedagógica al Planetario, aprendiendo sobre el sistema solar y las constelaciones.",
  },
  {
    slug: "taller-de-natacion",
    title: "Taller de Natación: Información e implementos necesarios",
    date: "22 Abril 2025",
    content: "Información detallada sobre el taller de natación, incluyendo los implementos necesarios para participar, horarios y requisitos.",
  },
  {
    slug: "visita-palacio-moneda",
    title: "Visita al Palacio de la Moneda y Centro Cultural La Moneda",
    date: "14 Abril 2025",
    content: "El día 11 de abril, estudiantes de 4° año medio pertenecientes al electivo de Mundo Global realizaron una visita al Palacio de la Moneda y al Centro Cultural La Moneda, complementando sus aprendizajes sobre institucionalidad y cultura.",
  },
  {
    slug: "integracion-equipo-trabajo",
    title: "Hoy se integraron nuestro equipo de trabajo",
    date: "4 Marzo 2025",
    content: "Hoy se integraron nuestros docentes Stella Maris. Nuestro equipo de trabajo conformado por más de 80 profesionales preparándose para el año escolar 2025.",
  },
  {
    slug: "taller-baby-futbol",
    title: "Taller baby fútbol masculino y femenino Stella Maris 2024",
    date: "2024",
    content: "Este taller cubre desde kinder a 6to básico. Pudimos visitar las dependencias del club Magallanes para practicar y competir.",
  },
  {
    slug: "muestra-folclorica",
    title: "Muestra Folclórica",
    date: "2024",
    content: "Estimada comunidad educativa, los invitamos a disfrutar de nuestra muestra folclórica Stella Maris, celebrando las tradiciones de nuestro país.",
  },
];

export default function InformacionesPage() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl font-bold text-dark mb-2">Informaciones</h1>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="space-y-8">
          {noticias.map((n) => (
            <article
              key={n.slug}
              id={n.slug}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-1 bg-primary" />
              <div className="p-6">
                <span className="text-xs text-gray-light font-semibold uppercase tracking-wide">
                  {n.date}
                </span>
                <h2 className="font-heading text-xl font-bold text-dark mt-1 mb-3">{n.title}</h2>
                <p className="text-gray leading-relaxed">{n.content}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
