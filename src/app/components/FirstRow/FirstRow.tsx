"use client";
import firstrow from "./firstrow.module.scss";
import Image from "next/image";
import ImagOne from "../../../../public/hero-photography/Rectangle 204.png";
import ImagTwo from "../../../../public/hero-photography/Rectangle 205.png";
import { useEffect, useRef, useState } from "react";
import { RefObject } from "react";
import { gsap } from "gsap/gsap-core";
import manageOverlay from "../utils/manageOverlay";
import calculateMousePosition from "../utils/calculateMousePosition";

type hoverObj = {
  firstImg: boolean;
  secondImg: boolean;
};

export default function FirstRow() {
  const [hoverd, setHoverd] = useState<hoverObj>({
    firstImg: false,
    secondImg: false,
  });
  const [rotate, setRotate] = useState(0);
  const [circleAttraction, setCircleAttraction] = useState({ x: 0, y: 0 });

  // Reffernce For Animation
  const textRef: RefObject<HTMLHeadingElement> | null = useRef(null);
  const firstImageRef: RefObject<HTMLImageElement> | null = useRef(null);
  const secondImageRef: RefObject<HTMLImageElement> | null = useRef(null);
  const firstImageMaskRef: RefObject<HTMLImageElement> | null = useRef(null);
  const secondImageMaskRef: RefObject<HTMLImageElement> | null = useRef(null);

  // When Hover On Circle Change Show Yellow Overlay
  const changeHoverStats = (hoverState: hoverObj) => {
    hoverState.firstImg
      ? setHoverd({ firstImg: true, secondImg: false })
      : setHoverd({ firstImg: false, secondImg: true });
  };

  // When Hover Of The Circle Change Hide Yellow Overlay
  const removeOverlay = () => setHoverd({ firstImg: false, secondImg: false });

  // Animation
  useEffect(() => {
    // Text Animation
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power1.out",
          stagger: 0.1,
          delay: 0.3,
        }
      );
    }

    // Image Animation
    if (
      firstImageRef.current &&
      secondImageRef.current &&
      secondImageMaskRef.current &&
      firstImageMaskRef.current
    ) {
      const allMasks = [firstImageMaskRef.current, secondImageMaskRef.current];
      const allImages = [firstImageMaskRef.current, secondImageMaskRef.current];

      gsap.fromTo(
        allMasks,
        {
          clipPath: "circle(0% at center)",
        },
        {
          clipPath: "circle(50% at center)",
          duration: 1,
          ease: "power4.out",
          stagger: 0.1,
          delay: 0.3,
        }
      );
      gsap.fromTo(
        allImages,
        {
          scale: 0.8,
        },
        {
          scale: 1,
          duration: 1,
          ease: "power4.out",
          stagger: 0.1,
          delay: 0.3,
        }
      );
    }
  }, []);

  return (
    <div className={firstrow.container}>
      {/* Heading */}
      <div className={firstrow.headingContainer}>
        <h1 ref={textRef}>
          <span>Greece</span>
          <span>the</span>
          <span>birthplace</span>
          <span>of ideas</span>{" "}
        </h1>
      </div>
      {/* First Image */}
      <div
        className={firstrow.imagesContainer}
        onMouseMove={(e) => {
          calculateMousePosition(e, setCircleAttraction, setRotate);
          changeHoverStats({ firstImg: true, secondImg: false });
        }}
        onMouseLeave={removeOverlay}
      >
        <div
          ref={firstImageMaskRef}
          className={`${firstrow.imageMask} ${firstrow.cursortodark}`}
        >
          <Image ref={firstImageRef} src={ImagOne} alt="hero-image" />
          {/* Overloy Circle On Hover */}
          {hoverd.firstImg && manageOverlay(circleAttraction, rotate)}
        </div>
      </div>
      {/* Second Image */}
      <div
        className={firstrow.imagesContainer}
        onMouseMove={(e) => {
          calculateMousePosition(e, setCircleAttraction, setRotate);
          changeHoverStats({ firstImg: false, secondImg: true });
        }}
        onMouseLeave={removeOverlay}
      >
        <div
          ref={secondImageMaskRef}
          className={`${firstrow.imageMask} ${firstrow.cursortodark}`}
        >
          <Image ref={secondImageRef} src={ImagTwo} alt="hero-image" />

          {/* Overloy Circle On Hover */}
          {hoverd.secondImg && manageOverlay(circleAttraction, rotate)}
        </div>
      </div>
    </div>
  );
}
