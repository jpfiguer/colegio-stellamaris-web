import HeroSection from "@/components/HeroSection";
import KinderGallery from "@/components/KinderGallery";
import CommunicationsSection from "@/components/CommunicationsSection";
import CalendarSection from "@/components/CalendarSection";
import InstagramFeed from "@/components/InstagramFeed";
import NewsSection from "@/components/NewsSection";
import TalleresSection from "@/components/TalleresSection";
import MisionVision from "@/components/MisionVision";
import BannersSection from "@/components/BannersSection";
import ValuesSection from "@/components/ValuesSection";
import VideoSection from "@/components/VideoSection";
import FAQSection from "@/components/FAQSection";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* 3-column bento like original: Kinder | Communications | Calendar */}
      <section className="container-wide -mt-10 relative z-10 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          <ScrollReveal className="h-full">
            <KinderGallery />
          </ScrollReveal>
          <ScrollReveal delay={100} className="h-full">
            <CommunicationsSection />
          </ScrollReveal>
          <ScrollReveal delay={200} className="h-full">
            <CalendarSection />
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal>
        <InstagramFeed />
      </ScrollReveal>

      <ScrollReveal>
        <NewsSection />
      </ScrollReveal>

      <ScrollReveal>
        <TalleresSection />
      </ScrollReveal>

      <ScrollReveal>
        <MisionVision />
      </ScrollReveal>

      <ScrollReveal>
        <BannersSection />
      </ScrollReveal>

      <ScrollReveal>
        <ValuesSection />
      </ScrollReveal>

      <ScrollReveal>
        <VideoSection />
      </ScrollReveal>

      <ScrollReveal>
        <FAQSection />
      </ScrollReveal>
    </>
  );
}
