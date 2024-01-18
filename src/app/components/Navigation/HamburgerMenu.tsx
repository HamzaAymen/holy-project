import menuBtn from "../../../../public/navbar/menu-btn.svg";
import Image from "next/image";
import React from "react";

type HamburgerMenuProps = {
  showNav: () => void; // Adjust the type based on the showNav function signature
};

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ showNav }) => {
  return (
    <div className="mobile-only" onClick={showNav}>
      <Image src={menuBtn} alt="Menu" />
    </div>
  );
};

export default HamburgerMenu;
