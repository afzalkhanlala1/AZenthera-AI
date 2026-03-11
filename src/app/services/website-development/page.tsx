import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Cutting-Edge Website Development | MetaViz AI",
  description:
    "Fast, modern websites with Jamstack and custom CMS. Blazing-fast load times, SEO best practices, and mobile-first design.",
};

export default function WebsiteDevelopmentPage() {
  const service = getServiceBySlug("website-development");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
