import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { readFile } from "node:fs/promises";
import { Nav } from "~/components/Nav";
import { Hero } from "~/components/Hero";
import { StatStrip } from "~/components/StatStrip";
import { HowItWorks } from "~/components/HowItWorks";
import { Tracking } from "~/components/Tracking";
import { Coaching } from "~/components/Coaching";
import { Testimonials } from "~/components/Testimonials";
import { Pricing } from "~/components/Pricing";
import { FinalCTA } from "~/components/FinalCTA";
import { Footer } from "~/components/Footer";

const getBusinessName = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const cfg = JSON.parse(await readFile("site.json", "utf8")) as {
      businessName?: string;
    };
    return cfg.businessName?.trim() ?? "ApplyFlow";
  } catch {
    return "ApplyFlow";
  }
});

export const Route = createFileRoute("/")({
  loader: () => getBusinessName(),
  component: Home,
});

function Home() {
  const businessName = Route.useLoaderData();

  return (
    <>
      <Nav businessName={businessName} />
      <Hero />
      <StatStrip />
      <HowItWorks />
      <Tracking />
      <Coaching />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer businessName={businessName} />
    </>
  );
}
