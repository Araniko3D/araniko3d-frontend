import { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { GoDotFill, GoDot } from "react-icons/go";
import Image from "../360image/360image";
import "./ImageSlider.css";

export function ImageSlider({ images }) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }
  return (
    <section
      aria-label="Image Slider"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {images.map((url, index) => (
          <div
            key={url}
            alt={url}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
            aria-hidden={imageIndex !== index}
          >
            <Image imageUrl={url} />
          </div>
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ marginLeft: '650px' }}
        aria-label="View Previous Image"
      >
        <AiOutlineLeft />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ marginLeft: '700px' }}
        aria-label="View Next Image"
      >
        <AiOutlineRight />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: "0.5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {/* {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? <GoDotFill /> : <GoDot />}
          </button>
        ))} */}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  );
}
