import Image from "next/image";
import Hero from "./component/Hero";
import Features from "./component/Features";
import Testimonials from "./component/Testimonials";
import CTA from "./component/CTA";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
