import React, { useState } from "react";

export interface FormRadioProps {
  name: string;
  options: Array<{ label: string; value: string }>;
  className?: string;
  selectedValue?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const FormRadio: React.FC<FormRadioProps> = ({
  name,
  options,
  className = "c-radio",
  selectedValue,
  onChange,
}) => {
  const [value, setValue] = useState<string>(selectedValue || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) onChange(e);
  };

  return (
    <div className="c-form__group">
      <span className="c-form__label">Radio :</span>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name={name}
            value={option.value}
            className={className}
            checked={value === option.value}
            onChange={handleChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};
