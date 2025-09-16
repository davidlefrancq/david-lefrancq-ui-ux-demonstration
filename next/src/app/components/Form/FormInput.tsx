import React from "react";

export interface FormInputProps {
  id: string;
  name: string;
  type: string;
  label: string;
  className?: string;
  placeholder?: string;
  min?: number | string;
  max?: number | string;
}

export const FormInput: React.FC<FormInputProps> = ({
  id,
  name,
  type,
  label,
  className = "c-input",
  placeholder,
  min,
  max,
}) => (
  <div className="c-form__group">
    <label htmlFor={id} className="c-form__label">
      {label}
    </label>
    <input
      id={id}
      name={name}
      type={type}
      className={className}
      placeholder={placeholder}
      min={min}
      max={max}
    />
  </div>
);
