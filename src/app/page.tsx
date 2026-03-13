import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WorkspaceSection from "@/components/WorkspaceSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import UseCasesSection from "@/components/UseCasesSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import AnalyticsSection from "@/components/AnalyticsSection";
import PipelineSection from "@/components/PipelineSection";
import DocumentsSection from "@/components/DocumentsSection";
import SkillsSection from "@/components/SkillsSection";
import GetStartedSection from "@/components/GetStartedSection";
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
        <UseCasesSection />
        <CapabilitiesSection />
        <AnalyticsSection />
        <PipelineSection />
        <DocumentsSection />
        <SkillsSection />
        <GetStartedSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
