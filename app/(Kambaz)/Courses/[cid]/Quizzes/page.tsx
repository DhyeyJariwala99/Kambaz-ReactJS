
import styles from "./styles.module.css";

export default function Quizzes() {
  const quizzes = [
    { id: "Q1", title: "Q1", status: "Closed", dueDate: "Due 24 Sep at 23:59", points: "29 pts", questions: "11 Questions" },
    { id: "Q2", title: "Q2", available: "Available until 1 Oct at 23:59", dueDate: "Due 1 Oct at 23:59", points: "23 pts", questions: "6 Questions" },
    { id: "Q3", title: "Q3", available: "Available until 8 Oct at 23:59", dueDate: "Due 8 Oct at 23:59", points: "32 pts", questions: "7 Questions" },
    { id: "Q4", title: "Q4", available: "Not available until 8 Oct at 0:00", dueDate: "Due 15 Oct at 23:59", points: "17 pts", questions: "3 Questions" },
    { id: "Q5", title: "Q5", available: "Not available until 15 Oct at 0:00", dueDate: "Due 22 Oct at 23:59", points: "31 pts", questions: "8 Questions" },
    { id: "Q6", title: "Q6", available: "Not available until 29 Oct at 0:00", dueDate: "Due 5 Nov at 23:59", points: "18 pts", questions: "3 Questions" },
    { id: "Q7", title: "Q7", available: "Not available until 5 Nov at 0:00", dueDate: "Due 12 Nov at 23:59", points: "20 pts", questions: "1 Question" },
    { id: "Q8", title: "Q8", available: "Not available until 12 Nov at 0:00", dueDate: "Due 19 Nov at 23:59", points: "25 pts", questions: "4 Questions" },
    { id: "Q9", title: "Q9", available: "Not available until 19 Nov at 0:00", dueDate: "Due 26 Nov at 23:59", points: "38 pts", questions: "10 Questions" },
    { id: "Q10", title: "Q10", available: "Not available until 26 Nov at 0:00", dueDate: "Due 3 Dec at 23:59", points: "42 pts", questions: "12 Questions" },
  ];

  return (
    <div className={styles.quizzesContainer}>
      {/* Search Bar */}
      <div className={styles.searchBar}>
        <input 
          type="search" 
          placeholder="Search for quiz" 
          className={styles.searchInput}
        />
      </div>

      {/* Assignment Quizzes Section */}
      <div className={styles.quizSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.collapseIcon}>▼</span>
          <span className={styles.sectionTitle}>Assignment quizzes</span>
        </div>

        <ul className={styles.quizList}>
          {quizzes.map((quiz) => (
            <li key={quiz.id} className={styles.quizItem}>
              <div className={styles.quizDetails}>
                <h3 className={styles.quizTitle}>{quiz.title}</h3>
                <div className={styles.quizMeta}>
                  {quiz.status && (
                    <>
                      <span className={styles.statusClosed}>{quiz.status}</span>
                      <span className={styles.separator}>|</span>
                    </>
                  )}
                  {quiz.available && (
                    <>
                      <span>{quiz.available}</span>
                      <span className={styles.separator}>|</span>
                    </>
                  )}
                  <span>{quiz.dueDate}</span>
                  <span className={styles.separator}>|</span>
                  <span>{quiz.points}</span>
                  <span className={styles.separator}>|</span>
                  <span>{quiz.questions}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}