"use client";

import React from "react";
import { Button } from "../components/Buttons/Button";

export default function FormDemoPage() {
  return (
    <main className="l-container">
      <h1 className="c-form__title">Form</h1>
      <form className="c-form">
        <div className="c-form__group">
          <label htmlFor="demo-input" className="c-form__label">
            Input :
          </label>
          <input
            id="demo-input"
            name="demo-input"
            type="text"
            placeholder="Votre texte ici"
            className="c-input"
          />
        </div>
        <div className="c-form__group">
          <label htmlFor="demo-textarea" className="c-form__label">
            Textarea :
          </label>
          <textarea
            id="demo-textarea"
            name="demo-textarea"
            rows={4}
            placeholder="Votre texte ici"
            className="c-textarea"
          />
        </div>
        <div className="c-form__group">
          <label className="c-form__label">
            <input
              type="checkbox"
              name="demo-checkbox"
              className="c-checkbox"
            />{" "}
            Checkbox
          </label>
        </div>
        <div className="c-form__group">
          <label htmlFor="demo-select" className="c-form__label">
            Select :
          </label>
          <select id="demo-select" name="demo-select" className="c-select">
            <option value="">Choisir...</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="c-form__actions">
          <Button type="submit" label="Envoyer" variant="solid" size="md" />
        </div>
      </form>
    </main>
  );
}
