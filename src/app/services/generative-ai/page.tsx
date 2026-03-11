import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Generative AI Solutions",
  description:
    "Leverage LLMs, fine-tuning, and voice AI to transform your workflows. RAG chatbots, voicebots, and custom AI assistants.",
};

export default function GenerativeAIPage() {
  const service = getServiceBySlug("generative-ai");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
