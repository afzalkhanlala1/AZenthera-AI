import type { Metadata } from "next";
import { AboutPageContent } from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "AZenthera AI — two NUST-trained engineers building production-grade AI systems, from intelligent agents and computer vision to data pipelines and executive dashboards.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
