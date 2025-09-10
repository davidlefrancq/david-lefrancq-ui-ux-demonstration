"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="l-footer">
      <div className="l-footer__content">
        <p className="l-footer__text">
          © {new Date().getFullYear()} David Lefrancq. All rights reserved.
        </p>
        <nav className="l-footer__nav">
          <a
            href="https://github.com/davidlefrancq"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
