import Link from "next/link";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (6)</h2>
      <hr />
      <div id="wd-dashboard-courses" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <img src="/images/reactjs.png" width={300} height={160} alt="React Course" style={{ width: '100%', objectFit: 'cover' }} />
            <div style={{ padding: '10px' }}>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">Full Stack software developer</p>
              <button style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '5px 10px' }}>Go</button>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link href="/Courses/1235" className="wd-dashboard-course-link">
            <img src="/images/nodejs.jpg" width={300} height={160} alt="Node.js Course" style={{ width: '100%', objectFit: 'cover' }} />
            <div style={{ padding: '10px' }}>
              <h5>CS1235 Node.js</h5>
              <p className="wd-dashboard-course-title">Backend Development with Node.js</p>
              <button style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '5px 10px' }}>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/1236" className="wd-dashboard-course-link">
            <img src="/images/mongodb.png" width={300} height={160} alt="MongoDB Course" style={{ width: '100%', objectFit: 'cover' }} />
            <div style={{ padding: '10px' }}>
              <h5>CS1236 MongoDB</h5>
              <p className="wd-dashboard-course-title">NoSQL Database Management</p>
              <button style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '5px 10px' }}>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/1237" className="wd-dashboard-course-link">
            <img src="/images/html.png" width={300} height={160} alt="HTML Course" style={{ width: '100%', objectFit: 'cover' }} />
            <div style={{ padding: '10px' }}>
              <h5>CS1237 HTML/CSS</h5>
              <p className="wd-dashboard-course-title">Web Fundamentals</p>
              <button style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '5px 10px' }}>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/1238" className="wd-dashboard-course-link">
            <img src="/images/python.png" width={300} height={160} alt="Python Course" style={{ width: '100%', objectFit: 'cover' }} />
            <div style={{ padding: '10px' }}>
              <h5>CS1238 Python</h5>
              <p className="wd-dashboard-course-title">Introduction to Python Programming</p>
              <button style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '5px 10px' }}>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link href="/Courses/1239" className="wd-dashboard-course-link">
            <img src="/images/java.png" width={300} height={160} alt="Java Course" style={{ width: '100%', objectFit: 'cover' }} />
            <div style={{ padding: '10px' }}>
              <h5>CS1239 Java</h5>
              <p className="wd-dashboard-course-title">Object-Oriented Programming</p>
              <button style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '5px 10px' }}>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}