import discover from "./discover.module.scss";
import Link from "next/link";
import whiteArrow from "../../../../public/arrows/white-arrow.svg";

export default function Discover() {
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
      <h1>Discover innovation opportunities</h1>

      {/* Navigation Container */}
      <div className={discover.navigationContainer}>
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
