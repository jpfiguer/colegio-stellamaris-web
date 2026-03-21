import Image from "next/image";

const instaPosts = [
  "/images/kinder/k1.jpg",
  "/images/kinder/k2.jpg",
  "/images/kinder/k3.jpg",
  "/images/kinder/k4.jpg",
];

export default function InstagramFeed() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-wide">
        {/* Profile header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-12 h-12 rounded-full border-2 border-primary/10 overflow-hidden flex-shrink-0">
              <Image src="/images/logo.png" alt="Colegio Stella Maris" width={48} height={48} className="object-cover" />
            </div>
            <div className="min-w-0">
              <a
                href="https://www.instagram.com/colestellamaris/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading font-bold text-ink hover:text-primary transition-colors text-sm"
              >
                colestellamaris
              </a>
              <p className="text-[11px] text-ink/40 truncate">
                CUENTA OFICIAL Complejo Educacional Stella Maris. Ubicado en la calle Primera Transversal 10516, comuna de El Bosque.
              </p>
            </div>
          </div>
        </div>

        {/* Instagram grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {instaPosts.map((src, i) => (
            <a
              key={i}
              href="https://www.instagram.com/colestellamaris/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl bg-surface-subtle"
            >
              <Image
                src={src}
                alt={`Instagram post ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <a
            href="https://www.instagram.com/colestellamaris/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-ink/10 bg-white px-6 py-2.5 text-sm font-semibold text-ink hover:border-primary/20 hover:text-primary transition-all"
          >
            Cargar más
          </a>
          <a
            href="https://www.instagram.com/colestellamaris/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
            </svg>
            Ir a Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
