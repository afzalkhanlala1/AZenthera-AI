import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata = {
  title: "AI Integration & Development",
  description:
    "Connect your products with production-grade AI services. Model integration, RAG pipelines, agent orchestration, and MLOps.",
};

export default function AIDevelopmentPage() {
  const service = getServiceBySlug("ai-development");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
