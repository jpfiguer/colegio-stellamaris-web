import Image from "next/image";

const banners = [
  { src: "/images/banner-aula-virtual.png", alt: "Aula Virtual 1° Medio a 4° Medio" },
  { src: "/images/banner-acompanamiento.png", alt: "Acompañamiento para nuestra comunidad" },
  { src: "/images/banner-equipo.png", alt: "Equipo multidisciplinario" },
  { src: "/images/banner-aula-virtual.png", alt: "Aula Virtual 1° Medio a 4° Medio" },
];

export default function BannersSection() {
  return (
    <section className="py-10 md:py-14">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {banners.map((b, i) => (
            <div
              key={`${b.alt}-${i}`}
              className="group relative rounded-2xl overflow-hidden card-hover cursor-pointer shadow-soft ring-1 ring-primary/[0.06] bg-white"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={b.src}
                  alt={b.alt}
                  fill
                  className="object-contain p-1 transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
