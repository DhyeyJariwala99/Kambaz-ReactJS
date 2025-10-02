
import styles from "./styles.module.css";

export default function People() {
  const people = [
    { name: "DJ", section: "CS5610 19730 Web Development SEC 05 Fall 2025", role: "Student" },
    { name: "Jose Annunziato", section: "CS5610 19730 Web Development SEC 05 Fall 2025", role: "Teacher" },
    { name: "TA1", section: "CS5610 19730 Web Development SEC 05 Fall 2025", role: "TA" },
    { name: "Student1", section: "CS5610 19730 Web Development SEC 05 Fall 2025", role: "Student", highlighted: true },
  ];

  return (
    <div className={styles.peopleContainer}>
      {/* Header with Tabs and Student Cards Button */}
      <div className={styles.header}>
        <div className={styles.tabs}>
          <button className={`${styles.tab} ${styles.tabActive}`}>Everyone</button>
          <button className={styles.tab}>Groups</button>
        </div>
        <button className={styles.studentCardsBtn}>
          📋 Student Cards
        </button>
      </div>

      {/* Search and Filter */}
      <div className={styles.searchSection}>
        <div className={styles.searchWrapper}>
          <input 
            type="search" 
            placeholder="Search people" 
            className={styles.searchInput}
          />
        </div>
        <select className={styles.roleFilter}>
          <option>All roles</option>
          <option>Students</option>
          <option>Teachers</option>
          <option>TAs</option>
        </select>
      </div>

      {/* People Table */}
      <table className={styles.peopleTable}>
        <thead>
          <tr>
            <th className={styles.thName}>Name</th>
            <th className={styles.thSection}>Section</th>
            <th className={styles.thRole}>Role</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index} className={person.highlighted ? styles.rowHighlighted : ''}>
              <td className={styles.tdName}>
                <div className={styles.personInfo}>
                  {person.highlighted ? (
                    <div className={styles.avatarBlue}>⚙️</div>
                  ) : (
                    <div className={styles.avatarGray}>👤</div>
                  )}
                  <a href="#" className={styles.personName}>{person.name}</a>
                </div>
              </td>
              <td className={styles.tdSection}>{person.section}</td>
              <td className={styles.tdRole}>{person.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}