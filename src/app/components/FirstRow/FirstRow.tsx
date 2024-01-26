"use client";
import firstrow from "./firstrow.module.scss";
import Image from "next/image";
import ImagOne from "../../../../public/hero-photography/Rectangle 204.png";
import ImagTwo from "../../../../public/hero-photography/Rectangle 205.png";
import { useEffect, useRef, useState } from "react";
import { RefObject } from "react";
import { gsap } from "gsap/gsap-core";
import BigArrow from "../../../../public/arrows/arrow.svg";

type hoverObj = {
  firstImg: boolean;
  secondImg: boolean;
};

// Managing The Overlay Html
function manageOverlay(
  circleAttraction: { x: number; y: number },
  rotate: number
) {
  return (
    <div className={firstrow.overlayContainer}>
      <div
        className={firstrow.overlaycircle}
        style={{
          left: `${circleAttraction.x - 40}%`,
          top: `${circleAttraction.y - 40}%`,
        }}
      ></div>
      <Image
        src={BigArrow}
        alt="Arrow"
        id="arrow"
        style={{
          transform: `rotate(${rotate - 180}deg)`,
        }}
      />
    </div>
  );
}

// Calculate Mouse Position For The Yellow Overlay
const calculateMousePosition = (
  e: React.MouseEvent,
  setCircleAttraction: any,
  setRotate: any
) => {
  const arrow = document.getElementById("arrow")!;
  let containerRect = arrow?.getBoundingClientRect();
  const { clientX, clientY } = e;

  const centerX = containerRect?.left + containerRect?.width / 2;
  const centerY = containerRect?.top + containerRect?.height / 2;
  const angleRad = Math.atan2(clientY - centerY, clientX - centerX);
  const angleDeg = (angleRad * 180) / Math.PI;
  setRotate(angleDeg);

  // Calculate The Move Of The Yellow Circle
  const mouseXPercentage =
    (clientX - containerRect?.left) / containerRect?.width;
  const mouseYPercentage =
    (clientY - containerRect?.top) / containerRect?.height;

  // Calculate the new position based on the percentages
  const newX = (mouseXPercentage - 0.5) * 20 + 50;
  const newY = (mouseYPercentage - 0.5) * 20 + 50;

  // Update the Yellow position state
  setCircleAttraction({ x: newX, y: newY });
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
        {/* <h1> greece the birthplace of ideas</h1> */}
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
        <div ref={firstImageMaskRef} className={firstrow.imageMask}>
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
        <div ref={secondImageMaskRef} className={firstrow.imageMask}>
          <Image ref={secondImageRef} src={ImagTwo} alt="hero-image" />

          {/* Overloy Circle On Hover */}
          {hoverd.secondImg && manageOverlay(circleAttraction, rotate)}
        </div>
      </div>
    </div>
  );
}
