"use client";

import { CircleX } from "lucide-react";
import Image from "next/image";

interface ModalProps {
  title: string;
  imageSrc?: string;
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function Modal({
  title,
  imageSrc,
  open,
  onClose,
  children,
}: ModalProps) {
  if (!open) return null;

  // Use imageSrc from props
  return (
    <div className="c-modal-overlay">
      <div
        className={
          typeof imageSrc === "string" ? "c-modal c-modal--with-bg" : "c-modal"
        }
      >
        <button className="c-modal-close" onClick={onClose} aria-label="Fermer">
          <CircleX />
        </button>
        {imageSrc && (
          <div className="c-modal-bg">
            <Image
              src={imageSrc}
              alt={title || "Modal image"}
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="c-modal-bg-overlay" />
          </div>
        )}
        <div className="c-modal-content">
          {title && <h3>{title}</h3>}
          {children}
        </div>
      </div>
    </div>
  );
}
