import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Data Analytics & BI Dashboards",
  description:
    "Executive dashboards, KPI frameworks, and advanced analytics that transform raw data into strategic decisions your leadership can act on.",
};

export default function DataAnalyticsPage() {
  const service = getServiceBySlug("data-analytics");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
