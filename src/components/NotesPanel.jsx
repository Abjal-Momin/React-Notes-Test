import { useState } from "react";
import { generateInitials } from "../utils/helpers";
import { formatDate, formatTime } from "../utils/helpers";
import sendMessage from "../assets/send-message.png";
import { toast } from "react-toastify";
import { useResponsive } from "../utils/helpers";
import styles from "../styles/NotesPanel.module.css";

function NotesPanel({ selectedGroup, notes, onAddNote, handleBackToGroups }) {
  const isMobile = useResponsive().isMobile;
  // Notes Header Section
  const NotesHeader = ({ selectedGroup }) => {
    return (
      <div className={styles.notesHeader}>
        <button
          className={`${styles.backToGroupBnt} ${
            isMobile ? styles.activeBnt : styles.inactiveBnt
          }`}
          onClick={handleBackToGroups}
        >
          ⬅
        </button>
        <div
          className={styles.groupAvatar}
          style={{ backgroundColor: selectedGroup.color }}
        >
          {generateInitials(selectedGroup.name)}
        </div>
        <span className={styles.groupName}>{selectedGroup.name}</span>
      </div>
    );
  };

  //   Notes List
  const NotesList = ({ notes }) => {
    const NoteItem = ({ note }) => {
      return (
        <div className={styles.noteItem}>
          <div className={styles.noteContent}>
            <div className={styles.noteText}>{note.content}</div>
          </div>
          <div>
            <div className={styles.noteMeta}>
              <span>{formatDate(note.createdAt)}</span>
              <span>&#x25CF;</span>
              <span>{formatTime(note.createdAt)}</span>
            </div>
          </div>
        </div>
      );
    };
    return (
      <div className={styles.notesList}>
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
    );
  };

  //   Notes Input Box
  const NoteInput = ({ onAddNote }) => {
    const [newNote, setNewNote] = useState("");

    const handleAddNote = () => {
      if (!newNote.trim()) return toast.error("Note cannot be empty");
      onAddNote(newNote.trim());
      toast.success("Note added successfully");
      setNewNote("");
    };

    const handleKeyPress = (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleAddNote();
      }
    };

    return (
      <div className={styles.noteInputContainer}>
        <div className={styles.inputArea}>
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Enter your text here..........."
            className={styles.noteInput}
            rows="3"
          />
          <button
            className={`${styles.sendButton} ${
              newNote.trim() ? styles.active : ""
            }`}
            onClick={handleAddNote}
          >
            <img src={sendMessage} alt="Send icon" className={styles.sendImg} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.notesPanel}>
      <NotesHeader selectedGroup={selectedGroup} />

      <div className={styles.notesContent}>
        <NotesList notes={notes} />
        <NoteInput onAddNote={onAddNote} />
      </div>
    </div>
  );
}

export default NotesPanel;
