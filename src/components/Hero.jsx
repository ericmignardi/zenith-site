import hero1 from "../assets/hero1.jpg";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <motion.div
      className="relative h-screen text-background flex items-end section-padding"
      id="home"
    >
      {/* Image Background */}
      <motion.img
        initial={{ scale: 2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={hero1}
        alt="Hero section image"
      />
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-text/30 z-10"></div>
      <div className="relative h-full w-full z-20 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 justify-between items-end max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col justify-end gap-4 h-full"
        >
          <p className="subtitle-light">
            <span className="text-background/80">&bull;</span> Hi, We're Zenith
          </p>
          <h1 className="title-light">
            Your trusted partners <br /> in{" "}
            <span className="italic">Fitness</span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-start gap-10 lg:justify-between lg:gap-0 items-center"
        >
          <div className="flex flex-col justify-center gap-2">
            <p className="text-2xl lg:text-3xl">300+</p>
            <p className="text-xs lg:text-sm text-background/60">
              Community members
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <p className="text-2xl lg:text-3xl">2M+</p>
            <p className="text-xs lg:text-sm text-background/60">
              Calories burned
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <p className="text-2xl lg:text-3xl">600+</p>
            <p className="text-xs lg:text-sm text-background/60">
              Success stories
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
