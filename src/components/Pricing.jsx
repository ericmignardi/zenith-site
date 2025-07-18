import { FiUser, FiStar, FiAward } from "react-icons/fi";
import PricingCard from "./PricingCard";
import { motion } from "motion/react";

const Pricing = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 section-padding">
      <div className="flex flex-col justify-center items-center gap-4 text-center w-[80%] py-10">
        <p className="subtitle-dark">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            viewport={{ once: true }}
            className="text-text/80"
          >
            &bull; Pricing
          </motion.span>
        </p>
        <motion.h2
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          viewport={{ once: true }}
          className="title-dark"
        >
          Invest in your health with plans that fit your{" "}
          <span className="italic">budget</span>
        </motion.h2>
        <motion.button
          initial={{ y: 10 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          viewport={{ once: true }}
          className="button"
        >
          Choose your plan
        </motion.button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-4">
        <PricingCard
          icon={<FiUser />}
          plan="Basic"
          description="Perfect for beginners starting their fitness journey with essential gym access."
        />
        <PricingCard
          icon={<FiStar />}
          plan="Premium"
          description="Complete fitness experience with personal training sessions and group classes included."
        />
        <PricingCard
          icon={<FiAward />}
          plan="Elite"
          description="Ultimate fitness package with unlimited access, nutrition coaching, and priority booking."
        />
      </div>
    </div>
  );
};

export default Pricing;
