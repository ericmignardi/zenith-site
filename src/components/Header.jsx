import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { FiMenu, FiX, FiArrowLeft } from "react-icons/fi";
import { motion } from "motion/react";

const Header = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [mobileToggle, setMobileToggle] = useState(false);

  const navItems = [
    { id: "#home", label: "Home" },
    { id: "#services", label: "Services" },
    { id: "#pricing", label: "Pricing" },
    { id: "#trainers", label: "Trainers" },
    { id: "#testimonials", label: "Testimonials" },
    { id: "#contact", label: "Contact" },
  ];

  // Scroll-based active tab
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 120;
      for (let item of navItems) {
        const section = document.querySelector(item.id);
        if (section) {
          const top = section.offsetTop - offset;
          const bottom = top + section.offsetHeight;

          if (scrollY >= top && scrollY < bottom) {
            setActiveTab(item.id.substring(1));
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // call once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 mt-4 z-30 p-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-2 rounded-xl lg:rounded-full bg-background shadow-md">
          <a href="/">
            <img className="w-32" src={logo} alt="Zenith brand logo" />
          </a>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex justify-center items-center gap-2 z-30">
            {navItems.map((item, index) => (
              <a
                key={index}
                className={`text-lg font-normal rounded-full px-6 py-2 hover:scale-90 transition-all ${
                  activeTab === item.id.substring(1)
                    ? "bg-gray-300 flex items-center gap-1"
                    : ""
                }`}
                href={item.id}
                onClick={() => setActiveTab(item.id.substring(1))}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button className="hidden lg:block button z-30">Join Now</button>
          {/* Mobile Toggle */}
          {!mobileToggle ? (
            <FiMenu
              onClick={() => setMobileToggle(true)}
              className="lg:hidden text-4xl font-semibold bg-primary text-background p-2 rounded-xl cursor-pointer hover:opacity-90 transition-opacity z-60"
            />
          ) : (
            <FiX
              onClick={() => setMobileToggle(false)}
              className="lg:hidden text-4xl font-semibold bg-primary text-background p-2 rounded-xl cursor-pointer hover:opacity-90 transition-opacity z-60"
            />
          )}
        </div>
      </header>
      {/* Mobile Navigation */}
      {mobileToggle && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed top-0 right-0 h-full w-[80%] sm:w-[70%] bg-background/90 backdrop-blur-md z-50 flex flex-col justify-between px-6 py-10 rounded-l-xl shadow-xl"
        >
          <div className="flex flex-col items-start gap-8">
            <a href="/" className="self-start mb-4">
              <img className="w-32" src={logo} alt="Zenith brand logo" />
            </a>
            <nav className="flex flex-col gap-4 w-full">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  className={`text-xl font-medium text-text w-full flex justify-between items-center hover:opacity-90 transition-opacity ${
                    activeTab === item.id.substring(1) ? "font-bold" : ""
                  }`}
                  href={item.id}
                  onClick={() => {
                    setActiveTab(item.id.substring(1));
                    setMobileToggle(false);
                  }}
                >
                  {item.label}
                  {activeTab === item.id.substring(1) && (
                    <FiArrowLeft className="text-text/50" />
                  )}
                </a>
              ))}
            </nav>
          </div>
          <button className="button">Join Now</button>
        </motion.div>
      )}
    </>
  );
};

export default Header;
