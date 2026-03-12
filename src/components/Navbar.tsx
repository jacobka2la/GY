import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/therapy-room-logo.png";

const navItems = [
  { label: "About Gloria", path: "/" },
  { label: "Specialties", path: "/what-we-offer" },
  { label: "Our Approach", path: "/lending-process" },
  { label: "Why Choose Us", path: "/why-choose-us" },
  { label: "Request Consultation", path: "/loan-request" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="hidden md:flex section-container items-center h-20">
        <Link to="/" className="flex items-center mr-8 shrink-0">
          <img
            src={logo}
            alt="The Therapy Room LLC"
            className="h-11 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center justify-center flex-1 gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 text-center ${
                  isActive
                    ? "text-primary bg-primary-light"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex items-center justify-center h-16 px-4">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="The Therapy Room LLC"
              className="h-9 w-auto object-contain"
            />
          </Link>
        </div>

        <div className="overflow-x-auto border-t border-border scrollbar-hide">
          <div className="flex items-center gap-1 px-4 py-2 w-max">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`whitespace-nowrap px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-primary bg-primary-light"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
