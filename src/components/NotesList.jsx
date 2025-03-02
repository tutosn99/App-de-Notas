import { useContext, useState } from "react";
import { NoteContext } from "../context/NotesContext";
import { NotesCard } from "./NotesCard";
import NotesModal from "./NotesModal";
import "./noteslist.css";

function NotesList() {
  const { notas, setNotas } = useContext(NoteContext);

  const [modalActive, setModalActive] = useState(false);
  const [modalValues, setModalValues] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);

  const findNote = (id) => notas.find((nota) => nota.id == id);

  const abrirModoEdit = (mode) => {
    if (mode == "edit") {
      setModalEdit(true);
    }
  };

  const openModal = (id, mode) => {
    const modalNote = findNote(id);
    abrirModoEdit(mode);
    setModalValues(modalNote);
    setModalActive(true);
  };

  const confirmarSalida = () => {
    if (confirm("Si cierras perderas los cambios")) {
      setModalActive(false);
      setModalEdit(false);
    }
  };

  const closeModal = (a) => {
    if (a == "edit") {
      confirmarSalida();
    }
    setModalActive(false);
  };

  const verificarCambios = (n1, n2) => {
    if (n1 == n2) {
      console.log("No Hubieron Cambios");
    }
    return true;
  };

  const realizarCambios = (notas, cambios) => {
    const nuevasNotas = notas.filter((nota) => nota.id !== cambios.id);
    nuevasNotas.push(cambios);
    setNotas(nuevasNotas);
    setModalActive(false);
    setModalEdit(false);
    console.log("datos cambiados: ", cambios);
  };

  const editInfo = (noteEdited) => {
    const notaCambiada = notas.find((n) => n.id == noteEdited.id);
    if (verificarCambios(notaCambiada, noteEdited)) {
      realizarCambios(notas, noteEdited);
    }
    closeModal("");
  };

  return (
    <main>
      <h2>Tareas</h2>
      <ul className="notesContainer">
        <NotesCard nota={notas} modalOn={openModal} modalOff={closeModal} />
      </ul>
      <NotesModal
        info={modalValues}
        disable={closeModal}
        status={modalActive ? "on" : "off"}
        edit={modalEdit}
        editInfo={editInfo}
      />
    </main>
  );
}

export default NotesList;
