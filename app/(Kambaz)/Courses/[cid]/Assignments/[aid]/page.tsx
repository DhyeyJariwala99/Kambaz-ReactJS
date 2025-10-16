"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Form, Button } from "react-bootstrap";
import * as db from "../../../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find((a: any) => a._id === aid);

  if (!assignment) {
    return <div className="p-3">Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor" className="p-3">
      {/* Assignment Name */}
      <Form.Group className="mb-3">
        <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
        <Form.Control 
          id="wd-name" 
          defaultValue={assignment.title} 
        />
      </Form.Group>

      {/* Description */}
      <Form.Group className="mb-3">
        <Form.Control 
          as="textarea" 
          id="wd-description" 
          rows={10}
          defaultValue={assignment.description}
        />
      </Form.Group>

      {/* Points */}
      <Form.Group as="div" className="mb-3 row">
        <Form.Label htmlFor="wd-points" column sm={3} className="text-end">
          Points
        </Form.Label>
        <div className="col-sm-9">
          <Form.Control 
            id="wd-points" 
            type="number" 
            defaultValue={assignment.points} 
          />
        </div>
      </Form.Group>

      {/* Assignment Group */}
      <Form.Group as="div" className="mb-3 row">
        <Form.Label htmlFor="wd-group" column sm={3} className="text-end">
          Assignment Group
        </Form.Label>
        <div className="col-sm-9">
          <Form.Select id="wd-group">
            <option>ASSIGNMENTS</option>
            <option>QUIZZES</option>
            <option>EXAMS</option>
            <option>PROJECT</option>
          </Form.Select>
        </div>
      </Form.Group>

      {/* Display Grade as */}
      <Form.Group as="div" className="mb-3 row">
        <Form.Label htmlFor="wd-display-grade-as" column sm={3} className="text-end">
          Display Grade as
        </Form.Label>
        <div className="col-sm-9">
          <Form.Select id="wd-display-grade-as">
            <option>Percentage</option>
            <option>Points</option>
            <option>Complete/Incomplete</option>
          </Form.Select>
        </div>
      </Form.Group>

      {/* Submission Type */}
      <Form.Group as="div" className="mb-3 row">
        <Form.Label htmlFor="wd-submission-type" column sm={3} className="text-end">
          Submission Type
        </Form.Label>
        <div className="col-sm-9">
          <div className="border rounded p-3">
            <Form.Select id="wd-submission-type" className="mb-3">
              <option>Online</option>
              <option>On Paper</option>
              <option>No Submission</option>
            </Form.Select>
            
            <div className="fw-bold mb-2">Online Entry Options</div>
            <Form.Check 
              type="checkbox" 
              id="wd-text-entry" 
              label="Text Entry" 
              className="mb-1"
            />
            <Form.Check 
              type="checkbox" 
              id="wd-website-url" 
              label="Website URL" 
              className="mb-1"
            />
            <Form.Check 
              type="checkbox" 
              id="wd-media-recordings" 
              label="Media Recordings" 
              className="mb-1"
            />
            <Form.Check 
              type="checkbox" 
              id="wd-student-annotation" 
              label="Student Annotation" 
              className="mb-1"
            />
            <Form.Check 
              type="checkbox" 
              id="wd-file-upload" 
              label="File Uploads" 
            />
          </div>
        </div>
      </Form.Group>

      {/* Assign */}
      <Form.Group as="div" className="mb-3 row">
        <Form.Label column sm={3} className="text-end">
          Assign
        </Form.Label>
        <div className="col-sm-9">
          <div className="border rounded p-3">
            {/* Assign to */}
            <Form.Group className="mb-3">
              <Form.Label htmlFor="wd-assign-to" className="fw-bold">
                Assign to
              </Form.Label>
              <Form.Control 
                id="wd-assign-to" 
                defaultValue="Everyone" 
              />
            </Form.Group>

            {/* Due Date */}
            <Form.Group className="mb-3">
              <Form.Label htmlFor="wd-due-date" className="fw-bold">
                Due
              </Form.Label>
              <Form.Control 
                id="wd-due-date" 
                type="date" 
                defaultValue={assignment.dueDate} 
              />
            </Form.Group>

            {/* Available From and Until */}
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="wd-available-from" className="fw-bold">
                    Available from
                  </Form.Label>
                  <Form.Control 
                    id="wd-available-from" 
                    type="date" 
                    defaultValue={assignment.availableFromDate} 
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="wd-available-until" className="fw-bold">
                    Until
                  </Form.Label>
                  <Form.Control 
                    id="wd-available-until" 
                    type="date" 
                    defaultValue={assignment.availableUntilDate} 
                  />
                </Form.Group>
              </div>
            </div>
          </div>
        </div>
      </Form.Group>

      {/* Buttons */}
      <hr />
      <div className="d-flex justify-content-end gap-2">
        <Link href={`/Courses/${cid}/Assignments`} className="btn btn-secondary">
          Cancel
        </Link>
        <Link href={`/Courses/${cid}/Assignments`} className="btn btn-danger">
          Save
        </Link>
      </div>
    </div>
  );
}