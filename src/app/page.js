import Hero from "@/components/Hero";
import Pricing from "@/components/PricingCard";
import ServiceCard from "@/components/ServiceCard";
import About from "./about/page";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div>

      <Hero></Hero>
      <About></About>
      <ServiceCard></ServiceCard>
      <Pricing></Pricing>
      <Stats></Stats>
      <Testimonials></Testimonials>

      {/* leadeship */}

      {/* <Navbar />

      <Hero />

      <AboutPreview />

      <Services />

      <Stats />

      <WhyChooseUs />

      <Pricing />

      <Testimonials />

      <CTA />

      <ContactSection />

      <Footer /> */}
    </div>
  );
}
