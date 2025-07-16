import TestimonialsCard from "./TestimonialsCard";
import testimonials from "../assets/testimonials.jpg";
import testimonials1 from "../assets/testimonials1.jpg";
import testimonials2 from "../assets/testimonials2.jpg";

const Testimonials = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 p-2 lg:p-20">
      {/* Header */}
      <div className="flex flex-col justify-center items-center gap-4 text-center w-[80%] px-10 py-10">
        <p className="subtitle-dark">
          <span className="text-text/80">&bull;</span> Testimonials
        </p>
        <h2 className="title-dark">
          What our clients <span className="italic">say</span>
        </h2>
        <p className="text-xs lg:text-sm font-light text-text/60">
          Our goal is to provide clients with an exceptional fitness experience,
          offering top-tier service every step of the way.
        </p>
      </div>
      {/* Testimonials */}
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-4">
        <TestimonialsCard
          review={
            "This service completely exceeded my expectations. The team was professional, responsive, and delivered exactly what I needed. Highly recommend to anyone looking for quality and reliability."
          }
          image={testimonials}
          name={"Jessica Martinez"}
          location={"Toronto, ON"}
        />
        <TestimonialsCard
          review={
            "I’ve tried many similar solutions before, but none came close to this one. It’s user-friendly, efficient, and has made my daily tasks so much easier. Five stars!"
          }
          image={testimonials1}
          name={"Samantha Lee"}
          location={"Ottawa, ON"}
          bg={"bg-gray-200"}
        />
        <TestimonialsCard
          review={
            "From start to finish, the experience was smooth and enjoyable. Customer support was fantastic and always ready to help. I’m very impressed and will definitely be back."
          }
          image={testimonials2}
          name={"David Chen"}
          location={"Hamilton, ON"}
          bg={"bg-primary"}
          text={"text-background"}
        />
      </div>
    </div>
  );
};

export default Testimonials;
