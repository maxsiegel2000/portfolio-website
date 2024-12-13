import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects"
import { AboutSection } from "@/sections/About"
import { Footer } from "@/sections/Footer";
import { ContactSection } from "@/sections/Contact";
import { EducationSection } from "@/sections/Education";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
