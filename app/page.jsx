import About from "@/components/About";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Service from "@/components/Service";
import Work from "@/components/Work";


export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Service/>
      <Work/>
      <Reviews/>
      <Cta/>
    </div>
  );
}
