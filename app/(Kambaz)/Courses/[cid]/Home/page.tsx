
import styles from "./styles.module.css";
import CourseStatus from "./status";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      {/* Main Content - Left Side */}
      <div className={styles.mainContent}>
        {/* Collapse All Button */}
        <div className={styles.topBar}>
          <button className={styles.collapseBtn}>Collapse all</button>
        </div>

        {/* Lecture 1 Module - Expanded */}
        <div className={styles.module}>
          <div className={styles.moduleHeader}>
            <div className={styles.moduleTitle}>
              <span className={styles.collapseIcon}>▼</span>
              <span>Lecture 1 - Building React User Interfaces with HTML, Assignment 1, Setting Up the Development Environment, Introduction to HTML</span>
            </div>
          </div>
          
          {/* LEARNING OBJECTIVES Section */}
          <div className={styles.lessonSection}>
            <div className={styles.lessonHeader}>
              <span className={styles.lessonTitle}>LEARNING OBJECTIVES</span>
            </div>
            <div className={styles.lessonContent}>
              <div className={styles.lessonItem}>Introduction to the course</div>
              <div className={styles.lessonItem}>What is Web Development?</div>
              <div className={styles.lessonItem}>Setting up the Development Environment</div>
              <div className={styles.lessonItem}>Creating a React Web Application</div>
              <div className={styles.lessonItem}>Getting started with the Assignment 1</div>
            </div>
          </div>

          {/* READING Section */}
          <div className={styles.lessonSection}>
            <div className={styles.lessonHeader}>
              <span className={styles.lessonTitle}>READING</span>
            </div>
            <div className={styles.lessonContent}>
              <div className={styles.lessonItem}>
               
                <a href="#" className={styles.contentLink}>
                  Developing Full Stack Next.js Web Applications - Chapter 1 - Building Next.js User Interfaces with HTML
                </a>
                <span className={styles.externalIcon}>↗</span>
              </div>
            </div>
          </div>

          {/* INTRO AND SETTING UP DEVELOPMENT ENVIRONMENT Section */}
          <div className={styles.lessonSection}>
            <div className={styles.lessonHeader}>
              <span className={styles.lessonTitle}>INTRO AND SETTING UP DEVELOPMENT ENVIRONMENT</span>
            </div>
            <div className={styles.lessonContent}>
              <div className={styles.lessonItem}>
                
                <a href="#" className={styles.contentLink}>Introduction to Web Development</a>
                <span className={styles.externalIcon}>↗</span>
              </div>
              <div className={styles.lessonItem}>
                
                <a href="#" className={styles.contentLink}>Installing Node.js</a>
                <span className={styles.externalIcon}>↗</span>
              </div>
              <div className={styles.lessonItem}>
                
                <a href="#" className={styles.contentLink}>Creating a Next.js React Application</a>
                <span className={styles.externalIcon}>↗</span>
              </div>
              <div className={styles.lessonItem}>
                
                <a href="#" className={styles.contentLink}>Sample Kanbas Web App on Netlify</a>
                <span className={styles.externalIcon}>↗</span>
              </div>
            </div>
          </div>

          

          {/* EVALUATIONS Section */}
          <div className={styles.lessonSection}>
            <div className={styles.lessonHeader}>
              <span className={styles.lessonTitle}>EVALUATIONS</span>
            </div>
          </div>
        </div>

        {/* Resources Module */}
        <div className={styles.module}>
          <div className={styles.moduleHeader}>
            <div className={styles.moduleTitle}>
              <span className={styles.collapseIcon}>▼</span>
              <span>Resources</span>
            </div>
          </div>
          <div className={styles.moduleBody}>
            <div className={styles.contentItem}>
              
              <a href="#" className={styles.itemLink}>Syllabus</a>
              <span className={styles.externalIcon}>↗</span>
            </div>
            <div className={styles.contentItem}>
              
              <span className={styles.itemText}>Calendar</span>
            </div>
            <div className={styles.contentItem}>
              
              <span className={styles.itemText}>Office Hours</span>
            </div>
            <div className={styles.contentItem}>
            
              <span className={styles.itemText}>Piazza Hours</span>
            </div>
            <div className={styles.contentItem}>
              <span className={styles.externalIcon}>↗</span>
            </div>
          </div>
        </div>

        {/* GITHUB Module */}
        <div className={styles.module}>
          <div className={styles.moduleHeader}>
            <div className={styles.moduleTitle}>
              <span>GITHUB</span>
            </div>
          </div>
          <div className={styles.moduleBody}>
            <div className={styles.contentItem}>
             
              <a href="#" className={styles.itemLink}>Jose's GitHub username: jannunzi</a>
              <span className={styles.externalIcon}>↗</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}