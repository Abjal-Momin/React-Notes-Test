import Sidebar from "./Sidebar";
import CreateGroup from "./CreateGroup";
import MainContent from "./MainContent";
import { useContext, useState, useEffect } from "react";
import { GroupNotesContext } from "../context/GroupNotesContext";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { GroupListContext } from "../context/GroupListContext";
import WelcomePanel from "./WelcomePanel";
import { useResponsive } from "../utils/helpers";
import styles from "../styles/NotesApp.module.css";

function NotesApp() {
  const { groupNotes, addNote } = useContext(GroupNotesContext);
  const { groupList } = useContext(GroupListContext);
  const [showCreateGroup, setshowCreateGroup] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [showMobileContent, setShowMobileContent] = useState(false);
  const isMobile = useResponsive().isMobile;
  // const navigate = useNavigate();
  // const location = useLocation();

  // Restore the selected group when the page loads or URL changes
  // useEffect(() => {
  //   const path = location.hash;
  //   const match = path.match(/#\/groups\/(\d+)/);

  //   if (match) {
  //     const groupIdFromUrl = parseInt(match[1]);
  //     const foundGroup = groupList.find((g) => g.id === groupIdFromUrl);

  //     if (foundGroup) {
  //       setSelectedGroup(foundGroup);
  //       setSelectedGroupId(foundGroup.id);
  //     }
  //   } else if (selectedGroupId && !path.includes('/groups/')) {
  //     navigate(`/groups/${selectedGroupId}`);
  //   }
  // }, [location.hash, groupList]);

  // Function adds Notes with groupId to Notes context
  const handleAddNote = (noteData) => {
    if (selectedGroupId) {
      addNote(selectedGroupId, noteData);
    }
  };

  // Save the current route to localStorage when it changes
  // useEffect(() => {
  //   localStorage.setItem("lastRoute", location.hash.replace('#', ''));
  // }, [location.hash]);

  // Restore the last route on initial load
  // useEffect(() => {
  //   const lastRoute = localStorage.getItem("lastRoute");
  //   if (lastRoute && lastRoute !== "/" && location.pathname === "/") {
  //     navigate(lastRoute);
  //   }
  // }, []);

  // Get the selected group and its id
  const onSelectGroup = (group) => {
    setSelectedGroup(group);
    setSelectedGroupId(group.id);
    navigate(`/groups/${group.id}`);
    if (isMobile) {
      setShowMobileContent(true);
    }
  };

  const handleBackToGroups = () => {
    setShowMobileContent(false);
  };

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
            <Routes>
              <Route
                path="/groups/:groupId"
                element={
                  <MainContent
                    selectedGroup={selectedGroup}
                    notes={groupNotes[selectedGroupId] || []}
                    onAddNote={handleAddNote}
                    handleBackToGroups={handleBackToGroups}
                  />
                }
              />
            </Routes>
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

      <Routes>
        <Route path="/" element={<WelcomePanel />} />
        <Route
          path="/groups/:groupId"
          element={
            <MainContent
              selectedGroup={selectedGroup}
              notes={groupNotes[selectedGroupId] || []}
              onAddNote={handleAddNote}
            />
          }
        />
      </Routes>

      {showCreateGroup && (
        <CreateGroup onClose={() => setshowCreateGroup(false)} />
      )}
    </div>
  );
}

export default NotesApp;
