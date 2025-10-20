import { Hero } from "@/pages/home/hero";
import { FeaturesSection } from "@/pages/home/features";
import { CommunitySection } from "@/pages/home/community";
import { UseCasesSection } from "@/pages/home/use-cases";

export function HomePage() {
  return (
    <>
      <Hero />
      <section
        id="download"
        className="container mx-auto mt-2 px-4"
        aria-label="Download and Docs anchors"
      />
      <FeaturesSection />
      <UseCasesSection />
      <CommunitySection />
      <section id="documentation" className="sr-only" aria-hidden="true" />
    </>
  );
}
