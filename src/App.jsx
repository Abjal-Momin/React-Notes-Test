import NotesApp from "./components/NotesApp";
import { GroupListProvider } from "./context/GroupListContext";
import { GroupNotesProvider } from "./context/GroupNotesContext";
import { ToastContainer } from "react-toastify";
import styles from "./styles/App.module.css";

function App() {
  return (
    <>
      <GroupListProvider>
        <GroupNotesProvider>
          <div className={styles.app}>
            <NotesApp />
            <ToastContainer position="top-right" autoClose={3000} />
          </div>
        </GroupNotesProvider>
      </GroupListProvider>
    </>
  );
}

export default App;
