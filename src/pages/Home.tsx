import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HeartHandshake, Brain, Sparkles, MonitorSmartphone, ShieldCheck, MapPin, Phone, Users } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import cityBg from "@/assets/city-bg.jpg";
import patternBg from "@/assets/pattern-bg.jpg";

const coreValues = [
  {
    icon: HeartHandshake,
    title: "Compassion",
    description:
      "Therapy begins with feeling seen, heard, and respected. Every session is grounded in empathy and care.",
  },
  {
    icon: Brain,
    title: "Understanding",
    description:
      "Each person brings a different story. Treatment is shaped around where you are right now and what you need most.",
  },
  {
    icon: Sparkles,
    title: "Growth",
    description:
      "The goal is not just to get through hard moments, but to build healthier patterns that support long-term change.",
  },
  {
    icon: ShieldCheck,
    title: "Safety",
    description:
      "A calm, judgment-free therapeutic space can make real healing possible. That is the foundation of the work.",
  },
];

const highlights = [
  { icon: MapPin, title: "West Bloomfield Office" },
  { icon: MonitorSmartphone, title: "In-Person & Telehealth" },
  { icon: Users, title: "20 Years of Experience" },
  { icon: Phone, title: "Free 15-Minute Consultation" },
];

const Home = () => {
  return (
    <PageLayout>
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img src={cityBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[hsl(var(--primary))]/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background" />
        </div>
        <div className="relative section-container text-center py-28 md:py-40 lg:py-48">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="badge-accent mb-6 inline-block">Compassionate Therapy Care</span>
            <h1 className="font-heading max-w-5xl mx-auto mb-6 text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-none tracking-tight text-foreground">
              Gloria Yousif, MA, LLP
              <br className="hidden md:block" /> The Therapy Room LLC
            </h1>
            <p className="text-body-lg max-w-3xl mx-auto mb-10">
              Whether you are dealing with anxiety, depression, stress, addiction, behavioral concerns, developmental disorders, or difficult life challenges, asking for help is a powerful first step. Gloria Yousif offers a calm, supportive environment to help you move toward lasting growth and fulfillment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                to="/what-we-offer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary-dark transition-colors duration-200 shadow-lg"
              >
                View Specialties
              </Link>
              <Link
                to="/loan-request"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                Request Consultation
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-10 h-10 mb-3 rounded-full bg-primary-light/70 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground/80">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container text-center max-w-4xl">
          <AnimatedSection>
            <span className="badge-accent mb-4 inline-block">About Gloria</span>
            <h2 className="heading-section mb-8">A Warm, Experienced Space for Real Change</h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-body mb-6">
              Gloria Yousif is a Limited Licensed Psychologist and owner of The Therapy Room LLC. With 20 years of experience, she has worked with individuals facing anxiety, depression, stress, addiction, developmental disorders, behavioral problems, and a wide range of life challenges.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="text-body mb-6">
              Her goal as a therapist is to create a healthy, safe, and therapeutic environment where clients can process what they are carrying and work toward the growth they want to achieve. Her style is open, supportive, and judgment free, with a strong focus on meeting each person where they are.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-body">
              By reaching out for support, you have already started making a positive change in your life. Gloria offers both in-person and telehealth sessions and looks forward to helping you determine whether this is the right fit for your needs. Your change begins now.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="section-container text-center">
          <AnimatedSection>
            <span className="badge-accent mb-4 inline-block">What Guides Our Care</span>
            <h2 className="heading-section mb-12">Core Values</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <AnimatedSection key={value.title} delay={0.1 + index * 0.08}>
                <div className="card-elevated text-center h-full">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-primary-light flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="heading-card mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={patternBg} alt="" className="w-full h-full object-cover opacity-40" />
        </div>
        <div className="relative section-container text-center max-w-3xl">
          <AnimatedSection>
            <h2 className="heading-section mb-6">Ready to Take the First Step?</h2>
            <p className="text-body-lg mb-8">
              Call 248-788-6096 to schedule your free 15-minute consultation and see whether The Therapy Room LLC feels like the right fit for you.
            </p>
            <a
              href="tel:2487886096"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary-dark transition-colors duration-200 shadow-lg"
            >
              Call 248-788-6096
            </a>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
