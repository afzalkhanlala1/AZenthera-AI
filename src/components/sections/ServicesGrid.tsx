"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/data";

export function ServicesGrid() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Services"
          title={
            <>
              Our Purpose is To Deliver Excellence In{" "}
              <span className="gradient-text">AI Service</span>
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              icon={service.icon}
              title={service.shortTitle}
              description={service.description}
              href={`/services/${service.slug}`}
              index={index}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/services" variant="secondary" size="lg">
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
