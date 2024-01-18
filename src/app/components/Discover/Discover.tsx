"use client";
import discover from "./discover.module.scss";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { RefObject } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Discover() {
  // Reffernce For Animation
  const textRef: RefObject<HTMLDivElement> | null = useRef(null);
  const allLinks: RefObject<HTMLDivElement> | null = useRef(null);

  useEffect(() => {
    // Header Animation
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        duration: 1,
        y: 0,
        scrollTrigger: {
          trigger: textRef.current,
        },
      }
    );

    // Links Animation
    if (allLinks.current)
      gsap.fromTo(
        allLinks.current.children,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          duration: 1,
          y: 0,
          stagger: 0.3,
          scrollTrigger: {
            trigger: allLinks.current.children,
          },
        }
      );
  }, []);

  const svgIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M1.28625 0.148438H13.9088V12.6584H11.7488V4.24344L11.5013 3.99594L1.64625 13.8509L0.09375 12.2984L9.94875 2.44344L9.70125 2.19594H1.28625V0.148438Z"
        fill="#F6FBFB"
      />
    </svg>
  );
  return (
    // Container
    <div className={discover.container}>
      {/* Header */}
      <h1 ref={textRef}>Discover innovation opportunities</h1>

      {/* Navigation Container */}
      <div ref={allLinks} className={discover.navigationContainer}>
        {/* Link 1 */}
        <div className={discover.linksContainer}>
          <Link href="/">Talents</Link>
          {svgIcon}
        </div>
        {/* Link 2 */}
        <div className={discover.linksContainer}>
          <Link href="/">Enterpreneurs</Link>
          {svgIcon}
        </div>
        {/* Link  3*/}
        <div className={discover.linksContainer}>
          <Link href="/">Investors</Link>
          {svgIcon}
        </div>
      </div>
    </div>
  );
}
