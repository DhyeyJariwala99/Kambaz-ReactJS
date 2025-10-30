"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Row,
  Col,
  FormControl,
} from "react-bootstrap";
import { FaTrash, FaPencil } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";

export default function Dashboard() {
  const [courses, setCourses] = useState<any[]>([
    {
      _id: "RS101",
      name: "Rocket Propulsion",
      number: "RS4550",
      startDate: "2023-01-10",
      endDate: "2023-05-15",
      description: "This course provides an in-depth study of the fundamentals of rocket propulsion.",
      image: "/images/rocket.jpg",
    },
    {
      _id: "RS102",
      name: "Aerodynamics",
      number: "RS4560",
      startDate: "2023-01-10",
      endDate: "2023-05-15",
      description: "Comprehensive exploration of aerodynamics and fluid dynamics.",
      image: "/images/aerodynamics.jpg",
    },
    {
      _id: "RS103",
      name: "Spacecraft Design",
      number: "RS4570",
      startDate: "2023-01-10",
      endDate: "2023-05-15",
      description: "Principles and practices of spacecraft design and systems.",
      image: "/images/spacecraft.jpg",
    },
    {
      _id: "CS1234",
      name: "Organic Chemistry",
      number: "CH1230",
      startDate: "2023-01-10",
      endDate: "2023-05-15",
      description: "Study of carbon-based compounds and their properties.",
      image: "/images/chemistry1.jpg",
    },
    {
      _id: "CS1235",
      name: "Inorganic Chemistry",
      number: "CH1240",
      startDate: "2023-01-10",
      endDate: "2023-05-15",
      description: "Study of inorganic compounds and their behaviors.",
      image: "/images/chemistry2.jpg",
    },
    {
      _id: "CS1236",
      name: "Physical Chemistry",
      number: "CH1250",
      startDate: "2023-01-10",
      endDate: "2023-05-15",
      description: "Combines principles of physics and chemistry.",
      image: "/images/chemistry3.jpg",
    },
    {
      _id: "CS1237",
      name: "Ancient Languages",
      number: "HU1260",
      startDate: "2023-01-10",
      endDate: "2023-05-15",
      description: "Study of ancient Middle Eastern languages.",
      image: "/images/ancient.jpg",
    },
  ]);

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const addNewCourse = () => {
    const newCourse = { ...course, _id: uuidv4() };
    setCourses([...courses, newCourse]);
    // Reset form
    setCourse({
      _id: "0",
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      image: "/images/reactjs.jpg",
      description: "New Description",
    });
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((c) => c._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <div id="wd-dashboard" className="p-4">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {/* New Course Editor Section */}
      <div className="mb-4">
        <h5>
          New Course
          <Button
            variant="primary"
            className="float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse}
          >
            Add
          </Button>
          <Button
            variant="warning"
            className="float-end me-2"
            onClick={updateCourse}
            id="wd-update-course-click"
          >
            Update
          </Button>
        </h5>
        <br />
        <br />

        <FormControl
          value={course.name}
          className="mb-2"
          id="wd-course-name"
          placeholder="Course Name"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <FormControl
          as="textarea"
          value={course.description}
          rows={3}
          className="mb-2"
          placeholder="Course Description"
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
        />
      </div>
      <hr />

      {/* Published Courses Section */}
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />

      <Row xs={1} md={5} className="g-4">
        {courses.map((course) => (
          <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href={`/Courses/${course._id}/Home`}
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src={course.image}
                  width="100%"
                  height={160}
                  alt={course.name}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {course.name}
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    {course.description}
                  </CardText>
                  <Button variant="primary">Go</Button>
                  <Button
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                    variant="danger"
                    className="float-end"
                    id="wd-delete-course-click"
                  >
                    <FaTrash />
                  </Button>
                  <Button
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                    variant="warning"
                    className="float-end me-2"
                    id="wd-edit-course-click"
                  >
                    <FaPencil />
                  </Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}