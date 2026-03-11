import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata = {
  title: "AI-Powered Applications | MetaViz AI",
  description:
    "Build mobile and web apps that think—personalized, intelligent, and automated. AI recommendations, image recognition, and smart workflows.",
};

export default function AIAppsPage() {
  const service = getServiceBySlug("ai-apps");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
