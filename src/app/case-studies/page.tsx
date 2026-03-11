import { caseStudies } from "@/lib/data";
import { CaseStudyCard } from "@/components/CaseStudyCard";

export const metadata = {
  title: "Case Studies",
  description:
    "Real projects, measurable results. From agent ecosystems to real-time vision systems — see what AZenthera AI has delivered across industries.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-surface py-24 relative overflow-hidden">
        <div className="hero-grid absolute inset-0 opacity-50" />
        <div className="radial-fade absolute inset-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="text-text-muted text-lg">
              From agent ecosystems to real-time vision systems — here&apos;s a
              selection of what we&apos;ve delivered across industries.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
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
        </div>
      </section>
    </>
  );
}
