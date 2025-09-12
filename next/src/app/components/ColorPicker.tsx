import React, { useState, useRef, useEffect } from "react";

function hsvToRgb(h: number, s: number, v: number) {
  const f = (n: number, k = (n + h / 60) % 6) =>
    v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
  return [f(5), f(3), f(1)].map((x) => Math.round(x * 255));
}

interface ColorPickerProps {
  value?: string;
  onChange?: (color: string) => void;
  name?: string;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  value = "#000000",
  onChange,
  name,
}) => {
  const [color, setColor] = useState(value);
  const [open, setOpen] = useState(false);
  const [hue, setHue] = useState(0);
  const [sat, setSat] = useState(1);
  const [val, setVal] = useState(1);
  const [hexInput, setHexInput] = useState(value);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleButtonClick = () => {
    setOpen((prev) => !prev);
  };

  // Gradient click
  const handleGradientClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const s = Math.max(0, Math.min(1, x / rect.width));
    const v = 1 - Math.max(0, Math.min(1, y / rect.height));
    setSat(s);
    setVal(v);
    const rgb = hsvToRgb(hue, s, v);
    const hex = `#${rgb.map((x) => x.toString(16).padStart(2, "0")).join("")}`;
    setColor(hex);
    setHexInput(hex);
    onChange?.(hex);
  };

  // Hue wheel click
  const handleHueClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const h = Math.max(0, Math.min(1, x / rect.width)) * 360;
    setHue(h);
    const rgb = hsvToRgb(h, sat, val);
    const hex = `#${rgb.map((x) => x.toString(16).padStart(2, "0")).join("")}`;
    setColor(hex);
    setHexInput(hex);
    onChange?.(hex);
  };

  // Hex input
  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setHexInput(val);
    if (/^#[0-9a-fA-F]{6}$/.test(val)) {
      setColor(val);
      onChange?.(val);
    }
  };

  return (
    <span
      style={{ position: "relative", display: "inline-block" }}
      ref={pickerRef}
    >
      <button
        type="button"
        aria-label="Choisir une couleur"
        onClick={handleButtonClick}
        style={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          border: "none",
          background: color,
          boxShadow: "0 0 0 2px var(--color-form-border)",
          cursor: "pointer",
          outline: open ? "2px solid var(--color-form-focus-border)" : "none",
          display: "inline-block",
        }}
      />
      {open && (
        <div
          style={{
            position: "absolute",
            top: 50,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#222",
            borderRadius: 12,
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            padding: 16,
            zIndex: 10,
            minWidth: 220,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          {/* Name */}
          {name && (
            <span
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 18,
                margin: 0,
              }}
            >
              {name}
            </span>
          )}
          {/* Gradient area */}
          <div
            style={{
              width: 180,
              height: 120,
              borderRadius: 8,
              background: `linear-gradient(to right, #fff, hsl(${hue},100%,50%)), linear-gradient(to bottom, transparent, #000)`,
              backgroundBlendMode: "multiply",
              position: "relative",
              cursor: "crosshair",
              marginBottom: 8,
            }}
            onClick={handleGradientClick}
          />
          {/* Hue bar */}
          <div
            style={{
              width: 180,
              height: 16,
              borderRadius: 8,
              background:
                "linear-gradient(to right, red, yellow, lime, cyan, blue, magenta, red)",
              cursor: "pointer",
              marginBottom: 8,
            }}
            onClick={handleHueClick}
          />
          {/* Hex input + Validate button inline */}
          <div
            style={{
              display: "flex",
              gap: 8,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 8,
            }}
          >
            <input
              type="text"
              value={hexInput}
              onChange={handleHexChange}
              style={{
                width: 100,
                padding: "5px",
                borderRadius: 6,
                border: "1px solid #444",
                background: "#111",
                color: "#fff",
                fontFamily: "monospace",
                fontSize: 14,
                display: "block",
              }}
              maxLength={7}
              aria-label="Code couleur hexadécimal"
            />
            <button
              type="button"
              style={{
                padding: "6px 18px",
                borderRadius: 6,
                border: "none",
                background: "var(--color-primary)",
                color: "#fff",
                fontWeight: 600,
                fontSize: 15,
                cursor: "pointer",
                boxShadow: "0 1px 4px rgba(0,0,0,0.10)",
                transition: "background 0.2s",
              }}
              onClick={() => setOpen(false)}
            >
              Valider
            </button>
          </div>
        </div>
      )}
    </span>
  );
};
