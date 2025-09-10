"use client";

import ButtonDemo from "./components/Buttons";

export default function Home() {
  return (
    <main className="l-container">
      <h1 className="c-title">UI/UX Demonstration</h1>
      <p>
        This is a simple Next.js project demonstrating a few UI/UX components
        with SCSS (BEM).
      </p>
      <p>
        Ceci est une démonstration d&apos;interface et expérience utilisateur
        avec la technologie SCSS (BEM).
      </p>

      <ButtonDemo />
    </main>
  );
}
