"use client";
import Link from "next/link";
import { useEffect, useState, useRef, LegacyRef } from "react";
import HamburgerMenu from "./Navigation/HamburgerMenu";
import { gsap } from "gsap";
import { RefObject } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  // Reffernce For Animation
  const firstFourLinks: RefObject<HTMLDivElement> | null = useRef(null);
  const title: RefObject<HTMLHeadingElement> | null = useRef(null);
  const lastTwoLinks: RefObject<HTMLDivElement> | null = useRef(null);

  // Show navigation on mobile
  const showNav = () => setShowMenu((prev) => !prev);

  // Animation
  useEffect(() => {
    // Getting All Links Togother
    if (firstFourLinks.current && lastTwoLinks.current) {
      const allLinks = [
        title.current,
        ...firstFourLinks.current.children,
        ...lastTwoLinks.current.children,
      ];

      // Desktop Navigation Animation
      if (!showMenu && window.innerWidth > 1000) {
        gsap.fromTo(
          allLinks,
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
          }
        );
      }
      // Mobile Navigation On Closing
      else if (!showMenu && window.innerWidth < 1000) {
        gsap.fromTo(
          allLinks,
          {
            opacity: 1,
            y: 0,
          },
          {
            opacity: 0,
            y: 20,
            duration: 0.2,
            ease: "power1.out",
            stagger: 0.1,
            delay: 0.2,
          }
        );
      }
      // Mobile Navigation On Opening
      else {
        gsap.fromTo(
          allLinks,
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
            delay: 0.2,
          }
        );
      }
    }
  }, [showMenu]);

  return (
    <div className={`navbar-container ${showMenu ? "expanded" : "collapsed"}`}>
      <HamburgerMenu showNav={showNav} />

      <nav className="navbar">
        {/* Title */}
        <div className="nav-title">
          <h1 ref={title}>#liveingreece</h1>
        </div>
        {/* End Title */}

        {/* Links */}
        <ul className="links-container">
          {/* First Four */}
          <div ref={firstFourLinks} className="first-four-container">
            <li className="capitalize for">for</li>
            <li className="link">
              <Link href="/">talent</Link>
            </li>
            <li className="link">
              <Link href="/">entrepreneurs</Link>
            </li>
            <li className="link">
              <Link href="/">investors</Link>
            </li>
          </div>
          {/* Last Two */}
          <div className="last-two-container" ref={lastTwoLinks}>
            <li className="capitalize link">
              <Link href="/">INNITIATIVES</Link>
            </li>
            <li className="uppercase link">
              <Link href="/">q&a</Link>
            </li>
          </div>
        </ul>
        {/* End Links */}
      </nav>
    </div>
  );
}
