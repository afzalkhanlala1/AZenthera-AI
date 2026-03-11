"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { caseStudies } from "@/lib/data";

export function CaseStudiesPreview() {
  const previewStudies = caseStudies.slice(0, 3);

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Case Studies"
          title={
            <>
              Success <span className="gradient-text">Stories</span>
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewStudies.map((study, index) => (
            <CaseStudyCard
              key={study.slug}
              title={study.title}
              category={study.category}
              description={study.description}
              slug={study.slug}
              index={index}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/case-studies" variant="secondary" size="lg">
            Explore More Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
}
