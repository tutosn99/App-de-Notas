import { useState } from "react";
import "./styles/NotesModal.css";
import { AiOutlineClose } from "react-icons/ai";

const ModalVisible = ({ info }) => {
  return (
    <div id="visible">
      <h1>{info.titulo}</h1>
      <h2>{info.subtitulo}</h2>
      <p>{info.contenido}</p>
    </div>
  );
};

const ModalEditable = ({ info, editInfo }) => {
  const [tituloInput, setTituloInput] = useState(info.titulo);
  const [subtituloInput, setSubtituloInput] = useState(info.subtitulo);
  const [contenidoInput, setContenidoInput] = useState(info.contenido);

  const editSubmit = (e) => {
    e.preventDefault();
    const noteEdited = {
      id: info.id,
      titulo: tituloInput,
      subtitulo: subtituloInput,
      contenido: contenidoInput,
    };
    editInfo(noteEdited);
  };

  return (
    <form id="editable" onSubmit={editSubmit}>
      <label id="editLabel">Titulo:</label>
      <input
        type="text"
        id="titulo"
        onChange={(i) => {
          setTituloInput(i.target.value);
        }}
        value={tituloInput}
      ></input>
      <label id="editLabel">Subtitulo:</label>
      <input
        type="text"
        id="subtitulo"
        onChange={(i) => {
          setSubtituloInput(i.target.value);
        }}
        value={subtituloInput}
      ></input>
      <label id="editLabel">Contenido:</label>
      <textarea
        rows="1"
        type="text"
        id="contenido"
        onChange={(i) => {
          setContenidoInput(i.target.value);
        }}
        value={contenidoInput}
      ></textarea>
      <button type="submit">Editar</button>
    </form>
  );
};

function NotesModal({ info, disable, status, edit, editInfo }) {
  const closeModal = (e) => {
    disable(e ? "edit" : "");
  };

  return (
    <div className="modalContainer" id={status}>
      <div id="disable" onClick={() => closeModal(edit)}></div>
      <main>
        <button onClick={() => closeModal(edit)} className="close">
          <AiOutlineClose />
        </button>
        {edit ? (
          <ModalEditable info={info} editInfo={editInfo} />
        ) : (
          <ModalVisible info={info} />
        )}
      </main>
    </div>
  );
}

export default NotesModal;
