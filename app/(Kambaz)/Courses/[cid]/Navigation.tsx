"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

export default function CourseNavigation() {
  const pathname = usePathname();

  const links = [
    { href: "/Courses/1234/Home", id: "wd-course-home-link", label: "Home" },
    { href: "/Courses/1234/Modules", id: "wd-course-modules-link", label: "Modules" },
    { href: "/Courses/1234/Piazza", id: "wd-course-piazza-link", label: "Piazza" },
    { href: "/Courses/1234/Zoom", id: "wd-course-zoom-link", label: "Zoom Meetings" },
    { href: "/Courses/1234/Assignments", id: "wd-course-assignments-link", label: "Assignments" },
    { href: "/Courses/1234/Quizzes", id: "wd-course-quizzes-link", label: "Quizzes" },
    { href: "/Courses/1234/Grades", id: "wd-course-grades-link", label: "Grades" },
    { href: "/Courses/1234/People", id: "wd-course-people-link", label: "People" },
  ];

  return (
    <nav className={styles.courseNav}>
      <ul className={styles.navList}>
        {links.map((link) => (
          <li key={link.id} className={styles.navItem}>
            <Link
              href={link.href}
              id={link.id}
              className={`${styles.navLink} ${pathname.includes(link.href.split('/').pop() || '') ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}