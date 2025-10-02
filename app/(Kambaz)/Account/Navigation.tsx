"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname.includes(path);
  };

  const navLinkStyle = (path: string) => {
    const baseStyle = {
      display: 'block',
      padding: '14px 20px',
      color: '#333',
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'all 0.2s',
      borderLeft: isActive(path) ? '3px solid #0374B5' : '3px solid transparent',
      background: isActive(path) ? '#E8F4FA' : 'transparent',
      fontWeight: isActive(path) ? 600 : 400,
    };
    return baseStyle;
  };

  return (
    <nav style={{ padding: '20px 0' }}>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ borderBottom: '1px solid #F5F5F5' }}>
          <Link 
            href="/Account/Signin" 
            style={navLinkStyle('Signin')}
          >
            Signin
          </Link>
        </li>
        <li style={{ borderBottom: '1px solid #F5F5F5' }}>
          <Link 
            href="/Account/Signup" 
            style={navLinkStyle('Signup')}
          >
            Signup
          </Link>
        </li>
        <li style={{ borderBottom: '1px solid #F5F5F5' }}>
          <Link 
            href="/Account/Profile" 
            style={navLinkStyle('Profile')}
          >
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}