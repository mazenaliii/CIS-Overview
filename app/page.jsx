import NavBar from "../components/NavBar";
import AboutSection from "../components/AboutSection";
import MissionVisionSection from "../components/MissionVisionSection";
import ProblemSection from "../components/ProblemSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import ServicesSection from "../components/ServicesSection";
import BenefitsSection from "../components/BenefitsSection";
import PlanBSection from "../components/PlanBSection";
import FinalSection from "../components/FinalSection";
import Footer from "../components/Footer";
import WarningAlert from "../components/WarningAlert";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <main className="relative w-full min-h-[200vh] bg-black">
      <NavBar />
      <WarningAlert />
      <HeroSection />
      <AboutSection />
      <ProblemSection />
      <CaseStudiesSection />
      <MissionVisionSection />
      <ServicesSection />
      <BenefitsSection />
      <PlanBSection />
      <FinalSection />
      <Footer />
    </main>
  );
}
