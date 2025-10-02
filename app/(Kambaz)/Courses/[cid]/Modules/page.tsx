

import styles from "./styles.module.css";

export default function Modules() {
  return (
    <div className={styles.modulesContainer}>
      {/* Toolbar */}
      <div className={styles.toolbar}>
        <div className={styles.toolbarLeft}>
          <button className={styles.btnGray}>Collapse All</button>
          <button className={styles.btnGray}>View Progress</button>
        </div>
        <div className={styles.toolbarRight}>
          <select className={styles.publishSelect}>
            <option>Publish All</option>
            <option>Publish Modules only</option>
            <option>Unpublish All</option>
          </select>
          <button className={styles.btnRed}>+ Module</button>
        </div>
      </div>

      {/* Modules List */}
      <ul id="wd-modules" className={styles.modulesList}>
        {/* Lecture 1 Module - Expanded */}
        <li className="wd-module">
          <div className={styles.moduleHeader}>
            <div className={styles.moduleTitle}>
              <span className={styles.collapseIcon}>▼</span>
              <span>Lecture 1 - Building React User Interfaces with HTML, Assignment 1, Setting Up the Development Environment, Introduction to HTML</span>
            </div>
          </div>

          <ul className="wd-lessons">
            {/* LEARNING OBJECTIVES */}
            <li className="wd-lesson">
              <div className={styles.lessonHeader}>
                <span className={styles.lessonTitle}>LEARNING OBJECTIVES</span>
              </div>
              <ul className="wd-content">
                <li className={`wd-content-item ${styles.contentItem}`}>
                  Introduction to the course
                </li>
                <li className={`wd-content-item ${styles.contentItem}`}>
                  What is Web Development?
                </li>
                <li className={`wd-content-item ${styles.contentItem} ${styles.highlighted}`}>
                  Setting up the Development Environment
                </li>
                <li className={`wd-content-item ${styles.contentItem}`}>
                  Creating a React Web Application
                </li>
                <li className={`wd-content-item ${styles.contentItem}`}>
                  Getting started with the Assignment 1
                </li>
              </ul>
            </li>

            {/* READING */}
            <li className="wd-lesson">
              <div className={styles.lessonHeader}>
                <span className={styles.lessonTitle}>READING</span>
              </div>
              <ul className="wd-content">
                <li className={`wd-content-item ${styles.contentItem}`}>
                 
                  <a href="#" className={styles.contentLink}>
                    Developing Full Stack Next.js Web Applications - Chapter 1 - Building Next.js User Interfaces with HTML
                  </a>
                  <span className={styles.externalIcon}>↗</span>
                </li>
              </ul>
            </li>

            {/* INTRO AND SETTING UP DEVELOPMENT ENVIRONMENT */}
            <li className="wd-lesson">
              <div className={styles.lessonHeader}>
                <span className={styles.lessonTitle}>INTRO AND SETTING UP DEVELOPMENT ENVIRONMENT</span>
              </div>
              <ul className="wd-content">
                <li className={`wd-content-item ${styles.contentItem}`}>
                  
                  <a href="#" className={styles.contentLink}>Introduction to Web Development</a>
                  <span className={styles.externalIcon}>↗</span>
                </li>
                <li className={`wd-content-item ${styles.contentItem}`}>
                 
                  <a href="#" className={styles.contentLink}>Installing Node.js</a>
                  <span className={styles.externalIcon}>↗</span>
                </li>
                <li className={`wd-content-item ${styles.contentItem}`}>
                 
                  <a href="#" className={styles.contentLink}>Creating a Next.js React Application</a>
                  <span className={styles.externalIcon}>↗</span>
                </li>
                <li className={`wd-content-item ${styles.contentItem}`}>
                  
                  <a href="#" className={styles.contentLink}>Commit your source to GitHub.com</a>
                  <span className={styles.externalIcon}>↗</span>
                </li>
                <li className={`wd-content-item ${styles.contentItem}`}>
                
                  <a href="#" className={styles.contentLink}>Deploying to Vercel</a>
                  <span className={styles.externalIcon}>↗</span>
                </li>
                <li className={`wd-content-item ${styles.contentItem}`}>
                 
                  <a href="#" className={styles.contentLink}>Deploying multiple branches in Netlify</a>
                  <span className={styles.externalIcon}>↗</span>
                </li>
                <li className={`wd-content-item ${styles.contentItem}`}>
                  
                  <a href="#" className={styles.contentLink}>Sample Kanbas Web App on Netlify</a>
                  <span className={styles.externalIcon}>↗</span>
                </li>
              </ul>
            </li>

            {/* EVALUATIONS */}
            <li className="wd-lesson">
              <div className={styles.lessonHeader}>
                <span className={styles.lessonTitle}>EVALUATIONS</span>
              </div>
              <ul className="wd-content">
                <li className={`wd-content-item ${styles.contentItem}`}>
                  
                  <span className={styles.contentText}>A1</span>
                  <span className={styles.metaText}>17 Sep</span>
                  <span className={styles.metaText}>309 pts</span>
                </li>
                <li className={`wd-content-item ${styles.contentItem}`}>
                  
                  <span className={styles.contentText}>Final Project</span>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Resources Module */}
        <li className="wd-module">
          <div className={styles.moduleHeader}>
            <div className={styles.moduleTitle}>
              <span className={styles.collapseIcon}>▼</span>
              <span>Resources</span>
            </div>
          </div>
          <ul className="wd-lessons">
            <li className={`wd-content-item ${styles.simpleContentItem}`}>
              
              <a href="#" className={styles.contentLink}>Syllabus</a>
              <span className={styles.externalIcon}>↗</span>
            </li>
            <li className={`wd-content-item ${styles.simpleContentItem}`}>
             
              <span className={styles.contentText}>Calendar</span>
            </li>
            <li className={`wd-content-item ${styles.simpleContentItem}`}>
              
              <span className={styles.contentText}>Office Hours</span>
            </li>
            <li className={`wd-content-item ${styles.simpleContentItem}`}>
              
              <span className={styles.contentText}>Piazza Hours</span>
            </li>
            <li className={`wd-content-item ${styles.simpleContentItem}`}>
             
              <span className={styles.contentText}>Final Project</span>
            </li>
            <li className={`wd-content-item ${styles.simpleContentItem}`}>
              
              <a href="#" className={styles.contentLink}>WebDev TA</a>
              <span className={styles.externalIcon}>↗</span>
            </li>
          </ul>
        </li>

        {/* GITHUB Module */}
        <li className="wd-module">
          <div className={styles.moduleHeader}>
            <div className={styles.moduleTitle}>
              <span>GITHUB</span>
            </div>
          </div>
          <ul className="wd-lessons">
            <li className={`wd-content-item ${styles.simpleContentItem}`}>
              
              <a href="#" className={styles.contentLink}>Jose's GitHub username: jannunzi</a>
              <span className={styles.externalIcon}>↗</span>
            </li>
          </ul>
        </li>

        {/* TEXTBOOK Module */}
        <li className="wd-module">
          <div className={styles.moduleHeader}>
            <div className={styles.moduleTitle}>
              <span>TEXTBOOK</span>
            </div>
          </div>
          <ul className="wd-lessons">
            <li className={`wd-content-item ${styles.simpleContentItem}`}>
              
              <a href="#" className={styles.contentLink}>Developing Full Stack Next.js Web Applications</a>
              <span className={styles.externalIcon}>↗</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}