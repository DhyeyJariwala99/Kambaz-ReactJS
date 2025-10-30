'use client'

import { Form } from "react-bootstrap"
import { IoMdArrowDropdown } from "react-icons/io"

export default function Quizzes() {
  const quizzes = [
    { name: "Q1", status: "Closed", due: "Due 1 Oct at 23:59", points: "29 pts", questions: "11 Questions" },
    { name: "Q2", status: "Closed", due: "Due 11 Oct at 23:59", points: "23 pts", questions: "6 Questions" },
    { name: "Q3", status: "Closed", due: "Due 11 Oct at 23:59", points: "32 pts", questions: "7 Questions" },
    { name: "Q4", available: "Available until 15 Oct at 23:59", due: "Due 15 Oct at 23:59", points: "17 pts", questions: "3 Questions" },
    { name: "Q5", available: "Available until 22 Oct at 23:59", due: "Due 22 Oct at 23:59", points: "31 pts", questions: "8 Questions" },
    { name: "X1", notAvailable: "Not available until 22 Oct at 0:00", due: "Due 29 Oct at 23:59", points: "100 pts", questions: "15 Questions" },
    { name: "Q6", notAvailable: "Not available until 29 Oct at 0:00", due: "Due 5 Nov at 23:59", points: "18 pts", questions: "3 Questions" },
    { name: "Q7", notAvailable: "Not available until 5 Nov at 0:00", due: "Due 12 Nov at 23:59", points: "20 pts", questions: "1 Question" },
    { name: "Q8", notAvailable: "Not available until 12 Nov at 0:00", due: "Due 19 Nov at 23:59", points: "25 pts", questions: "4 Questions" },
    { name: "Q9", notAvailable: "Not available until 19 Nov at 0:00", due: "Due 26 Nov at 23:59", points: "38 pts", questions: "10 Questions" },
    { name: "Q10", notAvailable: "Not available until 26 Nov at 0:00", due: "Due 3 Dec at 23:59", points: "20 pts", questions: "2 Questions" },
  ]

  return (
    <div id="wd-quizzes">
      {/* Search bar */}
      <Form.Control
        placeholder="Search for quiz"
        className="mb-3"
        style={{ width: "300px", border: "1px solid #ddd" }}
      />

      {/* Assignment quizzes header */}
      <div
        className="p-3 mb-0"
        style={{ backgroundColor: "#f5f5f5", borderTop: "1px solid #ddd" }}
      >
        <IoMdArrowDropdown className="me-2" />
        <strong>Assignment quizzes</strong>
      </div>

      {/* Quizzes list */}
      <div>
        {quizzes.map((quiz, idx) => (
          <div
            key={idx}
            className="p-3 d-flex justify-content-between align-items-start"
            style={{
              backgroundColor: "white",
              borderBottom: "1px solid #ddd",
            }}
          >
            <div className="d-flex align-items-start">
              <span className="me-3" style={{ fontSize: "20px" }}>
                🚀
              </span>
              <div>
                <div className="fw-bold">{quiz.name}</div>
                <div className="small text-muted">
                  {quiz.status && <span className="fw-bold me-2">{quiz.status}</span>}
                  {quiz.notAvailable && <span>{quiz.notAvailable} | </span>}
                  {quiz.available && <span>{quiz.available} | </span>}
                  {quiz.due} | {quiz.points} | {quiz.questions}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}