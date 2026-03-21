import Image from "next/image";

export default function VideoSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-wide max-w-5xl">
        <div className="text-center mb-10">
          <div className="section-badge">Conócenos</div>
          <h2 className="section-heading mt-4 text-3xl md:text-4xl">
            Formación <span className="text-gradient-brand">colaborativa</span>
          </h2>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-card aspect-video group ring-1 ring-primary/[0.08]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />

          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary-light/15 rounded-full blur-[72px] animate-float" aria-hidden />
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-accent/10 rounded-full blur-[64px] animate-float" style={{ animationDelay: "5s" }} aria-hidden />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <div className="relative mb-6 inline-block">
                <div className="absolute -inset-4 rounded-full bg-white/[0.06] blur-xl" aria-hidden />
                <Image src="/images/logo.png" alt="Stella Maris" width={72} height={72} className="relative mx-auto opacity-90 drop-shadow-lg" />
              </div>

              <button
                type="button"
                className="relative inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.08] px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-white/[0.14]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 ring-1 ring-white/20">
                  <svg className="h-4 w-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </span>
                Video institucional
              </button>
            </div>
          </div>

          <div className="absolute inset-0 opacity-15 bg-grid-fine bg-[length:32px_32px]" aria-hidden />
        </div>
      </div>
    </section>
  );
}
