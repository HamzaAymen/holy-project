"use client";
import Link from "next/link";
import { useState } from "react";
import HamburgerMenu from "./Navigation/HamburgerMenu";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  // Show navigation on mobile
  const showNav = () => setShowMenu((prev) => !prev);

  return (
    <div className={`navbar-container ${showMenu ? "expanded" : "collapsed"}`}>
      <HamburgerMenu showNav={showNav} />

      <nav className="navbar">
        {/* Title */}
        <div className="nav-title">
          <h1>#liveingreece</h1>
        </div>
        {/* End Title */}

        {/* Links */}
        <ul className="links-container">
          {/* First Four */}
          <div className="first-four-container">
            <li className="capitalize for">for</li>
            <li className="link">
              <Link href="/talent">talent</Link>
            </li>
            <li className="link">
              <Link href="/entrepreneurs">entrepreneurs</Link>
            </li>
            <li className="link">
              <Link href="/investors">investors</Link>
            </li>
          </div>
          {/* Last Two */}
          <div className="last-two-container">
            <li className="capitalize link">
              <Link href="/innitiatives">INNITIATIVES</Link>
            </li>
            <li className="uppercase link">
              <Link href="/faq">q&a</Link>
            </li>
          </div>
        </ul>
        {/* End Links */}
      </nav>
    </div>
  );
}
