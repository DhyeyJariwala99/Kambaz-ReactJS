"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

export default function KambazNavigation() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    if (path === '/Dashboard') {
      return pathname === '/Dashboard';
    }
    return pathname.includes(path);
  };

  return (
    <nav className={styles.navigation}>
      {/* Northeastern Logo */}
      <a 
        href="https://www.northeastern.edu" 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.logo}
      >
        <div className={styles.neuLogo}>
          <span className={styles.nLetter}>N</span>
          <span className={styles.neuText}>
            <span>LUX</span>
            <span>VERITAS</span>
            <span>VIRTUS</span>
          </span>
        </div>
      </a>

      <ul className={styles.navList}>
        {/* Account - Person in circle */}
        <li className={styles.navItem}>
          <Link href="/Account" id="wd-account-link" className={`${styles.navLink} ${styles.accountLink} ${isActive('/Account') ? styles.active : ''}`}>
            <svg className={styles.navIcon} viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2"/>
              <circle cx="16" cy="13" r="5" fill="currentColor"/>
              <path d="M6 28 C6 22 10 18 16 18 C22 18 26 22 26 28" fill="currentColor"/>
            </svg>
            <span className={styles.navText}>Account</span>
          </Link>
        </li>

        {/* Dashboard - Speedometer/gauge */}
        <li className={styles.navItem}>
          <Link href="/Dashboard" id="wd-dashboard-link" className={`${styles.navLink} ${styles.dashboardLink} ${isActive('/Dashboard') ? styles.active : ''}`}>
            <svg className={styles.navIcon} viewBox="0 0 32 32" fill="none">
              <path d="M4 20 C4 11 11 4 20 4 C29 4 36 11 36 20" stroke="currentColor" strokeWidth="2.5" transform="translate(-4, 2)"/>
              <circle cx="16" cy="20" r="2" fill="currentColor"/>
              <path d="M16 20 L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className={styles.navText}>Dashboard</span>
          </Link>
        </li>

        {/* Courses - Closed book */}
        <li className={styles.navItem}>
          <Link href="/Courses" id="wd-course-link" className={`${styles.navLink} ${isActive('/Courses') && !isActive('/Dashboard') ? styles.active : ''}`}>
            <svg className={styles.navIcon} viewBox="0 0 32 32" fill="none">
              <rect x="6" y="8" width="20" height="16" rx="1" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
              <path d="M6 12 L26 12" stroke="#000000" strokeWidth="2"/>
              <rect x="8" y="8" width="2" height="6" fill="#000000"/>
            </svg>
            <span className={styles.navText}>Courses</span>
          </Link>
        </li>

        {/* Calendar */}
        <li className={styles.navItem}>
          <Link href="/Calendar" id="wd-calendar-link" className={`${styles.navLink} ${isActive('/Calendar') ? styles.active : ''}`}>
            <svg className={styles.navIcon} viewBox="0 0 32 32" fill="none">
              <rect x="5" y="7" width="22" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M5 12 L27 12" stroke="currentColor" strokeWidth="2"/>
              <path d="M11 5 L11 9 M21 5 L21 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <rect x="9" y="15" width="3" height="3" fill="currentColor"/>
              <rect x="14.5" y="15" width="3" height="3" fill="currentColor"/>
              <rect x="20" y="15" width="3" height="3" fill="currentColor"/>
            </svg>
            <span className={styles.navText}>Calendar</span>
          </Link>
        </li>

        {/* Inbox - Inbox tray */}
        <li className={styles.navItem}>
          <Link href="/Inbox" id="wd-inbox-link" className={`${styles.navLink} ${isActive('/Inbox') ? styles.active : ''}`}>
            <svg className={styles.navIcon} viewBox="0 0 32 32" fill="none">
              <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M4 18 L12 18 L14 22 L18 22 L20 18 L28 18" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
            <span className={styles.navText}>Inbox</span>
          </Link>
        </li>

        {/* Labs - Flask */}
        <li className={styles.navItem}>
          <Link href="/Labs" id="wd-labs-link" className={`${styles.navLink} ${isActive('/Labs') ? styles.active : ''}`}>
            <svg className={styles.navIcon} viewBox="0 0 32 32" fill="none">
              <path d="M12 4 L12 12 L6 24 L26 24 L20 12 L20 4 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M12 4 L20 4" stroke="currentColor" strokeWidth="2"/>
              <circle cx="16" cy="18" r="2" fill="currentColor"/>
              <circle cx="11" cy="20" r="1.5" fill="currentColor"/>
              <circle cx="20" cy="19" r="1.5" fill="currentColor"/>
            </svg>
            <span className={styles.navText}>Labs</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}