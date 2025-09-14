import React from "react";

export interface FormFileProps {
  id: string;
  name: string;
  label: string;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const FormFile: React.FC<FormFileProps> = ({
  id,
  name,
  label,
  className = "c-input",
  onChange,
}) => (
  <div className="c-form__group">
    <label htmlFor={id} className="c-form__label">
      {label}
    </label>
    <input
      id={id}
      name={name}
      type="file"
      className={className}
      onChange={onChange}
    />
  </div>
);
