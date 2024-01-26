import Image from "next/image";
import BigArrow from "../../../../public/arrows/arrow.svg";
import secondrow from "../SecondRow/secondrow.module.scss";

export default function manageOverlay(
  circleAttraction: { x: number; y: number },
  rotate: number
) {
  return (
    <div className={secondrow.overlayContainer}>
      <div
        className={secondrow.overlaycircle}
        style={{
          left: `${circleAttraction.x - 40}%`,
          top: `${circleAttraction.y - 40}%`,
        }}
      ></div>
      <Image
        src={BigArrow}
        alt="Arrow"
        id="arrow"
        style={{
          transform: `rotate(${rotate - 180}deg)`,
        }}
      />
    </div>
  );
}
