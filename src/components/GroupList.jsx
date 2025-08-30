import { useContext } from "react";
import { GroupListContext } from "../context/GroupListContext";
import GroupItem from "./GroupItem";
import styles from "../styles/GroupList.module.css";

function GroupList({ onSelectGroup }) {
  const { groupList } = useContext(GroupListContext);

  return (
    <div className={styles.groupsList}>
      {groupList.map((group) => (
        <GroupItem
          key={group.id}
          group={group}
          onClick={() => onSelectGroup(group)}
        />
      ))}
    </div>
  );
}

export default GroupList;
