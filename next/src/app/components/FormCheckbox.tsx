import React from "react";

export interface FormCheckboxProps {
  id?: string;
  name: string;
  label: string;
  className?: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  variant?: "default" | "switch";
}

export const FormCheckbox: React.FC<FormCheckboxProps> = ({
  id,
  name,
  label,
  className = "c-checkbox",
  checked,
  onChange,
  variant = "default",
}) => (
  <div className=".c-switch">
    {variant === "switch" ? (
      <div className="c-switch__wrapper">
        <label className="c-switch">
          <input
            type="checkbox"
            id={id}
            name={name}
            className={className}
            checked={checked}
            onChange={onChange}
          />
          <span className="c-switch__slider" />
        </label>
        <span style={{ marginLeft: "0.75rem" }}>{label}</span>
      </div>
    ) : (
      <label className="c-form__label">
        <input
          type="checkbox"
          id={id}
          name={name}
          className={className}
          checked={checked}
          onChange={onChange}
        />
        {label ?? label}
      </label>
    )}
  </div>
);
