"use client";
import firstrow from "./firstrow.module.scss";
import Image from "next/image";
import ImagOne from "../../../../public/hero-photography/Rectangle 204.png";
import ImagTwo from "../../../../public/hero-photography/Rectangle 205.png";
import { useEffect, useRef } from "react";
import { RefObject } from "react";
import { gsap } from "gsap/gsap-core";

export default function FirstRow() {
  // Reffernce For Animation
  const textRef: RefObject<HTMLHeadingElement> | null = useRef(null);
  const firstImageRef: RefObject<HTMLImageElement> | null = useRef(null);
  const secondImageRef: RefObject<HTMLImageElement> | null = useRef(null);
  const firstImageMaskRef: RefObject<HTMLImageElement> | null = useRef(null);
  const secondImageMaskRef: RefObject<HTMLImageElement> | null = useRef(null);

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
      <div className={firstrow.imagesContainer}>
        <div ref={firstImageMaskRef} className={firstrow.imageMask}>
          <Image ref={firstImageRef} src={ImagOne} alt="hero-image" />
        </div>
      </div>
      {/* Second Image */}
      <div className={firstrow.imagesContainer}>
        <div ref={secondImageMaskRef} className={firstrow.imageMask}>
          <Image ref={secondImageRef} src={ImagTwo} alt="hero-image" />
        </div>
      </div>
    </div>
  );
}
