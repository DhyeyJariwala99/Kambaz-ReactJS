
'use client'

import { Table, Form, Button } from "react-bootstrap"

// Define the Grade type
type Grade = {
  name: string;
  group: string;
  due: string;
  submitted: string;
  status: string;
  score: string;
  icons: string[];
  blueDot?: boolean;
}

export default function Grades() {
  const grades: Grade[] = [
    { name: "A1", group: "ASSIGNMENTS", due: "11 Nov by 23:59", submitted: "", status: "", score: "- / 32", icons: [] },
    { name: "A2", group: "ASSIGNMENTS", due: "15 Oct by 23:59", submitted: "", status: "-", score: "-", icons: [] },
    { name: "Q1", group: "QUIZZES", due: "15 Oct by 23:59", submitted: "", status: "", score: "- / 17", icons: [] },
    { name: "Q2", group: "QUIZZES", due: "22 Oct by 23:59", submitted: "", status: "", score: "- / 31", icons: [] },
    { name: "A3", group: "ASSIGNMENTS", due: "29 Sep by 23:59", submitted: "", status: "-", score: "-", icons: [] },
    { name: "A4", group: "ASSIGNMENTS", due: "15 Oct by 23:59", submitted: "", status: "-", score: "-", icons: [] },
    { name: "Q3", group: "QUIZZES", due: "15 Oct by 23:59", submitted: "", status: "", score: "- / 17", icons: [] },
    { name: "Q4", group: "QUIZZES", due: "22 Nov by 23:59", submitted: "", status: "", score: "- / 31", icons: [] },
    { name: "A5", group: "ASSIGNMENTS", due: "29 Oct by 23:59", submitted: "", status: "-", score: "-", icons: [] },
  ]

  return (
    <div id="wd-grades" className="container-fluid">
      <div className="row">
        {/* Main content - Left side */}
        <div className="col-9">
          {/* Header with filters */}
          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2>Grades for . Dhyey Jariwala</h2>
              <div>
                <Button variant="outline-secondary" size="sm">
                   Print Grades
                </Button>
              </div>
            </div>

            {/* Filters row */}
            <div className="row g-2 mb-3">
              <div className="col-auto">
                <label className="form-label small mb-1"><strong>Course</strong></label>
                <Form.Select size="sm">
                  <option>CS5610 19730 Web Devel</option>
                </Form.Select>
              </div>
              <div className="col-auto">
                <label className="form-label small mb-1"><strong>Arrange by</strong></label>
                <Form.Select size="sm">
                  <option>Due date</option>
                </Form.Select>
              </div>
              <div className="col-auto">
                <label className="form-label small mb-1">&nbsp;</label>
                <Button variant="danger" size="sm" className="d-block">
                  Apply
                </Button>
              </div>
            </div>
          </div>

          {/* Grades Table */}
          <Table hover>
            <thead>
              <tr style={{ borderBottom: "2px solid #dee2e6" }}>
                <th>Name</th>
                <th>Due</th>
                <th>Submitted</th>
                <th>Status</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((grade, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="text-danger fw-bold">{grade.name}</div>
                    <div className="small text-secondary">{grade.group}</div>
                  </td>
                  <td className="small">{grade.due}</td>
                  <td className="small">{grade.submitted}</td>
                  <td className="small">{grade.status}</td>
                  <td>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>{grade.score}</span>
                      <div className="d-flex gap-1 align-items-center">
                        {grade.icons.map((icon, i) => (
                          <span key={i} style={{ fontSize: "14px" }}>{icon}</span>
                        ))}
                        {grade.blueDot && (
                          <span style={{ color: "#0d6efd", fontSize: "10px" }}>●</span>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        {/* Right sidebar */}
        <div className="col-3">
          <div className="mb-3">
            <h5>Total: 100%</h5>
          </div>
          
          <div className="mb-3">
            <Form.Check 
              type="checkbox"
              label="Show saved 'what-if' scores"
              className="small"
            />
          </div>

          <div className="mb-4">
            <a href="#" className="text-decoration-none small">
              Show all details
            </a>
          </div>

          <div className="mb-3">
            <h6>Assignments are weighted by group:</h6>
          </div>

          <Table size="sm" className="mb-3">
            <tbody>
              <tr>
                <td className="border-0"><strong>Group</strong></td>
                <td className="border-0 text-end"><strong>Weight</strong></td>
              </tr>
              <tr>
                <td>ASSIGNMENTS</td>
                <td className="text-end">40%</td>
              </tr>
              <tr>
                <td>QUIZZES</td>
                <td className="text-end">10%</td>
              </tr>
              <tr>
                <td>EXAMS</td>
                <td className="text-end">20%</td>
              </tr>
              <tr>
                <td>PROJECT</td>
                <td className="text-end">30%</td>
              </tr>
              <tr style={{ borderTop: "2px solid #dee2e6" }}>
                <td><strong>Total</strong></td>
                <td className="text-end"><strong>100%</strong></td>
              </tr>
            </tbody>
          </Table>

          <div className="mb-3">
            <Form.Check 
              type="checkbox"
              label="Calculate based only on graded assignments"
              className="small"
              defaultChecked
            />
          </div>

          <p className="small text-muted">
            You can view your grades based on What-if scores so that you know how grades will be 
            affected by upcoming, or resubmitted assignments. You can test scores for an assignment 
            that already includes a score, or an assignment that has yet to be graded.
          </p>
        </div>
      </div>
    </div>
  )
}