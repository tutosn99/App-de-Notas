export function NotesCard({ nota, modalOn, openModalEdit }) {
  if (nota.length === 0) {
    return (
      <li>
        <h1>Aun no hay Tareas</h1>
      </li>
    );
  }

  return nota.map((e, i) => {
    return (
      <li key={i} className="noteCard">
        <h1>{e.titulo}</h1>
        <h2>{e.subtitulo}</h2>
        <ul className="btnNotes">
          <li className="open">
            <button onClick={() => modalOn(e.id, 'view')}>Abrir</button>
          </li>
          <li className="modify">
            <button onClick={() => modalOn(e.id, 'edit')} >Editar</button>
            <button>Borrar</button>
          </li>
        </ul>
      </li>
    );
  });
}
