"use client";
import secondrow from "./secondrow.module.scss";
import Image from "next/image";
import ImagOne from "../../../../public/hero-photography/Rectangle 206.png";
import ImagTwo from "../../../../public/hero-photography/Rectangle 207.png";
import Arrow from "../../../../public/arrows/frame.svg";
import BigArrow from "../../../../public/arrows/arrow.svg";
import Link from "next/link";
import { useState } from "react";

export default function SecondRow() {
  const [hoverd, setHoverd] = useState(false);
  const [rotate, setRotate] = useState(0);

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

  return (
    <div className={secondrow.container} onMouseMove={calculateMousePosition}>
      {/* First Image */}
      <div className={`${secondrow.imagesContainer}`}>
        <Image src={ImagOne} alt="hero-image" />
      </div>

      {/* Text  */}
      <div className={secondrow.textContainer}>
        <h2>
          Right in the cradle of Western civilization and at the heart of
          contemporary innovation, we invite innovative minds, ecosystem-driving
          entrepreneurs and leading investors to explore, grow, and invest in a
          country that blends rich history, captivating culture and a promising
          entrepreneurial ecosystem.
        </h2>

        {/* CTA Button */}
        <div className={`${secondrow.becomecitizen} ${secondrow.cursortodark}`}>
          <Link href="/become-citizen">Become a citizen</Link>
          <Image src={Arrow} alt="Arrow" />
        </div>
      </div>

      {/* Second Image */}
      <div className={`${secondrow.cursortodark} ${secondrow.imagesContainer}`}>
        <Image src={ImagTwo} alt="hero-image" onMouseOver={changeHoverStats} />

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
