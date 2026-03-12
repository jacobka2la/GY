import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold font-body text-primary-foreground mb-4">The Therapy Room LLC</h3>
            <p className="text-sm opacity-70 leading-relaxed max-w-xs mx-auto md:mx-0">
              Compassionate therapy for anxiety, depression, stress, addiction, behavioral concerns, and life challenges in a safe and supportive setting.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "About The Therapy Room", path: "/" },
                { label: "Specialties", path: "/what-we-offer" },
                { label: "Our Approach", path: "/lending-process" },
                { label: "Why Choose Us", path: "/why-choose-us" },
                { label: "Request Consultation", path: "/loan-request" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
            <p className="text-sm opacity-70 leading-relaxed">
              Gloria Yousif, MA, LLP
              <br />
              5640 West Maple Road, Ste. 205
              <br />
              West Bloomfield, MI 48322
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a href="tel:2487886096" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                248-788-6096
              </a>
              <Link
                to="/loan-request"
                className="inline-block mt-2 px-6 py-2.5 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary-dark transition-colors duration-200"
              >
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm opacity-50">
            © {new Date().getFullYear()} The Therapy Room LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
