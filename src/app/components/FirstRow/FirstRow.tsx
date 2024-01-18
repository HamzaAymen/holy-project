"use client";
import firstrow from "./firstrow.module.scss";
import Image from "next/image";
import ImagOne from "../../../../public/hero-photography/Rectangle 204.png";
import ImagTwo from "../../../../public/hero-photography/Rectangle 205.png";

export default function FirstRow() {
  return (
    <div className={firstrow.container}>
      {/* Heading */}
      <div className={firstrow.headingContainer}>
        <h1>greece the birthplace of ideas</h1>
      </div>
      {/* First Image */}
      <div className={firstrow.imagesContainer}>
        <Image src={ImagOne} alt="hero-image" />
      </div>
      {/* Second Image */}
      <div className={firstrow.imagesContainer}>
        <Image src={ImagTwo} alt="hero-image" />
      </div>
    </div>
  );
}
