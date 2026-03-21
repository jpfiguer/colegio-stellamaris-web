import type { Metadata } from "next";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes - Colegio Stella Maris",
};

export default function PreguntasFrecuentesPage() {
  return (
    <section className="py-16">
      <FAQSection />
    </section>
  );
}
