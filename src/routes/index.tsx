import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { ProofStrip } from "@/components/site/ProofStrip";
import { Services } from "@/components/site/Services";
import { HowItWorks } from "@/components/site/HowItWorks";
import { AiSnapshot } from "@/components/site/AiSnapshot";
import { Pricing } from "@/components/site/Pricing";
import { LeadForm } from "@/components/site/LeadForm";
import { Footer } from "@/components/site/Footer";

const title = "Shakik Industries — Engineering tomorrow.";
const description =
  "We build, host and manage your entire website end-to-end, then deliver continuous AI insights on your traffic, leads and growth. Websites · AI · Automation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <Services />
        <HowItWorks />
        <AiSnapshot />
        <Pricing />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}
