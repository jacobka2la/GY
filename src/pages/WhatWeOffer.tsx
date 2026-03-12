import { Link } from "react-router-dom";
import { Brain, CloudRain, Shield, HeartPulse, Puzzle, Sparkles } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import bgOffer from "@/assets/bg-offer.jpg";

const offerings = [
  {
    icon: Brain,
    title: "Anxiety Support",
    description:
      "Care for racing thoughts, overwhelming worry, panic, and the daily stress that can make it hard to feel settled and present.",
  },
  {
    icon: CloudRain,
    title: "Depression Counseling",
    description:
      "Support for low mood, hopelessness, emotional heaviness, and the struggle to reconnect with motivation, purpose, and joy.",
  },
  {
    icon: Shield,
    title: "Stress & Life Challenges",
    description:
      "Therapy for major transitions, relationship stress, personal pressure, and the emotional weight that can build over time.",
  },
  {
    icon: HeartPulse,
    title: "Addiction & Behavioral Concerns",
    description:
      "A safe place to work through unhealthy patterns, emotional triggers, and behaviors that may be interfering with daily life.",
  },
  {
    icon: Puzzle,
    title: "Developmental & Individual Needs",
    description:
      "Thoughtful support for clients with developmental concerns and other individual needs that require a personalized therapeutic approach.",
  },
  {
    icon: Sparkles,
    title: "Growth-Focused Therapy",
    description:
      "Sessions designed to help clients build insight, strengthen coping tools, and move toward healthier and more fulfilling lives.",
  },
];

const WhatWeOffer = () => {
  return (
    <PageLayout>
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={bgOffer} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background" />
        </div>
        <div className="relative section-container text-center max-w-3xl">
          <AnimatedSection>
            <span className="badge-accent mb-4 inline-block">Areas of Focus</span>
            <h1 className="heading-display mb-6">Specialties</h1>
            <p className="text-body-lg">
              The Therapy Room LLC supports individuals through a wide range of emotional, behavioral, and personal challenges with care that is thoughtful, calm, and tailored to the individual.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.08}>
                <div className="card-elevated h-full flex flex-col text-center">
                  <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary-light flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="heading-card mb-4">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="section-container text-center max-w-3xl">
          <AnimatedSection>
            <h2 className="heading-section mb-6">Support That Meets You Where You Are</h2>
            <p className="text-body-lg mb-8">
              If you are unsure where to begin, that is okay. Reach out and Gloria can help you explore whether this practice is a good fit for your needs.
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

export default WhatWeOffer;
