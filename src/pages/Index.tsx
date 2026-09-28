import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MotionSystem from "@/components/motion/MotionSystem";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import SelectedProjects from "@/components/sections/SelectedProjects";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
export default function Index() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Manifesto />
        <SelectedProjects />
        <Services />
        <Process />
        <About />
        <FAQ />
      </main>
      <Footer />
      <MotionSystem />
    </>
  );
}
