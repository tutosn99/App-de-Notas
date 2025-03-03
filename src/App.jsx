import NotesForm from "./components/NotesForm";
import NotesList from "./components/NotesList";
import { NotesContextProvider } from "./context/NotesContext";

function App() {
  return (
    <>
      <NotesContextProvider>
        <div className="main">
        <h1 id="appTitle">Aplicación de Notas</h1>
          <NotesForm />
          <NotesList />
        </div>
      </NotesContextProvider>
    </>
  );
}

export default App;
