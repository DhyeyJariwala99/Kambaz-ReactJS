// LOCATION: app/(Kambaz)/Dashboard/page.tsx
// WITH COURSE-SPECIFIC IMAGES

"use client";
import Link from "next/link";
import { Card, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import * as db from "../Database";

export default function Dashboard() {
  const courses = db.courses;

  // Map course IDs to image files
  const courseImages: { [key: string]: string } = {
    "RS101": "/images/rocket.jpg",
    "RS102": "/images/aerodynamics.jpg",
    "RS103": "/images/spacecraft.jpg",
    "RS104": "/images/chemistry1.jpg",
    "RS105": "/images/chemistry2.jpg",
    "RS106": "/images/chemistry3.jpg",
    "RS107": "/images/ancient.jpg",
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link href={`/Courses/${course._id}/Home`} className="wd-dashboard-course-link text-decoration-none text-dark">
                  {/* Use course-specific image or fallback to reactjs.jpg */}
                  <Card.Img
                    variant="top"
                    src={courseImages[course._id] || "/images/reactjs.jpg"}
                    width="100%"
                    height={160}
                    alt={course.name}
                  />
                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description}
                    </Card.Text>
                    <Button variant="primary">Go</Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}