import services from "../assets/services.jpg";
import services1 from "../assets/services1.jpg";
import ServicesCard from "./ServicesCard";
import { motion } from "motion/react";

const Services = () => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-8 section-padding"
      id="services"
    >
      <div className="flex flex-col justify-center items-center gap-4 text-center py-10">
        <p className="subtitle-dark">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            viewport={{ once: true }}
            className="text-text/80"
          >
            &bull; Services
          </motion.span>{" "}
        </p>
        <motion.h2
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          viewport={{ once: true }}
          className="title-dark"
        >
          Reaching your fitness goals doesn't have to be{" "}
          <span className="italic">overwhelming</span>
        </motion.h2>
        <motion.button
          initial={{ y: 10 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          viewport={{ once: true }}
          className="button"
        >
          See all services
        </motion.button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 justify-center items-center w-full">
        <ServicesCard
          image={services}
          title={"Personal Training"}
          subtitle={
            "Customized one-on-one sessions designed to achieve your fitness goals."
          }
        />
        <ServicesCard
          image={services1}
          title={"Group Fitness Classes"}
          subtitle={
            "High-energy community workouts that make fitness fun and motivating."
          }
        />
      </div>
    </div>
  );
};

export default Services;
