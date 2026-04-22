import PortfolioNavbar from "@/components/PortfolioNavbar";
import PortfolioHero from "@/components/PortfolioHero";
import InteractiveTechTree from "@/components/InteractiveTechTree";
import Qualification from "@/components/Qualification";
import Projects from "@/components/Projects";
import QuantumContact from "@/components/QuantumContact";
import BigAboutMe from "@/components/BigAboutMe";
import AnimatedFooter from "@/components/AnimatedFooter";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <div className="relative transition-colors duration-500 overflow-x-hidden min-h-screen">
      <CustomCursor />
      <PortfolioNavbar />
      <PortfolioHero />
      <InteractiveTechTree />
      <Qualification />
      <Projects />
      <QuantumContact />
      <BigAboutMe />
      <AnimatedFooter />
    </div>
  );
}
