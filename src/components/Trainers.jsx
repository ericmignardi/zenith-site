import TrainersCard from "./TrainersCard";
import trainers from "../assets/trainers.jpg";
import trainers1 from "../assets/trainers2.jpg";
import trainers2 from "../assets/trainers3.jpg";
import trainers3 from "../assets/trainers4.jpg";
import { motion } from "motion/react";

const Trainers = () => {
  return (
    <div className="rounded-xl flex items-end section-padding">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Description */}
        <div className="flex flex-col flex-1 gap-4 py-10 lg:py-0 text-center lg:text-left">
          <p className="subtitle-dark">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeIn" }}
              viewport={{ once: true }}
              className="text-text/80"
            >
              &bull; Trainers{" "}
            </motion.span>
          </p>
          <motion.h2
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            viewport={{ once: true }}
            className="title-dark"
          >
            Coaches committed to your <span className="italic">goals</span>
          </motion.h2>
          <motion.p
            initial={{ y: 10 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            viewport={{ once: true }}
            className="text-xs lg:text-sm text-text/60"
          >
            We’re committed to delivering an exceptional fitness experience.
            From your first session to your final goal, we provide expert
            guidance and unwavering motivation every step of the way.
          </motion.p>
          <motion.button
            initial={{ y: 10 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            viewport={{ once: true }}
            className="button self-center lg:self-start w-auto"
          >
            Meet our team
          </motion.button>
        </div>
        {/* Trainers */}
        <div className="flex-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-4">
            <TrainersCard
              image={trainers}
              name={"Alyssa Grant"}
              position={"Certified Personal Trainer"}
            />
            <TrainersCard
              image={trainers1}
              name={"Marcus Bell"}
              position={"Strength & Conditioning Coach"}
            />
            <TrainersCard
              image={trainers2}
              name={"Tanya Rivers"}
              position={"Group Fitness Instructor"}
            />
            <TrainersCard
              image={trainers3}
              name={"Ethan Cruz"}
              position={"Nutrition & Wellness Specialist"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainers;
