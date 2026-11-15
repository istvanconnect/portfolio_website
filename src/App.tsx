import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ServicesSection } from "@/components/sections/services-section";
import { Ticker } from "@/components/sections/ticker";
import { WorkSection } from "@/components/sections/work-section";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

export default function App() {
  return (
    <div className="min-h-screen overflow-clip bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroGeometric
          badge="Independent creative partner · Available for select projects"
          title1="Making Digital"
          title2="Matter."
          description="I’m Alex — a designer and creative developer building distinct digital experiences for ambitious people and brands. Strategy, design, and technology, all working as one."
          rotate={12}
          width={600}
          height={140}
          y={15}
        />
        <Ticker />
        <WorkSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
