import { BsPencil, BsPencilFill, BsTrash, BsTrash2 } from "react-icons/bs";
import { NoteContext } from "../context/NotesContext";
import "./NotesCard.css";
import { useContext } from "react";

export function NotesCard({ nota, modalOn, openModalEdit }) {
  const { eliminarNota } = useContext(NoteContext);

  if (nota.length === 0) {
    return (
      <li>
        <h1>Aun no hay Tareas</h1>
      </li>
    );
  }

  const confirmDelete = () => confirm("Estas Seguro de Eliminar esta nota?") ? true : false;


  const deleteNote = (note) => {
    const confirm = confirmDelete()
    if (confirm) {
      eliminarNota(note);
    }
  };

  return nota.map((e, i) => {
    return (
      <li key={i} className="noteCard">
        <h1>{e.titulo}</h1>
        <h2>{e.subtitulo}</h2>
        <ul className="btnNotes">
          <li className="open">
            <button id="open" onClick={() => modalOn(e.id, "view")}>
              Abrir
            </button>
          </li>
          <li className="modify">
            <button id="edit" onClick={() => modalOn(e.id, "edit")}>
              <BsPencil />
            </button>
            <button id="delete" onClick={() => deleteNote(e)}>
              <BsTrash />
            </button>
          </li>
        </ul>
      </li>
    );
  });
}
