"use client";
import secondrow from "./secondrow.module.scss";
import Image from "next/image";
import ImagOne from "../../../../public/hero-photography/Rectangle 206.png";
import ImagTwo from "../../../../public/hero-photography/Rectangle 207.png";
import Arrow from "../../../../public/arrows/frame.svg";
import BigArrow from "../../../../public/arrows/arrow.svg";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { RefObject } from "react";
import { gsap } from "gsap/gsap-core";

export default function SecondRow() {
  const [hoverd, setHoverd] = useState(false);
  const [rotate, setRotate] = useState(0);

  // Reffernce For Animation
  const textRef: RefObject<HTMLDivElement> | null = useRef(null);
  const firstImageRef: RefObject<HTMLImageElement> | null = useRef(null);
  const secondImageRef: RefObject<HTMLImageElement> | null = useRef(null);
  const firstImageMaskRef: RefObject<HTMLImageElement> | null = useRef(null);
  const secondImageMaskRef: RefObject<HTMLImageElement> | null = useRef(null);

  // When Hover On Circle Change Hoverd To True
  const changeHoverStats = () => setHoverd(true);

  // Calculate Mouse Position
  const calculateMousePosition = (e: React.MouseEvent) => {
    const arrow = document.getElementById("arrow");
    const { clientX, clientY } = e;
    if (arrow) {
      const rect = arrow.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const angleRad = Math.atan2(clientY - centerY, clientX - centerX);
      const angleDeg = (angleRad * 180) / Math.PI;
      setRotate(angleDeg);
    }
  };

  // Animation
  useEffect(() => {
    // Image Animation
    if (firstImageRef.current && secondImageRef.current) {
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
          delay: 0.6,
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
          delay: 0.6,
        }
      );

      // Text Animation
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          duration: 1.3,
          y: 0,
          ease: "power4.out",
          stagger: 0.1,
          delay: 0.6,
        }
      );
    }
  }, []);

  return (
    <div className={secondrow.container} onMouseMove={calculateMousePosition}>
      {/* First Image */}
      <div className={`${secondrow.imagesContainer}`}>
        <div ref={firstImageMaskRef} className={secondrow.imageMask}>
          <Image ref={firstImageRef} src={ImagOne} alt="hero-image" />
        </div>
      </div>

      {/* Text  */}
      <div ref={textRef} className={secondrow.textContainer}>
        <h2>
          Right in the cradle of Western civilization and at the heart of
          contemporary innovation, we invite innovative minds, ecosystem-driving
          entrepreneurs and leading investors to explore, grow, and invest in a
          country that blends rich history, captivating culture and a promising
          entrepreneurial ecosystem.
        </h2>

        {/* CTA Button */}
        <div className={`${secondrow.becomecitizen} ${secondrow.cursortodark}`}>
          <Link href="/">Become a citizen</Link>
          <Image src={Arrow} alt="Arrow" />
        </div>
      </div>

      {/* Second Image */}
      <div className={`${secondrow.cursortodark} ${secondrow.imagesContainer}`}>
        <div ref={secondImageMaskRef} className={secondrow.imageMask}>
          <Image
            ref={secondImageRef}
            src={ImagTwo}
            alt="hero-image"
            onMouseOver={changeHoverStats}
          />
        </div>

        {/* Overloy Circle On Hover */}
        {hoverd ? (
          <div className={secondrow.overlaycircle}>
            <Image
              src={BigArrow}
              alt="Arrow"
              id="arrow"
              style={{
                transform: `rotate(${rotate - 180}deg)`,
              }}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
