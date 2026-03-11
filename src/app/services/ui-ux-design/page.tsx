import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata = {
  title: "UI/UX Design | MetaViz AI",
  description:
    "Seamless experiences that engage users and achieve goals. Wireframes, prototypes, design systems, and usability testing.",
};

export default function UIUXDesignPage() {
  const service = getServiceBySlug("ui-ux-design");
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
