import type { Metadata } from "next";
import { IndustriesPageContent } from "./IndustriesPageContent";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "AZenthera AI delivers tailored AI and data solutions across e-commerce, healthcare, defense, sports, retail, and more. Industry-specific expertise for transformative results.",
};

export default function IndustriesPage() {
  return <IndustriesPageContent />;
}
