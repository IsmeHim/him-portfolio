import { NavBar } from "../components/Navbar";
import { StarBackground } from "../components/StarBakground";
import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/*background Effects*/}
        <StarBackground />

        {/*Navbar*/}
        <NavBar />

        {/*Main Content*/}
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        {/*Footer*/}
        {/* <div className="animate-car">
          🚗
        </div> */}
        <Footer />
    </div>
  );
}