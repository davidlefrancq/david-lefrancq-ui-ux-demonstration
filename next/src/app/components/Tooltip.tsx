import { useState } from "react";

interface TooltipProps {
  children: React.ReactNode;
  text: string;
  position?: "top" | "bottom" | "left" | "right";
}

export default function Tooltip({
  children,
  text,
  position = "top",
}: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className="c-tooltip-wrapper"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      style={{ position: "relative", display: "inline-block" }}
    >
      {children}
      {visible && (
        <span className={`c-tooltip c-tooltip--${position}`}>{text}</span>
      )}
    </span>
  );
}
