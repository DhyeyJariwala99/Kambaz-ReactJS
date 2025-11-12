"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
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
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";
import { setCourses, addCourse, deleteCourse as deleteCourseAction, updateCourse as updateCourseAction } from "./Courses/reducer";

export default function Kambaz() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const [enrolling, setEnrolling] = useState(false);
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });

  // Redirect to signin if not logged in
  useEffect(() => {
    if (!currentUser) {
      router.push("/Account/Signin");
    }
  }, [currentUser, router]);

  const fetchAllCourses = async () => {
    try {
      const allCourses = await courseClient.fetchAllCourses();
      const enrolledCourses = currentUser 
        ? await userClient.findMyCourses() 
        : [];
      
      const coursesWithEnrollment = allCourses.map((c: any) => {
        const isEnrolled = enrolledCourses.some((ec: any) => ec._id === c._id);
        return { ...c, enrolled: isEnrolled };
      });
      
      dispatch(setCourses(coursesWithEnrollment));
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const fetchEnrolledCourses = async () => {
    try {
      const enrolledCourses = await userClient.findMyCourses();
      dispatch(setCourses(enrolledCourses.map((c: any) => ({ ...c, enrolled: true }))));
    } catch (error) {
      console.error("Error fetching enrolled courses:", error);
    }
  };

  const addNewCourse = async () => {
    try {
      const newCourse = await userClient.createCourse(course);
      dispatch(addCourse({ ...newCourse, enrolled: true }));
      setCourse({
        _id: "0",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        description: "New Description",
      });
    } catch (error: any) {
      console.error("Error adding course:", error);
    }
  };

  const deleteCourse = async (courseId: string) => {
    try {
      await courseClient.deleteCourse(courseId);
      dispatch(deleteCourseAction(courseId));
    } catch (error) {
      console.error(error);
    }
  };

  const updateCourse = async () => {
    try {
      await courseClient.updateCourse(course);
      dispatch(updateCourseAction(course));
      setCourse({
        _id: "0",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        description: "New Description",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (!currentUser) return;
    
    try {
      if (enrolled) {
        await userClient.enrollIntoCourse("current", courseId);
      } else {
        await userClient.unenrollFromCourse("current", courseId);
      }
      
      const updatedCourses = courses.map((c: any) =>
        c._id === courseId ? { ...c, enrolled } : c
      );
      dispatch(setCourses(updatedCourses));
    } catch (error) {
      console.error("Enrollment error:", error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      if (enrolling) {
        fetchAllCourses();
      } else {
        fetchEnrolledCourses();
      }
    }
  }, [currentUser, enrolling]);

  // If not logged in, don't render anything (will redirect)
  if (!currentUser) {
    return null;
  }

  return (
    <div id="wd-dashboard" className="p-4">
      <h1 id="wd-dashboard-title">
        Dashboard
        <Button
          onClick={() => setEnrolling(!enrolling)}
          className="float-end btn btn-primary"
        >
          {enrolling ? "My Courses" : "All Courses"}
        </Button>
      </h1>
      <hr />

      <div className="mb-4">
        <h5>
          {course._id === "0" ? "New Course" : `Editing: ${course.name}`}
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
            disabled={course._id === "0"}
          >
            Update
          </Button>
        </h5>
        <br /><br />

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

      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />

      <Row xs={1} md={5} className="g-4">
        {courses.map((courseItem) => (
          <Col key={courseItem._id} className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                href={`/Courses/${courseItem._id}/Home`}
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <CardImg
                  variant="top"
                  src={courseItem.image || "/images/reactjs.jpg"}
                  width="100%"
                  height={160}
                  alt={courseItem.name}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {enrolling && (
                      <Button
                        onClick={(event) => {
                          event.preventDefault();
                          updateEnrollment(courseItem._id, !courseItem.enrolled);
                        }}
                        variant={courseItem.enrolled ? "danger" : "success"}
                        size="sm"
                        className="float-end"
                      >
                        {courseItem.enrolled ? "Unenroll" : "Enroll"}
                      </Button>
                    )}
                    {courseItem.name}
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    {courseItem.description}
                  </CardText>
                  <Button variant="primary">Go</Button>
                  
                  <Button
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(courseItem._id);
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
                      setCourse(courseItem);
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