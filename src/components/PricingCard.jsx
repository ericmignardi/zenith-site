import { motion } from "motion/react";

const PricingCard = ({ icon, plan, description }) => {
  const features = {
    Basic: [
      "24/7 gym access",
      "Locker room facilities",
      "Basic cardio equipment",
      "Free weights section",
      "Mobile app access",
    ],
    Premium: [
      "Everything in Basic",
      "2 personal training sessions/month",
      "Unlimited group classes",
      "Nutritional consultation",
      "Priority equipment booking",
      "Guest pass privileges",
    ],
    Elite: [
      "Everything in Premium",
      "Unlimited personal training",
      "Custom meal planning",
      "Recovery suite access",
      "Dedicated locker",
      "VIP parking spot",
      "Exclusive member events",
    ],
  };

  return (
    <motion.div
      initial={{ y: 10 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      viewport={{ once: true }}
      className="flex flex-col h-120 gap-4 p-6 bg-background rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-200"
    >
      {/* Title */}
      <div className="flex flex-col items-center gap-3">
        <div className="bg-primary rounded-full p-4 text-background">
          {icon}
        </div>
        <h3 className="text-lg">{plan}</h3>
      </div>
      {/* Description */}
      <div>
        <p className="text-xs lg:text-sm text-text/60">{description}</p>
      </div>
      {/* List */}
      <div className="flex-1 flex flex-col justify-start">
        <ul className="space-y-2 text-left">
          {features[plan].map((feature, index) => (
            <li key={index} className="text-xs lg:text-sm text-gray-700">
              <span>&bull; {feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button className="button self-center w-auto">Choose {plan}</button>
    </motion.div>
  );
};

export default PricingCard;
