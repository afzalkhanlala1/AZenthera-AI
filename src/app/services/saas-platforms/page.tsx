import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Scalable SaaS Solutions | MetaViz AI",
  description:
    "SaaS platforms built to scale with your business. Multi-tenant architecture, RBAC, secure APIs, and payment integration.",
};

export default function SaaSPlatformsPage() {
  const service = getServiceBySlug("saas-platforms");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
