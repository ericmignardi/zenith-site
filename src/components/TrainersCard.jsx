import { FiArrowRight } from "react-icons/fi";

const TrainersCard = ({ image, name, position }) => {
  return (
    <div className="flex flex-col gap-2 justify-center">
      <img className="h-80 rounded-xl object-cover" src={image} alt="" />
      <div className="flex justify-between items-center bg-background rounded-xl p-4">
        <div className="flex flex-col justify-center gap-2">
          <h3>{name}</h3>
          <span className="text-xs lg:text-sm font-light text-text/60">
            {position}
          </span>
        </div>
        <div>
          <div className="bg-primary rounded-full p-4 text-background cursor-pointer hover:opacity-90 transition-opacity">
            <FiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainersCard;
