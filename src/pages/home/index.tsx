import { SiteNavbar } from "@/components/site-navbar";
import { Hero } from "@/pages/home/hero";
import { FeaturesSection } from "@/pages/home/features";
import { CommunitySection } from "@/pages/home/community";
import { UseCasesSection } from "@/pages/home/use-cases";
import { GettingStartedSection } from "@/pages/home/getting-started";
import { SiteFooter } from "@/components/site-footer";

export function HomePage() {
  return (
    <>
      <SiteNavbar />
      <Hero />
      <section
        id="download"
        className="mx-auto mt-2 max-w-6xl px-4"
        aria-label="Download and Docs anchors"
      />
      <FeaturesSection />
      <UseCasesSection />
      <CommunitySection />
      <GettingStartedSection />
      <section id="documentation" className="sr-only" aria-hidden="true" />
      <SiteFooter />
    </>
  );
}
