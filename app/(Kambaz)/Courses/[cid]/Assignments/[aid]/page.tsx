"use client";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { updateAssignment } from "../reducer";
import { FormControl, Button, Form } from "react-bootstrap";
import * as client from "../client";

export default function AssignmentEditor() {
  const params = useParams();
  const router = useRouter();
  const courseId = params?.cid ? String(params.cid) : "";
  const assignmentId = params?.aid ? String(params.aid) : "";
  
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  
  const [assignment, setAssignment] = useState<any>(null);

  useEffect(() => {
    if (assignmentId) {
      const currentAssignment = assignments.find(
        (a: any) => a._id === assignmentId
      );
      if (currentAssignment) {
        setAssignment(currentAssignment);
      }
    }
  }, [assignmentId, assignments]);

  const handleSave = async () => {
    if (assignment) {
      await client.updateAssignment(assignment);
      dispatch(updateAssignment(assignment));
      router.push(`/Courses/${courseId}/Assignments`);
    }
  };

  const handleCancel = () => {
    router.push(`/Courses/${courseId}/Assignments`);
  };

  if (!assignment) return <div className="p-3">Loading...</div>;

  return (
    <div id="wd-assignments-editor" className="p-3">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <FormControl
            id="wd-name"
            value={assignment.title || ""}
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <FormControl
            as="textarea"
            id="wd-description"
            rows={5}
            value={assignment.description || ""}
            onChange={(e) =>
              setAssignment({ ...assignment, description: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-points">Points</Form.Label>
          <FormControl
            id="wd-points"
            type="number"
            value={assignment.points || 0}
            onChange={(e) =>
              setAssignment({ ...assignment, points: parseInt(e.target.value) || 0 })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-due-date">Due Date</Form.Label>
          <FormControl
            id="wd-due-date"
            type="date"
            value={assignment.dueDate || ""}
            onChange={(e) =>
              setAssignment({ ...assignment, dueDate: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-available-from">Available From</Form.Label>
          <FormControl
            id="wd-available-from"
            type="date"
            value={assignment.availableFromDate || ""}
            onChange={(e) =>
              setAssignment({ ...assignment, availableFromDate: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-available-until">Available Until</Form.Label>
          <FormControl
            id="wd-available-until"
            type="date"
            value={assignment.availableUntilDate || ""}
            onChange={(e) =>
              setAssignment({ ...assignment, availableUntilDate: e.target.value })
            }
          />
        </Form.Group>

        <hr />
        
        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}