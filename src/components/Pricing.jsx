import { FiUser, FiStar, FiAward } from "react-icons/fi";
import PricingCard from "./PricingCard";
import services2 from "../assets/services2.jpg";

const Pricing = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 p-2 lg:p-20">
      <div className="flex flex-col justify-center items-center gap-4 text-center w-[80%] px-10 py-10">
        <p className="subtitle-dark">
          <span className="text-text/80">&bull;</span> Pricing
        </p>
        <h2 className="title-dark">
          Invest in your health with plans that fit your budget
        </h2>
        <button className="button">Choose your plan</button>
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
