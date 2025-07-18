import { useState } from "react";
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

  return (
    <>
      <header className="fixed top-0 left-0 right-0 mt-4 z-30 p-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-2 rounded-xl lg:rounded-full bg-background">
          <a href="/">
            <img className="w-34" src={logo} alt="Zenith brand logo" />
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
          {!mobileToggle ? (
            <FiMenu
              aria-label="Toggle mobile menu"
              aria-expanded={mobileToggle}
              onClick={() => setMobileToggle(!mobileToggle)}
              className="lg:hidden text-4xl font-semibold rounded-xl lg:rounded-full bg-primary text-background p-2 cursor-pointer hover:opacity-90 transition-opacity z-60"
            />
          ) : (
            <FiX
              aria-label="Toggle mobile menu"
              aria-expanded={mobileToggle}
              onClick={() => setMobileToggle(!mobileToggle)}
              className="lg:hidden text-4xl font-semibold rounded-xl lg:rounded-full bg-primary text-background p-2 cursor-pointer hover:opacity-90 transition-opacity z-60"
            />
          )}
        </div>
      </header>
      {/* Mobile Navigation */}
      {/* {mobileToggle && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring" }}
          className="absolute top-0 right-0 size-20 bg-primary/80 backdrop-blur-sm z-50 flex justify-center items-center gap-4"
        >
          <a href="/">
            <img className="w-50" src={logo} alt="Zenith brand logo" />
          </a>
          <hr className="text-4xl text-background outline-1 h-[50%]" />
          <nav className="flex flex-col justify-center items-start h-full gap-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                className={`text-base font-medium text-background hover:opacity-90 transition-opacity flex items-center gap-1 ${
                  activeTab === item.id.substring(1) ? "text-background" : ""
                }`}
                href={item.id}
                onClick={() => {
                  setActiveTab(item.id.substring(1));
                  setMobileToggle(false);
                }}
              >
                {item.label}
                {activeTab === item.id.substring(1) && (
                  <FiArrowLeft className="text-text" aria-hidden="true" />
                )}
              </a>
            ))}
            <button className="text-base font-medium cursor-pointer text-text hover:opacity-90 transition-opacity z-30">
              Join Now
            </button>
            <FiX
              onClick={() => setMobileToggle(false)}
              className="text-2xl font-semibold rounded-sm bg-red-500 text-background p-2 cursor-pointer hover:opacity-90 transition-opacity"
            />
          </nav>
        </motion.div>
      )} */}
    </>
  );
};

export default Header;
