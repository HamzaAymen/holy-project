export default function calculateMousePosition(
  e: React.MouseEvent,
  setCircleAttraction: any,
  setRotate: any
) {
  const arrow = document.getElementById("arrow")!;
  let containerRect = arrow?.getBoundingClientRect();
  const { clientX, clientY } = e;

  const centerX = containerRect?.left + containerRect?.width / 2;
  const centerY = containerRect?.top + containerRect?.height / 2;
  const angleRad = Math.atan2(clientY - centerY, clientX - centerX);
  const angleDeg = (angleRad * 180) / Math.PI;
  setRotate(angleDeg);

  // Calculate The Move Of The Yellow Circle
  const mouseXPercentage =
    (clientX - containerRect?.left) / containerRect?.width;
  const mouseYPercentage =
    (clientY - containerRect?.top) / containerRect?.height;

  // Calculate the new position based on the percentages
  const newX = (mouseXPercentage - 0.5) * 20 + 50;
  const newY = (mouseYPercentage - 0.5) * 20 + 50;

  // Update the Yellow position state
  setCircleAttraction({ x: newX, y: newY });
}
