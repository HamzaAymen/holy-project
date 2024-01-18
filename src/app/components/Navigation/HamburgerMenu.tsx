import menuBtn from "../../../../public/navbar/menu-btn.svg";
import Image from "next/image";

const HamburgerMenu = ({ showNav }: any) => {
  return (
    <div className="mobile-only" onClick={showNav}>
      <Image src={menuBtn} alt="Menu" />
    </div>
  );
};

export default HamburgerMenu;
