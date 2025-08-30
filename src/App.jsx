import NotesApp from "./components/NotesApp";
import { GroupListProvider } from "./context/GroupListContext";
import { GroupNotesProvider } from "./context/GroupNotesContext";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import styles from "./styles/App.module.css";

function App() {
  return (
    <>
      <GroupListProvider>
        <GroupNotesProvider>
          <div className={styles.app}>
            <Routes>
              <Route path="/*" element={<NotesApp />} />
            </Routes>
            <ToastContainer position="top-right" autoClose={3000} />
          </div>
        </GroupNotesProvider>
      </GroupListProvider>
    </>
  );
}

export default App;
