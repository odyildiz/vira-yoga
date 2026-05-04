import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import Classes from "@/components/Classes";
import Teachers from "@/components/Teachers";
import Blog from "@/components/Blog";
import Memberships from "@/components/Memberships";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Classes />
      <Schedule />
      <Memberships />
      <Teachers />
      <Blog />
      <About />
      <Contact title="Bizimle İletişime Geçin" description="Sorularınız, ders paketleri veya stüdyomuz hakkında detaylı bilgi almak için buradayız." />
      <Footer />
    </>
  );
}
