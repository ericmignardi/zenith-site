import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${hero})`,
      }}
      className="relative min-h-screen bg-center bg-cover bg-no-repeat m-2 rounded-xl text-background/80 flex items-end pb-8 lg:pb-16"
    >
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 rounded-xl z-10"></div>
      <div className="relative h-full w-full z-20 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 justify-between items-end px-6">
        <div className="flex flex-col justify-end gap-2 h-full">
          <p className="text-xs lg:text-sm font-light uppercase text-background/60">
            Hi, We're Zenith
          </p>
          <h1 className="text-4xl lg:text-5xl font-normal">
            Your trusted partners <br /> in{" "}
            <span className="italic">Fitness</span>
          </h1>
        </div>
        <div className="flex justify-start gap-10 lg:justify-between lg:gap-0 items-center">
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
