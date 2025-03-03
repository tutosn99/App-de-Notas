import { createContext } from "react";
import { useState, useEffect } from "react";
import { notas as Data } from "../data/Notes";

export const NoteContext = createContext();

export function NotesContextProvider({ children }) {
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    setNotas(Data);
  }, []);

  const crearNota = (titulo, subtitulo, contenido) => {
    const id = notas.length + 1;
    setNotas([...notas, { id, titulo, subtitulo, contenido }]);
  };

  const eliminarNota = (note) => {
    setNotas(notas.filter( n => n !== note))
  };

  return (
    <NoteContext.Provider value={{ setNotas, notas, crearNota, eliminarNota }}>
      {children}
    </NoteContext.Provider>
  );
}
