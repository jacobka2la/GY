import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import bgProcess from "@/assets/bg-process.jpg";

const steps = [
  {
    number: "01",
    title: "Reach Out",
    description:
      "Call or submit an inquiry to begin the conversation. This first step is simply about connecting and exploring what support you may be looking for.",
  },
  {
    number: "02",
    title: "Free 15-Minute Consultation",
    description:
      "An initial consultation helps determine whether Gloria Yousif and The Therapy Room LLC feel like the right fit for your needs and goals.",
  },
  {
    number: "03",
    title: "First Session",
    description:
      "Your first session focuses on understanding what you are experiencing, what has brought you to therapy, and what kind of progress you hope to make.",
  },
  {
    number: "04",
    title: "Personalized Treatment",
    description:
      "Therapy is shaped around the individual. Gloria works with each client in an open, judgment-free way that respects where they are and what they need.",
  },
  {
    number: "05",
    title: "Ongoing Growth",
    description:
      "Over time, sessions focus on insight, healing, coping tools, and meaningful change so you can move forward with greater clarity and confidence.",
  },
];

const LendingProcess = () => {
  return (
    <PageLayout>
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={bgProcess} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background" />
        </div>
        <div className="relative section-container text-center max-w-3xl">
          <AnimatedSection>
            <span className="badge-accent mb-4 inline-block">What to Expect</span>
            <h1 className="heading-display mb-6">Our Approach</h1>
            <p className="text-body-lg">
              Starting therapy can feel like a lot, so the process is meant to be clear, supportive, and easy to follow from the very first conversation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container max-w-3xl">
          <div className="relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border hidden sm:block" />
            <div className="flex flex-col gap-12 md:gap-16">
              {steps.map((step, index) => (
                <AnimatedSection key={step.number} delay={index * 0.1}>
                  <div className="flex gap-6 md:gap-8 items-start">
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg md:text-xl shadow-lg">
                      {step.number}
                    </div>
                    <div className="pt-1 md:pt-3">
                      <h3 className="heading-card mb-3">{step.title}</h3>
                      <p className="text-body">{step.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="section-container text-center max-w-3xl">
          <AnimatedSection>
            <h2 className="heading-section mb-6">Therapy Can Start With One Call</h2>
            <p className="text-body-lg mb-8">
              Gloria understands how anxiety, depression, and stress can make it hard to reach out. The first step does not have to be perfect. It just has to begin.
            </p>
            <Link
              to="/loan-request"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary-dark transition-colors duration-200 shadow-lg"
            >
              Request a Consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default LendingProcess;
