import CTAFinal from "@/components/CTAFinal";
import ComoEuPenso from "@/components/ComoEuPenso";
import Diagnostico from "@/components/Diagnostico";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Principios from "@/components/Principios";
import Processo from "@/components/Processo";
import Projetos from "@/components/Projetos";
import Sobre from "@/components/Sobre";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <ComoEuPenso />
        <Projetos />
        <Processo />
        <Diagnostico />
        <Sobre />
        <Principios />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
