
import styles from "./styles.module.css";

export default function CourseStatus() {
  return (
    <div className={styles.statusCard} id="wd-course-status">
      <h2 className={styles.statusTitle}>Course Status</h2>
      
      <div className={styles.statusButtons}>
        <button className={styles.btnUnpublish}>Unpublish</button>
        <button className={styles.btnPublish}>Publish</button>
      </div>

      <div className={styles.statusLinks}>
        <a href="#" className={styles.statusLink}>Import Existing Content</a>
        <a href="#" className={styles.statusLink}>Import from Commons</a>
        <a href="#" className={styles.statusLink}>Choose Home Page</a>
        <a href="#" className={styles.statusLink}>View Course Stream</a>
        <a href="#" className={styles.statusLink}>New Announcement</a>
        <a href="#" className={styles.statusLink}>New Analytics</a>
        <a href="#" className={styles.statusLink}>View Course Notifications</a>
      </div>
    </div>
  );
}