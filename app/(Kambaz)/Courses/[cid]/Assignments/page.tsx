
import Link from "next/link";
import styles from "./styles.module.css";

export default function Assignments() {
  const assignments = [
    { id: "A1", title: "A1", dueDate: "Due 16 Sep at 23:59", points: "-/309 pts", type: "assignment" },
    { id: "A2", title: "A2", dueDate: "Due 1 Oct at 23:59", points: "-/375 pts", type: "assignment" },
    { id: "Q1", title: "Q1", available: "Available until 22 Sep at 23:59", dueDate: "Due 26 Sep at 23:59", points: "-/23 pts", type: "quiz" },
    { id: "Q2", title: "Q2", available: "Available until 1 Oct at 23:59", dueDate: "Due 1 Oct at 23:59", points: "-/23 pts", type: "quiz" },
    { id: "Q3", title: "Q3", available: "Available until 8 Oct at 23:59", dueDate: "Due 8 Oct at 23:59", points: "-/32 pts", type: "quiz" },
    { id: "A3", title: "A3", dueDate: "Due 15 Oct at 23:59", points: "-/198 pts", type: "assignment" },
    { id: "Q4", title: "Q4", available: "Not available until 8 Oct at 0:00", dueDate: "Due 15 Oct at 23:59", points: "-/17 pts", type: "quiz" },
  ];

  return (
    <div className={styles.assignmentsContainer}>
      {/* Toolbar with Search and Buttons */}
      <div className={styles.toolbar}>
        <div className={styles.searchWrapper}>
          <input 
            type="search"
            id="wd-search-assignment"
            placeholder="Search..." 
            className={styles.searchInput}
          />
        </div>
        <div className={styles.toolbarButtons}>
          <button className={styles.btnGreen}>SHOW BY DATE</button>
          <button className={styles.btnWhite}>SHOW BY TYPE</button>
        </div>
      </div>

      {/* Upcoming Assignments Section */}
      <div className={styles.assignmentSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLeft}>
            <span className={styles.collapseIcon}>▼</span>
            <span className={styles.sectionTitle}>Upcoming assignments</span>
          </div>
        </div>

        <ul id="wd-assignment-list" className={styles.assignmentList}>
          {assignments.map((item) => (
            <li key={item.id} className={`wd-assignment-list-item ${styles.assignmentItem}`}>
              
              <div className={styles.assignmentDetails}>
                <Link 
                  href={`/Courses/1234/Assignments/${item.id}`}
                  className={`wd-assignment-link ${styles.assignmentLink}`}
                >
                  {item.title}
                </Link>
                <div className={styles.assignmentMeta}>
                  {item.available && (
                    <>
                      <span>{item.available}</span>
                      <span className={styles.separator}>|</span>
                    </>
                  )}
                  <span>{item.dueDate}</span>
                  <span className={styles.separator}>|</span>
                  <span>{item.points}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}