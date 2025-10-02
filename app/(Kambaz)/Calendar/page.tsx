
import styles from "./styles.module.css";

export default function Calendar() {
  const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  
  const calendarDays = [
    { date: 29, month: "prev" },
    { date: 30, month: "prev" },
    { date: 1, month: "current" },
    { date: 2, month: "current" },
    { date: 3, month: "current" },
    { date: 4, month: "current" },
    { date: 5, month: "current" },
    { date: 6, month: "current" },
    { date: 7, month: "current" },
    { date: 8, month: "current" },
    { date: 9, month: "current" },
    { date: 10, month: "current" },
    { date: 11, month: "current" },
    { date: 12, month: "current" },
    { date: 13, month: "current" },
    { date: 14, month: "current" },
    { date: 15, month: "current" },
    { date: 16, month: "current" },
    { date: 17, month: "current" },
    { date: 18, month: "current" },
    { date: 19, month: "current" },
    { date: 20, month: "current" },
    { date: 21, month: "current" },
    { date: 22, month: "current" },
    { date: 23, month: "current" },
    { date: 24, month: "current" },
    { date: 25, month: "current" },
    { date: 26, month: "current" },
    { date: 27, month: "current" },
    { date: 28, month: "current" },
    { date: 29, month: "current" },
    { date: 30, month: "current" },
    { date: 31, month: "current" },
    { date: 1, month: "next" },
    { date: 2, month: "next" },
  ];

  const miniCalendarDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2];

  

  return (
    <div className={styles.calendarContainer}>
      {/* Main Calendar Area */}
      <div className={styles.mainCalendar}>
        {/* Top Toolbar */}
        <div className={styles.toolbar}>
          <div className={styles.toolbarLeft}>
            <button className={styles.todayBtn}>Today</button>
            <div className={styles.navButtons}>
              <button className={styles.navBtn}>←</button>
              <button className={styles.navBtn}>→</button>
            </div>
            <h2 className={styles.monthTitle}>October 2025</h2>
          </div>
          <div className={styles.toolbarRight}>
            <button className={styles.viewBtn}>Week</button>
            <button className={`${styles.viewBtn} ${styles.active}`}>Month</button>
            <button className={styles.viewBtn}>Agenda</button>
            <button className={styles.addBtn}>+</button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className={styles.calendarGrid}>
          {/* Days of Week Header */}
          <div className={styles.weekHeader}>
            {daysOfWeek.map((day) => (
              <div key={day} className={styles.weekDay}>{day}</div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className={styles.daysGrid}>
            {calendarDays.map((day, index) => (
              <div 
                key={index} 
                className={`${styles.dayCell} ${
                  day.month === "prev" || day.month === "next" ? styles.otherMonth : ""
                } ${day.date === 1 && day.month === "current" ? styles.today : ""}`}
              >
                <div className={styles.dateNumber}>{day.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className={styles.sidebar}>
        {/* Mini Calendar */}
        <div className={styles.miniCalendar}>
          <div className={styles.miniHeader}>
            <button className={styles.miniNavBtn}>←</button>
            <span className={styles.miniMonth}>October 2025</span>
            <button className={styles.miniNavBtn}>→</button>
          </div>
          <div className={styles.miniGrid}>
            <div className={styles.miniWeekHeader}>
              {["29", "30", "1", "2", "3", "4", "5"].map((num, i) => (
                <div key={i} className={styles.miniDay}>{num}</div>
              ))}
            </div>
            <div className={styles.miniWeekRow}>
              {["6", "7", "8", "9", "10", "11", "12"].map((num, i) => (
                <div key={i} className={styles.miniDay}>{num}</div>
              ))}
            </div>
            <div className={styles.miniWeekRow}>
              {["13", "14", "15", "16", "17", "18", "19"].map((num, i) => (
                <div key={i} className={styles.miniDay}>{num}</div>
              ))}
            </div>
            <div className={styles.miniWeekRow}>
              {["20", "21", "22", "23", "24", "25", "26"].map((num, i) => (
                <div key={i} className={styles.miniDay}>{num}</div>
              ))}
            </div>
            <div className={styles.miniWeekRow}>
              {["27", "28", "29", "30", "31", "1", "2"].map((num, i) => (
                <div key={i} className={styles.miniDay}>{num}</div>
              ))}
            </div>
          </div>
        </div>

        
        {/* Undated Section */}
        <div className={styles.undatedSection}>
          <div className={styles.undatedHeader}>
            <span className={styles.collapseIcon}>▶</span>
            <span className={styles.undatedTitle}>UNDATED</span>
          </div>
        </div>

        {/* Calendar Feed Link */}
        <div className={styles.calendarFeed}>
          <a href="#" className={styles.feedLink}>
            📅 Calendar feed
          </a>
        </div>
      </div>
    </div>
  );
}