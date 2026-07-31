import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Trajetoria from "@/components/Trajetoria";
import Curso from "@/components/Curso";
import Agendamento from "@/components/Agendamento";
import RedesSociais from "@/components/RedesSociais";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Trajetoria />
        <Curso />
        <Agendamento />
        <RedesSociais />
      </main>
      <Footer />
    </>
  );
}
