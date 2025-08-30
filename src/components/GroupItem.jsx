import { generateInitials } from "../utils/helpers";
import styles from "../styles/GroupItem.module.css";

function GroupItem({ group, onClick }) {
  return (
    <div
      className={`${styles.groupItem} `}
      onClick={onClick}
    >
      <div
        className={styles.groupAvatar}
        style={{ backgroundColor: group.color }}
      >
        {generateInitials(group.name)}
      </div>
      <span className={styles.groupName}>{group.name}</span>
    </div>
  );
}

export default GroupItem;
