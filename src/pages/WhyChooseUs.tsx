import { Link } from "react-router-dom";
import { Heart, ClipboardCheck, Sofa, Video, BadgeCheck, Users } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import bgWhy from "@/assets/bg-why.jpg";

const strengths = [
  {
    icon: BadgeCheck,
    title: "20 Years of Experience",
    description:
      "Gloria Yousif brings two decades of professional experience supporting clients through a broad range of emotional and behavioral concerns.",
  },
  {
    icon: Heart,
    title: "Judgment-Free Care",
    description:
      "Therapy is offered in an open, supportive environment where clients can speak honestly and feel respected throughout the process.",
  },
  {
    icon: Sofa,
    title: "Safe Therapeutic Environment",
    description:
      "The practice is built around creating a healthy, calm, and therapeutic space where healing and growth can actually happen.",
  },
  {
    icon: Video,
    title: "In-Person & Telehealth",
    description:
      "Clients have the flexibility to choose the format that works best for their schedule, comfort level, and lifestyle.",
  },
  {
    icon: ClipboardCheck,
    title: "Insurance Accepted",
    description:
      "The practice accepts several insurance plans, including Blue Cross Blue Shield, Blue Care Network, Medicaid, Priority Health, and UnitedHealthcare.",
  },
  {
    icon: Users,
    title: "Expanded Practice Support",
    description:
      "The Therapy Room LLC also includes Dr. Lindsay Najor, PsyD LLP, offering another experienced provider within the same West Bloomfield office.",
  },
];

const WhyChooseUs = () => {
  return (
    <PageLayout>
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={bgWhy} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background" />
        </div>
        <div className="relative section-container text-center max-w-3xl">
          <AnimatedSection>
            <span className="badge-accent mb-4 inline-block">Why Families and Individuals Reach Out</span>
            <h1 className="heading-display mb-6">Why Choose The Therapy Room LLC</h1>
            <p className="text-body-lg">
              Clients choose this practice for experienced care, a warm and respectful environment, and a genuine focus on helping each person move toward healthier change.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strengths.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.08}>
                <div className="card-elevated h-full text-center">
                  <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary-light flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="heading-card mb-4">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="section-container text-center max-w-3xl">
          <AnimatedSection>
            <h2 className="heading-section mb-6">Care That Feels Personal</h2>
            <p className="text-body-lg mb-8">
              The right therapeutic fit matters. Reach out to learn more and see whether The Therapy Room LLC is the right next step for you.
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

export default WhyChooseUs;
