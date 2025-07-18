import { motion } from "motion/react";

const ServicesCard = ({ image, title, subtitle }) => {
  return (
    <div className="services-card">
      <motion.img
        loading="lazy"
        initial={{ height: 0 }}
        whileInView={{ height: "auto" }}
        transition={{ duration: 2, ease: "backInOut" }}
        viewport={{ once: true }}
        className="w-full rounded-xl aspect-[6/4] object-cover"
        src={image}
        alt={`${title} service image`}
      />
      <motion.h3
        initial={{ y: 10 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="text-lg"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ y: 10 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="text-xs lg:text-sm text-text/60"
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default ServicesCard;
