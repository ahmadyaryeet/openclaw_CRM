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
import CTASection from "@/components/CTASection";
import GetStartedSection from "@/components/GetStartedSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
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
        <CTASection />
        <GetStartedSection />
      </main>
      <Footer />
    </div>
  );
}
