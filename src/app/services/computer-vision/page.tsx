import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata = {
  title: "Computer Vision & Edge AI",
  description:
    "Real-time detection, tracking, and recognition systems deployed on edge hardware — optimized for latency, accuracy, and power constraints.",
};

export default function ComputerVisionPage() {
  const service = getServiceBySlug("computer-vision");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
