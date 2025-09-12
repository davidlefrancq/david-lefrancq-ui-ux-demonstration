import React from "react";

export interface FormCheckboxProps {
  id?: string;
  name: string;
  label: string;
  className?: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const FormCheckbox: React.FC<FormCheckboxProps> = ({
  id,
  name,
  label,
  className = "c-checkbox",
  checked,
  onChange,
}) => (
  <div className="c-form__group">
    <label className="c-form__label">
      <input
        type="checkbox"
        id={id}
        name={name}
        className={className}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  </div>
);
