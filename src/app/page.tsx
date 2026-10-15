// Home page — single-page composition of all eight sections.
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import WhyMe from "@/components/WhyMe";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream-50">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <WhyMe />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}

