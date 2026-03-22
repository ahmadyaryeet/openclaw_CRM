import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WorkspaceSection from "@/components/WorkspaceSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import AnalyticsSection from "@/components/AnalyticsSection";
import PipelineSection from "@/components/PipelineSection";
import DocumentsSection from "@/components/DocumentsSection";
import SkillsSection from "@/components/SkillsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <WorkspaceSection />
        <IntegrationsSection />
        <CapabilitiesSection />
        <AnalyticsSection />
        <PipelineSection />
        <DocumentsSection />
        <SkillsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
