"use client";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function KambazNavigation() {
  const pathname = usePathname();

  const links = [
    { label: "Dashboard", path: "/", icon: AiOutlineDashboard },
    { label: "Courses", path: "/", icon: LiaBookSolid },
    { label: "Calendar", path: "/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];

  return (
    <ListGroup
      id="wd-kambaz-navigation"
      style={{ width: 120 }}
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <ListGroupItem
        as="a"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </ListGroupItem>

      <ListGroupItem className="border-0 bg-black text-center" key="account">
        <Link
          href="/Account"
          id="wd-account-link"
          className="text-white text-decoration-none"
        >
          <FaRegCircleUser
            className={`fs-1 ${
              pathname.includes("Account") ? "text-danger" : "text-white"
            }`}
          />
          <br />
          Account
        </Link>
      </ListGroupItem>

      {links.map((link, index) => (
        <ListGroupItem
          key={`${link.label}-${index}`}
          className={`border-0 text-center ${
            (link.label === "Dashboard" && pathname === "/") ||
            (link.label === "Courses" && pathname === "/") ||
            pathname.includes(link.label)
              ? "bg-white"
              : "bg-black"
          }`}
        >
          <Link href={link.path} className="text-decoration-none">
            {link.icon({
              className: "fs-1 text-danger",
            })}
            <br />
            <span
              className={
                (link.label === "Dashboard" && pathname === "/") ||
                (link.label === "Courses" && pathname === "/") ||
                pathname.includes(link.label)
                  ? "text-danger"
                  : "text-white"
              }
            >
              {link.label}
            </span>
          </Link>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}