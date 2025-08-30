import WelcomePanel from "./WelcomePanel";
import NotesPanel from "./NotesPanel";
import styles from "../styles/MainContent.module.css";

function MainContent({ selectedGroup, notes, onAddNote, handleBackToGroups }) {
  return (
    <div className={styles.mainContent}>
      {selectedGroup ? (
        <NotesPanel
          selectedGroup={selectedGroup}
          notes={notes}
          onAddNote={onAddNote}
          handleBackToGroups={handleBackToGroups}
        />
      ) : (
        <WelcomePanel />
      )}
    </div>
  );
}

export default MainContent;
