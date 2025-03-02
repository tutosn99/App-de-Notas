import { useContext, useState } from 'react'
import { NoteContext } from '../context/NotesContext'

function NotesForm() {

    const {notas, crearNota} = useContext(NoteContext)

    const [titleInput, setTitleInput] = useState()
    const [subtitleInput, setSubtitleInput] = useState()
    const [contentInput, setContentInput] = useState()

    const formHandleSubmit = (e) => {
        e.preventDefault()
        crearNota(titleInput, subtitleInput, contentInput)
    }

    return (
        <div className="containerForm">
            <button onClick={()=>{console.log(notas)}}>Ver Tareas por Consola</button>
            <form onSubmit={formHandleSubmit}>
                <div className="formInput" id="title">
                    <label>Titulo</label>
                    <input
                        type="text"
                        placeholder="Titulo..."
                        value={titleInput}
                        onChange={(e) => {
                            setTitleInput(e.target.value);
                        }}
                        required
                    />
                </div>
                <div className="formInput" id="subtitle">
                    <label htmlFor="Subtitulo">Subtitulo</label>
                    <input
                        type="text"
                        placeholder="Subtitulo..."
                        value={subtitleInput}
                        onChange={(e) => {
                            setSubtitleInput(e.target.value);
                        }}
                        required
                    />
                </div>
                <div className="formInput" id="content">
                    <label>Contenido</label>
                    <input
                        type="text"
                        placeholder="Ingresar Texto..."
                        value={contentInput}
                        onChange={(e) => {
                            setContentInput(e.target.value);
                        }}
                        required
                    />
                </div>
                <button className="inputButton" type="submit">
                    Agregar
                </button>
            </form>
        </div>
    );
}

export default NotesForm
