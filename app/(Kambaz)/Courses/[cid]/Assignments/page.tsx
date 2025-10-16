"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { BsGripVertical, BsSearch } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import * as db from "../../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

  return (
    <div id="wd-assignments" className="p-3">
      {/* Search and Buttons Row */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group" style={{ width: '300px' }}>
          <span className="input-group-text bg-white border-end-0">
            <BsSearch />
          </span>
          <input 
            id="wd-search-assignment" 
            className="form-control border-start-0" 
            placeholder="Search..." 
          />
        </div>
        <div>
          <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
            <FaPlus className="me-1" /> Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger">
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>

      {/* Assignments List */}
      <ul id="wd-assignment-list" className="list-group rounded-0">
        {/* Assignments Header */}
        <li className="list-group-item p-3 ps-1 bg-light border">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <span className="fw-bold">▼ ASSIGNMENTS</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="badge rounded-pill border border-dark me-2">40% of Total</span>
              <FaPlus className="me-2" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
        </li>

        {/* Assignment Items */}
        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <li 
              key={assignment._id} 
              className="wd-assignment-list-item list-group-item p-3 ps-1 border-start border-3 border-success"
            >
              <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex align-items-start w-100">
                  <BsGripVertical className="me-2 fs-3" />
                  <FaRegEdit className="me-3 fs-5 text-success" />
                  <div className="flex-grow-1">
                    <Link 
                      href={`/Courses/${cid}/Assignments/${assignment._id}`} 
                      className="wd-assignment-link text-decoration-none text-dark fw-bold"
                    >
                      {assignment.title}
                    </Link>
                    <div className="text-muted small mt-1">
                      <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> {assignment.availableFromDate} at 12:00am | <br />
                      <strong>Due</strong> {assignment.dueDate} at 11:59pm | {assignment.points} pts
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <span className="badge bg-success rounded-circle me-2" style={{ width: '20px', height: '20px' }}>✓</span>
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}