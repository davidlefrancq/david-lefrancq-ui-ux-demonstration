"use client";

import * as React from "react";
import { Send, CheckCircle2, XCircle, Loader2 } from "lucide-react";

type ButtonState = "idle" | "loading" | "success" | "error";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  state?: ButtonState;
  label?: string; // fallback if no children
  variant?: "solid" | "ghost";
};

// tiny class joiner (évite clsx)
const cx = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(" ");

export function Button({
  state = "idle",
  label,
  variant = "solid",
  className,
  disabled,
  children,
  ...rest
}: Props) {
  const isLoading = state === "loading";
  const classes = cx(
    "c-button",
    variant === "ghost" && "c-button--ghost",
    state !== "idle" && `c-button--${state}`,
    className,
  );

  const renderIcon = () => {
    if (isLoading)
      return <Loader2 className="c-button__spinner" aria-hidden="true" />;
    if (state === "success")
      return <CheckCircle2 className="c-button__icon" aria-hidden="true" />;
    if (state === "error")
      return <XCircle className="c-button__icon" aria-hidden="true" />;
    return <Send className="c-button__icon" aria-hidden="true" />;
  };

  return (
    <button
      type="button"
      className={classes}
      aria-busy={isLoading || undefined}
      aria-live="polite"
      disabled={disabled || isLoading}
      {...rest}
    >
      {renderIcon()}
      <span className="c-button__label">
        {label ??
          children ??
          (isLoading
            ? "Loading…"
            : state === "success"
              ? "Sent"
              : state === "error"
                ? "Error"
                : "Send")}
      </span>
    </button>
  );
}
