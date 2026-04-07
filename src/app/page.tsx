import PortfolioNavbar from "@/components/PortfolioNavbar";
import PortfolioHero from "@/components/PortfolioHero";
import InteractiveTechTree from "@/components/InteractiveTechTree";
import Qualification from "@/components/Qualification";
import Projects from "@/components/Projects";
import QuantumContact from "@/components/QuantumContact";
import BigAboutMe from "@/components/BigAboutMe";
import AnimatedFooter from "@/components/AnimatedFooter";
import FloatingBubbles from "@/components/FloatingBubbles";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden">
      <FloatingBubbles />
      <CustomCursor />
      
      <PortfolioNavbar />
      
      {/* Hero Section */}
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
