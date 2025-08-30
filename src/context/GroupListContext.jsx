import { createContext, useState, useEffect } from "react";

const GroupListContext = createContext();

const GroupListProvider = ({ children }) => {
  const [groupList, setGroupList] = useState(() => {
    // Initialize state from localStorage
    const savedGroups = localStorage.getItem("groups");
    return savedGroups ? JSON.parse(savedGroups) : [];
  });

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groupList));
  }, [groupList]);

  const addGroup = (groupData) => {
    const newGroup = {
      id: Date.now(),
      name: groupData.name,
      color: groupData.color,
      createdAt: new Date().toISOString(),
    };
    setGroupList((prevGroups) => [...prevGroups, newGroup]);
  };

  return (
    <GroupListContext.Provider value={{ groupList, addGroup }}>
      {children}
    </GroupListContext.Provider>
  );
};

export { GroupListContext, GroupListProvider };
