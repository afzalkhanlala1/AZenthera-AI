import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Data Engineering & Pipelines",
  description:
    "Scalable ETL architectures, data warehouse design, and automated pipelines that make your data infrastructure reliable and fast.",
};

export default function DataEngineeringPage() {
  const service = getServiceBySlug("data-engineering");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
