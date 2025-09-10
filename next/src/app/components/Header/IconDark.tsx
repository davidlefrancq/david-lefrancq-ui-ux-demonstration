import * as React from "react";

const IconDark = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    {...props}
  >
    <circle cx="12" cy="12" r="4" stroke="currentColor" />
    <path d="M12 2v2" stroke="currentColor" />
    <path d="M12 20v2" stroke="currentColor" />
    <path d="M2 12h2" stroke="currentColor" />
    <path d="M20 12h2" stroke="currentColor" />
    <path d="m4.93 4.93 1.41 1.41" stroke="currentColor" />
    <path d="m17.66 17.66 1.41 1.41" stroke="currentColor" />
    <path d="m6.34 17.66-1.41 1.41" stroke="currentColor" />
    <path d="m19.07 4.93-1.41 1.41" stroke="currentColor" />
  </svg>
);

export default IconDark;
