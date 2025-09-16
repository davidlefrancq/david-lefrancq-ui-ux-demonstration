import { CircleX } from "lucide-react";

interface ToastProps {
  children: React.ReactNode;
  type?: "success" | "error" | "info" | "warning";
  position?: "top" | "bottom" | "left" | "right";
  onClose?: () => void;
}

export default function Toast({
  children,
  type = "info",
  position = "top",
  onClose,
}: ToastProps) {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div
      className={`c-toast c-toast--${type} c-toast--${position}`}
      role="alert"
    >
      {typeof onClose === "function" && (
        <div className="c-toast__content--close">
          <button type="button" onClick={handleClose} aria-label="Close">
            <CircleX size={18} />
          </button>
        </div>
      )}
      <div className="c-toast__content">{children}</div>
    </div>
  );
}
