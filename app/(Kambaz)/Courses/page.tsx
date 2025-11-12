import Link from "next/link";

export default function Courses() {
  return (
    <div className="container-fluid p-4">
      <h1 className="mb-3">All Courses</h1>
      <hr />
      <h2 className="mb-3">Course Catalog</h2>
      <hr />
      
      <div className="list-group">
        <Link href="/Courses/1234" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
          <div>
            <h5 className="mb-1">CS1234 React JS</h5>
            <p className="mb-1">Full Stack software developer</p>
            <small>Spring 2024</small>
          </div>
          <span className="badge bg-primary rounded-pill">Enrolled</span>
        </Link>
        
        <Link href="/Courses/1235" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
          <div>
            <h5 className="mb-1">CS1235 Node.js</h5>
            <p className="mb-1">Backend Development with Node.js</p>
            <small>Spring 2024</small>
          </div>
          <span className="badge bg-primary rounded-pill">Enrolled</span>
        </Link>
        
        <Link href="/Courses/1236" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
          <div>
            <h5 className="mb-1">CS1236 MongoDB</h5>
            <p className="mb-1">NoSQL Database Management</p>
            <small>Spring 2024</small>
          </div>
          <span className="badge bg-primary rounded-pill">Enrolled</span>
        </Link>
        
        <Link href="/Courses/1237" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
          <div>
            <h5 className="mb-1">CS1237 HTML/CSS</h5>
            <p className="mb-1">Web Fundamentals</p>
            <small>Spring 2024</small>
          </div>
          <span className="badge bg-primary rounded-pill">Enrolled</span>
        </Link>
      </div>
    </div>
  );
}