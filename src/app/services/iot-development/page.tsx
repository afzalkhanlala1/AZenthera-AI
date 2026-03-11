import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata = {
  title: "IoT & Embedded Systems",
  description:
    "Secure, scalable IoT solutions connecting devices, collecting telemetry, and delivering real-time intelligence at the edge.",
};

export default function IoTDevelopmentPage() {
  const service = getServiceBySlug("iot-development");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
