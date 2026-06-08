import CTAFinal from "@/components/CTAFinal";
import ClientStrip from "@/components/ClientStrip";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Stack from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Processo from "@/components/Processo";
import Projetos from "@/components/Projetos";
import Sobre from "@/components/Sobre";
// import Testimonials from "@/components/Testimonials"; // Descomente quando tiver depoimentos reais

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projetos />
        <ClientStrip />
        {/* <Testimonials /> */}
        <Processo />
        <Stack />
        <Sobre />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
