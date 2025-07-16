import React from "react";

const ServicesCard = ({ image, title, subtitle }) => {
  return (
    <div className="services-card">
      <img
        className="w-full rounded-xl aspect-[6/4] object-cover"
        src={image}
        alt={`${title} service image`}
      />
      <h3 className="text-lg">{title}</h3>
      <p className="text-xs lg:text-sm text-text/60">{subtitle}</p>
    </div>
  );
};

export default ServicesCard;
