"use client";

import React from "react";
import { Button } from "../components/Buttons/Button";

export default function FormDemoPage() {
  return (
    <main className="l-container">
      <h1 className="c-form__title">Form</h1>
      <form className="c-form">
        {/* Input */}
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

        {/* Textarea */}
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

        {/* Checkbox */}
        <div className="c-form__group">
          <label className="c-form__label">
            <input
              type="checkbox"
              name="demo-checkbox"
              className="c-checkbox"
            />
            <span>Checkbox</span>
          </label>
        </div>

        {/* Radio */}
        <div className="c-form__group">
          <span className="c-form__label">Radio :</span>
          <label>
            <input
              type="radio"
              name="demo-radio"
              value="option1"
              className="c-radio"
            />
            Option 1
          </label>
          <label>
            <input
              type="radio"
              name="demo-radio"
              value="option2"
              className="c-radio"
            />
            Option 2
          </label>
          <label>
            <input
              type="radio"
              name="demo-radio"
              value="option3"
              className="c-radio"
            />
            Option 3
          </label>
        </div>

        {/* Select */}
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
