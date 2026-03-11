import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Video Surveillance & Analytics | MetaViz AI",
  description:
    "Intelligent video analytics for security, insights, and compliance. Object recognition, motion detection, and smart alerting.",
};

export default function VideoAnalyticsPage() {
  const service = getServiceBySlug("video-analytics");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
