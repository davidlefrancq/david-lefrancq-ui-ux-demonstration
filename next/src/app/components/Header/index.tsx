"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import IconDark from "./IconDark";
import IconLight from "./IconLight";
import Menu from "../Menu";

const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const [lang, setLang] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && navigator) {
      setLang(navigator.language);
    }
  }, []);

  return (
    <header className="l-header">
      <div className="l-header__top-row">
        <div className="l-header__logo">
          <Link href="/">
            <Image
              src="/DL.svg"
              alt="Logo DL"
              title="David Lefrancq"
              width={75}
              height={75}
              className="c-logo"
            />
          </Link>
        </div>
        <h1 className="l-header__title c-title">UI/UX Demonstration</h1>
        <button
          className="c-theme-switch"
          onClick={toggleTheme}
          aria-label="Toggle light/dark mode"
        >
          <span className="c-theme-switch__icon-wrapper">
            {theme === "dark" ? (
              <IconLight className="c-theme-switch__icon" />
            ) : (
              <IconDark className="c-theme-switch__icon" />
            )}
          </span>
        </button>
      </div>
      <div className="l-header__desc">
        {lang ? (
          lang.startsWith("fr") ? (
            <p>Démonstration UI/UX.</p>
          ) : (
            <p>UI/UX demonstration.</p>
          )
        ) : null}
      </div>

      <Menu />
    </header>
  );
};

export default Header;
