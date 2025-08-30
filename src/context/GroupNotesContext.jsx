import { createContext, useEffect, useState } from "react";

const GroupNotesContext = createContext();

const GroupNotesProvider = ({ children }) => {
  const [groupNotes, setGroupNotes] = useState(() => {
    // Initialize state from localStorage
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : {};
  });
  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(groupNotes));
  }, [groupNotes]);

  const addNote = (groupId, noteContent) => {
    const newNote = {
      id: Date.now(),
      content: noteContent,
      createdAt: new Date().toISOString(),
    };
    setGroupNotes((prevNotes) => ({
      ...prevNotes,
      [groupId]: [...(prevNotes[groupId] || []), newNote],
    }));
  };

  return (
    <GroupNotesContext.Provider value={{ groupNotes, addNote }}>
      {children}
    </GroupNotesContext.Provider>
  );
};

export { GroupNotesContext, GroupNotesProvider };
