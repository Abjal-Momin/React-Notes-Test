import { useContext, useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { GroupListContext } from "../context/GroupListContext";
import { toast } from "react-toastify";
import styles from "../styles/CreateGroup.module.css";

function CreateGroup({ onClose }) {
  const { groupList, addGroup } = useContext(GroupListContext);
  const [newGroupName, setNewGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState(" ");
  const GroupModel = useRef(null);

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (GroupModel.current && !GroupModel.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  // Function to set color
  const onColorSelect = (color) => {
    setSelectedColor(color);
  };

  // Function to create group
  const handleCreateGroup = () => {
    if (newGroupName.trim().length < 2) {
      return toast.error("More then 1 character required");
    }

    if (selectedColor === " ") {
      return toast.error("Please select a color");
    }

    const groupData = {
      name: newGroupName.trim(),
      color: selectedColor,
    };

    const groupExists = groupList.some(
      (group) => group.name.toLowerCase() === groupData.name.toLowerCase()
    );

    if (!groupExists) {
      addGroup(groupData);
      toast.success("Group created successfully");
      onClose();
      setSelectedColor(" ");
    } else {
      // add toast here
      toast.error("Group name already exists");
    }
  };

  // Enter key to create group
  const handelKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleCreateGroup();
    }
  };

  // Color options
  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  return (
    <div className={styles.createGroupOverlay}>
      <div className={styles.createGroup} ref={GroupModel}>
        <h3>Create New group</h3>
        <div className={styles.formGroup}>
          <label>Group Name</label>
          <input
            type="text"
            value={newGroupName}
            onChange={(e) => setNewGroupName(e.target.value)}
            onKeyDown={handelKeyPress}
            placeholder="Enter group name"
            maxLength={50}
          />
        </div>
        <div className={styles.formGroupColor}>
          <label>Choose colour</label>
          <div className={styles.colorPicker}>
            {colors.map((color) => (
              <div
                key={color}
                className={`${styles.colorOption} ${
                  selectedColor === color ? styles.selected : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => onColorSelect(color)}
              />
            ))}
          </div>
        </div>
        <button
          className={styles.createGroupButton}
          onClick={handleCreateGroup}
          disabled={newGroupName.trim().length < 2 || selectedColor === " "}
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default CreateGroup;
