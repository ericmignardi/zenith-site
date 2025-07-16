const TestimonialsCard = ({ bg, review, image, name, location, text }) => {
  return (
    <div
      className={`flex flex-col gap-2 h-80 border border-gray-200 rounded-xl p-4 ${
        bg ? bg : "bg-background"
      }`}
    >
      <p className={`flex-1 text-sm font-medium ${text ? text : "text-text"}`}>
        "{review}"
      </p>
      <div className="flex justify-start items-center gap-2">
        <img
          className="w-14 object-contain rounded-full"
          src={image}
          alt="Testimonial rewiewer image"
        />
        <div>
          <p className={`${text ? text : "text-text"}`}>{name}</p>
          <p
            className={`text-xs lg:text-sm font-light ${
              text ? text : "text-text/60"
            }`}
          >
            {location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
