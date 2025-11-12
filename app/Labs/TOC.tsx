"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TOC() {
  const pathname = usePathname();

  return (
    <nav className="nav flex-column p-3">
      <Link 
        href="/Labs" 
        className={`nav-link ${pathname === "/Labs" ? "text-danger fw-bold" : "text-primary"}`}
      >
        Home
      </Link>
      <Link 
        href="/Labs/Lab1" 
        className={`nav-link ${pathname.includes("Lab1") ? "text-danger fw-bold" : "text-primary"}`}
      >
        Lab 1
      </Link>
      <Link 
        href="/Labs/Lab2" 
        className={`nav-link ${pathname.includes("Lab2") ? "text-danger fw-bold" : "text-primary"}`}
      >
        Lab 2
      </Link>
      <Link 
        href="/Labs/Lab3" 
        className={`nav-link ${pathname.includes("Lab3") ? "text-danger fw-bold" : "text-primary"}`}
      >
        Lab 3
      </Link>
      <Link 
        href="/Labs/Lab4" 
        className={`nav-link ${pathname.includes("Lab4") ? "text-danger fw-bold" : "text-primary"}`}
      >
        Lab 4
      </Link>
      <Link 
        href="/Labs/Lab5" 
        className={`nav-link ${pathname.includes("Lab5") ? "text-danger fw-bold" : "text-primary"}`}
      >
        Lab 5
      </Link>
      <Link 
        href="/" 
        className="nav-link text-primary"
      >
        Kambaz
      </Link>
      <a 
        href="https://github.com/DhyeyJariwala99/Kambaz-ReactJS" 
        className="nav-link text-primary"
        id="wd-github"
        target="_blank"
        rel="noopener noreferrer"
      >
        My GitHub
      </a>
    </nav>
  );
}