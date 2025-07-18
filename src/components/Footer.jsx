import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="section-padding relative bg-primary text-background overflow-hidden">
      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-5 justify-center gap-8 z-10 relative max-w-screen-xl mx-auto">
        {/* Column 1 */}
        <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-left">
          <p className="text-xs lg:text-sm">
            We offer a wide range of services to meet all your needs, from minor
            improvements to major transformations.
          </p>
          <div className="flex gap-4">
            <div className="bg-background rounded-full p-3 lg:p-4 text-primary cursor-pointer hover:opacity-90 transition-opacity">
              <FiInstagram />
            </div>
            <div className="bg-background rounded-full p-3 lg:p-4 text-primary cursor-pointer hover:opacity-90 transition-opacity">
              <FiFacebook />
            </div>
            <div className="bg-background rounded-full p-3 lg:p-4 text-primary cursor-pointer hover:opacity-90 transition-opacity">
              <FiTwitter />
            </div>
          </div>
        </div>
        {/* Column 2 */}
        <nav className="flex flex-col gap-4 items-center text-center text-background/60 lg:items-start lg:text-left">
          <p className="text-xs lg:text-sm font-semibold text-background">
            Pages
          </p>
          <a
            href="#"
            className="text-xs lg:text-sm hover:text-background transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-xs lg:text-sm hover:text-background transition-colors"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-xs lg:text-sm hover:text-background transition-colors"
          >
            Our Team
          </a>
          <a
            href="#"
            className="text-xs lg:text-sm hover:text-background transition-colors"
          >
            FAQs
          </a>
          <a
            href="#"
            className="text-xs lg:text-sm hover:text-background transition-colors"
          >
            Testimonials
          </a>
        </nav>
        {/* Column 3 */}
        <nav className="flex flex-col gap-4 items-center text-center text-background/60 lg:items-start lg:text-left">
          <p className="text-xs lg:text-sm font-semibold text-background">
            Services
          </p>
          <a
            href="#"
            className="text-xs lg:text-sm hover:text-background transition-colors"
          >
            Training Plans
          </a>
          <a
            href="#"
            className="text-xs lg:text-sm hover:text-background transition-colors"
          >
            Personal Coaching
          </a>
          <a
            href="#"
            className="text-xs lg:text-sm hover:text-background transition-colors"
          >
            Nutrition
          </a>
          <a
            href="#"
            className="text-xs lg:text-sm hover:text-background transition-colors"
          >
            Group Classes
          </a>
          <a
            href="#"
            className="text-xs lg:text-sm hover:text-background transition-colors"
          >
            Wellness Advice
          </a>
        </nav>
        {/* Column 4 */}
        <nav className="flex flex-col gap-4 items-center text-center text-background/60 lg:items-start lg:text-left">
          <p className="text-xs lg:text-sm font-semibold text-background">
            Resources
          </p>
          <a
            href="#"
            className="text-xs lg:text-sm hover:text-background transition-colors"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-xs lg:text-sm hover:text-background transition-colors"
          >
            Careers
          </a>
          <a
            href="#"
            className="text-xs lg:text-sm hover:text-background transition-colors"
          >
            Events
          </a>
          <a
            href="#"
            className="text-xs lg:text-sm hover:text-background transition-colors"
          >
            Press
          </a>
          <a
            href="#"
            className="text-xs lg:text-sm hover:text-background transition-colors"
          >
            Privacy Policy
          </a>
        </nav>
        {/* Column 5 */}
        <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-left">
          <p className="text-xs lg:text-sm font-semibold">Contact</p>
          <p className="text-xs lg:text-sm text-background/60">
            123 Example Road
            <br />
            Hamilton, ON L0K2J7
          </p>
          <p className="text-xs lg:text-sm text-background/60">
            email@example.com
          </p>
          <p className="text-xs lg:text-sm text-background/60">
            (555) 555-5555
          </p>
        </div>
      </div>
      {/* Zenith Brand Background Text */}
      <p className="absolute bottom-[-40px] lg:bottom-[-60px] left-0 w-full text-center text-[10rem] lg:text-[20em] font-normal text-background/80 pointer-events-none select-none z-0 leading-none">
        Zenith
      </p>
    </footer>
  );
};

export default Footer;
