"use client";

import Toast from "./Toast";

export interface IToastItem {
  id: number;
  type: "success" | "error" | "info" | "warning";
  message: React.ReactNode;
}

interface ToastPanelProps {
  toasts?: IToastItem[];
  removeToast?: (id: number) => void;
}

export default function ToastPanel({ toasts, removeToast }: ToastPanelProps) {
  const handleRemoveToast = (id: number) => {
    if (removeToast) {
      removeToast(id);
    }
  };

  return (
    <div className="c-toast-pannel">
      {toasts &&
        toasts.map((toast) => (
          <Toast
            key={toast.id}
            type={toast.type}
            position="top"
            onClose={() => handleRemoveToast(toast.id)}
          >
            {toast.message}
          </Toast>
        ))}
    </div>
  );
}
