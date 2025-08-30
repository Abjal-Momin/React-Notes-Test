import plus from "../assets/+.png";
import GroupList from "./GroupList";
import styles from "../styles/Sidebar.module.css";

function Sidebar({ onCreateGroup, onSelectGroup }) {
  return (
    <div className={styles.sidebar}>
      <h1 className={styles.appTitle}>Pocket Notes</h1>

      <GroupList onSelectGroup={onSelectGroup} />

      <div className={styles.createButton} onClick={onCreateGroup}>
        <button className={styles.plusIcon}>
          <img src={plus} alt="plus Icon" />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
