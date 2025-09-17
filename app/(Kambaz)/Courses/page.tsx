import Link from "next/link";

export default function Courses() {
  return (
    <div id="wd-courses">
      <h1>All Courses</h1>
      <p>Browse all available courses:</p>
      <ul>
        <li><Link href="/Courses/1234">CS1234 React JS - Full Stack software developer</Link></li>
        <li><Link href="/Courses/1235">CS1235 Node.js - Backend Development with Node.js</Link></li>
        <li><Link href="/Courses/1236">CS1236 MongoDB - NoSQL Database Management</Link></li>
        <li><Link href="/Courses/1237">CS1237 HTML/CSS - Web Fundamentals</Link></li>
        <li><Link href="/Courses/1238">CS1238 Python - Introduction to Python Programming</Link></li>
        <li><Link href="/Courses/1239">CS1239 Java - Object-Oriented Programming</Link></li>
      </ul>
    </div>
  );
}