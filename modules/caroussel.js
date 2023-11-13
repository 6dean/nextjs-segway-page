import React from "react";
import styles from "../styles/Home.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo-thumbnail.png"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo-thumbnail.png"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo-thumbnail.png"
    onDragStart={handleDragStart}
    role="presentation"
  />,
];

const Caroussel = () => {
  return (
    <div className="">
      <div>
        <AliceCarousel mouseTracking items={items} />
      </div>
    </div>
  );
};

export default Caroussel;
