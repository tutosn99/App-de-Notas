import NotesForm from "./components/NotesForm";
import NotesList from "./components/NotesList";
import { NotesContextProvider } from "./context/NotesContext";
import "./notesform.css";

function App() {
  return (
    <>
      <NotesContextProvider>
        <h1>Aplicación de Notas</h1>
        <NotesForm />
        <NotesList />
      </NotesContextProvider>
    </>
  );
}

export default App;
