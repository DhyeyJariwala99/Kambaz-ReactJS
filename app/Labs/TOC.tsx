import Link from "next/link";

export default function TOC() {
  return (
    <nav className="nav flex-column p-3">
      <Link href="/Labs" className="nav-link text-primary">Home</Link>
      <Link href="/Labs/Lab1" className="nav-link text-primary">Lab 1</Link>
      <Link href="/Labs/Lab2" className="nav-link text-primary">Lab 2</Link>
      <Link href="/Labs/Lab3" className="nav-link text-primary">Lab 3</Link>
      <Link href="/" className="nav-link text-primary">Kambaz</Link>
    </nav>
  );
}
