import React from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";

const images = [
  { src: img1, alt: "Path Image 1" },
  { src: img2, alt: "Path Image 2" },
];

const Images = () => {
  return (
    <div className="w-full flex flex-col md:flex-row px-5 gap-4 justify-center">
      {images.map((image, idx) => (
        <img
          key={idx}
          src={image.src}
          alt={image.alt}
          className="w-full md:max-w-md h-64 md:h-80 rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default Images;
