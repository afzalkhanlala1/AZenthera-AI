import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Custom ML & Deep Learning",
  description:
    "End-to-end model development — from data collection and feature engineering through training, optimization, and production deployment.",
};

export default function MLDeepLearningPage() {
  const service = getServiceBySlug("ml-deep-learning");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
