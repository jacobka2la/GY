import { useState, FormEvent } from "react";
import PageLayout from "@/components/PageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import bgLoan from "@/assets/bg-loan.jpg";
import { toast } from "sonner";

const FORM_ENDPOINT = "";

const insuranceList = [
  "Blue Care Network",
  "Blue Cross",
  "Blue Shield",
  "BlueCross and BlueShield",
  "Medicaid",
  "Priority Health",
  "UnitedHealthcare UHC | UBH",
];

const LoanRequest = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!FORM_ENDPOINT) {
      toast.info("The consultation form design is ready, but the email form endpoint still needs to be connected before submissions can go through.");
      return;
    }

    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast.success("Your consultation request has been submitted successfully.");
        form.reset();
      } else {
        toast.error("There was an issue submitting your request. Please try again.");
      }
    } catch {
      toast.error("A network error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 text-base font-body bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200";
  const labelClasses = "block text-sm font-semibold font-body text-foreground mb-2";

  return (
    <PageLayout>
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={bgLoan} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background" />
        </div>
        <div className="relative section-container text-center max-w-3xl">
          <AnimatedSection>
            <span className="badge-accent mb-4 inline-block">Let&apos;s Connect</span>
            <h1 className="heading-display mb-6">Request a Consultation</h1>
            <p className="text-body-lg">
              Call Gloria Yousif at 248-788-6096 for a free 15-minute consultation, or use the contact form below once your website form endpoint is connected.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="card-elevated space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={labelClasses}>Full Name *</label>
                  <input type="text" id="name" name="name" required maxLength={100} className={inputClasses} placeholder="Your full name" />
                </div>
                <div>
                  <label htmlFor="email" className={labelClasses}>Email Address *</label>
                  <input type="email" id="email" name="email" required maxLength={255} className={inputClasses} placeholder="you@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className={labelClasses}>Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required maxLength={20} className={inputClasses} placeholder="(248) 555-1234" />
                </div>
                <div>
                  <label htmlFor="sessionPreference" className={labelClasses}>Session Preference *</label>
                  <select id="sessionPreference" name="sessionPreference" required className={inputClasses}>
                    <option value="">Select an option</option>
                    <option value="In Person">In Person</option>
                    <option value="Telehealth">Telehealth</option>
                    <option value="Open to Either">Open to Either</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="concerns" className={labelClasses}>Main Concern *</label>
                <select id="concerns" name="concerns" required className={inputClasses}>
                  <option value="">Select a main concern</option>
                  <option value="Anxiety">Anxiety</option>
                  <option value="Depression">Depression</option>
                  <option value="Stress">Stress</option>
                  <option value="Addiction">Addiction</option>
                  <option value="Behavioral Concerns">Behavioral Concerns</option>
                  <option value="Developmental Concerns">Developmental Concerns</option>
                  <option value="Life Challenges">Life Challenges</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClasses}>How can we help? *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={1000}
                  rows={5}
                  className={inputClasses}
                  placeholder="Share a little about what you are experiencing and what kind of support you are looking for."
                />
              </div>

              <div>
                <label htmlFor="insurance" className={labelClasses}>Insurance Provider</label>
                <input type="text" id="insurance" name="insurance" maxLength={120} className={inputClasses} placeholder="Blue Cross, Medicaid, Priority Health, etc." />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-base font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary-dark disabled:opacity-60 transition-colors duration-200 shadow-lg"
              >
                {isSubmitting ? "Submitting..." : "Request Consultation"}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                This page is ready for GitHub and Vercel. To make the form live, add your form endpoint in <code>src/pages/LoanRequest.tsx</code>.
              </p>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <div className="space-y-6">
              <div className="card-elevated">
                <h2 className="heading-card mb-4">Practice Information</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p><span className="font-semibold text-foreground">The Therapy Room LLC</span></p>
                  <p>Gloria Yousif, MA, LLP</p>
                  <p>5640 West Maple Road, Ste. 205<br />West Bloomfield, MI 48322</p>
                  <p><a href="tel:2487886096" className="text-primary hover:underline">248-788-6096</a></p>
                  <p>Available both in-person and online</p>
                </div>
              </div>

              <div className="card-elevated">
                <h2 className="heading-card mb-4">Additional Provider</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p className="font-semibold text-foreground">Dr Lindsay Najor, PsyD LLP</p>
                  <p>5640 West Maple Road, Ste. 205<br />West Bloomfield, MI 48322</p>
                  <p><a href="tel:2488205091" className="text-primary hover:underline">248-820-5091</a></p>
                </div>
              </div>

              <div className="card-elevated">
                <h2 className="heading-card mb-4">Accepted Insurance & Payment</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Payment Methods</p>
                    <p>Cash, Check, Discover, Mastercard, Venmo, Visa</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Insurance</p>
                    <ul className="space-y-1">
                      {insuranceList.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
};

export default LoanRequest;
