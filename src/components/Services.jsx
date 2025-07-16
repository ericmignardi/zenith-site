import services from "../assets/services.jpg";
import services1 from "../assets/services1.jpg";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 p-2 lg:p-20">
      <div className="flex flex-col justify-center items-center gap-4 text-center w-[80%] px-10 py-10">
        <p className="subtitle-dark">
          <span className="text-text/80">&bull;</span> Services
        </p>
        <h2 className="title-dark">
          Reaching your fitness goals doesn't have to be{" "}
          <span className="italic">overwhelming</span>
        </h2>
        <button className="button">See all services</button>
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
