import Sidebar from "./Sidebar";
import CreateGroup from "./CreateGroup";
import MainContent from "./MainContent";
import { useContext, useState } from "react";
import { GroupNotesContext } from "../context/GroupNotesContext";
import { useResponsive } from "../utils/helpers";
import styles from "../styles/NotesApp.module.css";

function NotesApp() {
  const { groupNotes, addNote } = useContext(GroupNotesContext);
  const [showCreateGroup, setshowCreateGroup] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [showMobileContent, setShowMobileContent] = useState(false);
  const isMobile = useResponsive().isMobile;

  // Function adds Notes with groupId to Notes context
  const handleAddNote = (noteData) => {
    if (selectedGroupId) {
      addNote(selectedGroupId, noteData);
    }
  };

  // Get the selected group and its id
  const onSelectGroup = (group) => {
    setSelectedGroup(group);
    setSelectedGroupId(group.id);
    if (isMobile) {
      setShowMobileContent(true);
    }
  };

  // Function to handle back to groups view in mobile
  const handleBackToGroups = () => {
    setShowMobileContent(false);
  };

  // Responsive Layout for Mobile and Desktop
  if (isMobile) {
    return (
      <div className={styles.notesApp}>
        {!showMobileContent ? (
          <Sidebar
            onCreateGroup={() => setshowCreateGroup(true)}
            onSelectGroup={onSelectGroup}
          />
        ) : (
          <div className={styles.mobileContent}>
            <MainContent
              selectedGroup={selectedGroup}
              notes={groupNotes[selectedGroupId] || []}
              onAddNote={handleAddNote}
              handleBackToGroups={handleBackToGroups}
            />
          </div>
        )}
        {showCreateGroup && (
          <CreateGroup onClose={() => setshowCreateGroup(false)} />
        )}
      </div>
    );
  }

  return (
    <div className={styles.notesApp}>
      <Sidebar
        onCreateGroup={() => setshowCreateGroup(true)}
        onSelectGroup={onSelectGroup}
      />
      <MainContent
        selectedGroup={selectedGroup}
        notes={groupNotes[selectedGroupId] || []}
        onAddNote={handleAddNote}
      />
      {showCreateGroup && (
        <CreateGroup onClose={() => setshowCreateGroup(false)} />
      )}
    </div>
  );
}

export default NotesApp;
