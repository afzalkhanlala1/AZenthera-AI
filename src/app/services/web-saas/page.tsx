import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Web & SaaS Development",
  description:
    "Performance-driven web applications and scalable SaaS platforms built with modern frameworks and production-grade infrastructure.",
};

export default function WebSaaSPage() {
  const service = getServiceBySlug("web-saas");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
