import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import About from "./about/page";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import CaregiverPackages from "./caregiver-packages/page";
import Leadership from "@/components/leadership";

export default function Home() {
  return (
    <div>

      <Hero></Hero>
      <About></About>
      {/* <ServiceCard></ServiceCard> */}
      <CaregiverPackages></CaregiverPackages>
      {/* <PricingCard></PricingCard> */}
      <Leadership></Leadership>
      <Stats></Stats>
      {/* <Testimonials></Testimonials> */}
    </div>
  );
}
