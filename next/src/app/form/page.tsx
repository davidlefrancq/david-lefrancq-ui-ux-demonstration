"use client";

import React from "react";
import { Button } from "../components/Buttons/Button";
import { ColorPicker } from "../components/ColorPicker";
import { FormInput } from "../components/FormInput";
import { FormCheckbox } from "../components/FormCheckbox";
import { FormRadio } from "../components/FormRadio";
import { FormFile } from "../components/FormFile";

export default function FormDemoPage() {
  return (
    <main className="l-container">
      <h1 className="c-form__title">Form</h1>
      <form className="c-form">
        {/* Search */}
        <FormInput
          id="input-search"
          name="input-search"
          type="search"
          label="Search :"
          placeholder="Rechercher..."
        />

        {/* Text */}
        <FormInput
          id="input-text"
          name="input-text"
          type="text"
          label="Text :"
          placeholder="Texte simple"
        />
        {/* Password */}
        <FormInput
          id="input-password"
          name="input-password"
          type="password"
          label="Password :"
          placeholder="Mot de passe"
        />
        {/* Email */}
        <FormInput
          id="input-email"
          name="input-email"
          type="email"
          label="Email :"
          placeholder="Adresse email"
        />
        {/* URL */}
        <FormInput
          id="input-url"
          name="input-url"
          type="url"
          label="URL :"
          placeholder="https://..."
        />
        {/* Tel */}
        <FormInput
          id="input-tel"
          name="input-tel"
          type="tel"
          label="Téléphone :"
          placeholder="06 12 34 56 78"
        />
        {/* Number */}
        <FormInput
          id="input-number"
          name="input-number"
          type="number"
          label="Number :"
          min={0}
          max={100}
        />
        {/* Range */}
        <FormInput
          id="input-range"
          name="input-range"
          type="range"
          label="Range :"
          min={0}
          max={100}
        />
        {/* Date */}
        <FormInput
          id="input-date"
          name="input-date"
          type="date"
          label="Date :"
        />
        {/* Datetime-local */}
        <FormInput
          id="input-datetime"
          name="input-datetime"
          type="datetime-local"
          label="Datetime-local :"
        />
        {/* Month */}
        <FormInput
          id="input-month"
          name="input-month"
          type="month"
          label="Month :"
        />
        {/* Week */}
        <FormInput
          id="input-week"
          name="input-week"
          type="week"
          label="Week :"
        />
        {/* Rime */}
        <FormInput
          id="input-time"
          name="input-time"
          type="time"
          label="Time :"
        />
        {/* Color */}
        <div className="c-form__group">
          <label htmlFor="input-color" className="c-form__label">
            Color :
          </label>
          <ColorPicker name="Color" />
        </div>
        {/* Checkbox */}
        <FormCheckbox name="input-checkbox" label="Checkbox" />
        {/* Radio */}
        <FormRadio
          name="input-radio"
          options={[
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
          ]}
        />
        {/* File */}
        <FormFile id="input-file" name="input-file" label="File :" />

        {/* submit and reset on one line */}
        <div className="c-form__group c-form__group--buttons">
          {/* Reset */}
          <Button type="reset" label="Reset" state="warning" />
          {/* Submit */}
          <Button label="Valider" />
        </div>
      </form>
    </main>
  );
}
