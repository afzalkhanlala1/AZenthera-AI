import type { Metadata } from "next";
import { ContactPageContent } from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with AZenthera AI. Tell us about your project and we'll get back to you within 24 hours with a tailored proposal.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
