
"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function CourseNavigation() {
  const { cid } = useParams();
  const pathname = usePathname();
  
  // DATA-DRIVEN: Links array (textbook page 109)
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {/* DATA-DRIVEN: Map over links array (textbook page 109) */}
      {links.map((link) => (
        <Link
          key={link}
          href={`/Courses/${cid}/${link}`}
          id={`wd-course-${link.toLowerCase()}-link`}
          className={`list-group-item border-0 ${
            pathname.includes(link)
              ? "active text-black bg-white border-start border-3 border-black"
              : "text-danger"
          }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}