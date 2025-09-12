import Link from "next/link";

export default function Menu() {
  return (
    <nav className="l-header__nav">
      <Link href="/">Home</Link>
      <Link href="/buttons">Buttons</Link>
      <Link href="/form">Form</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
