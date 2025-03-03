import { useContext, useState } from 'react'
import { NoteContext } from '../context/NotesContext'
import "./styles/NotesForm.css";

function NotesForm() {

    const {notas, crearNota} = useContext(NoteContext)

    const [message, setMessage] = useState(false)

    const [titleInput, setTitleInput] = useState('')
    const [subtitleInput, setSubtitleInput] = useState('')
    const [contentInput, setContentInput] = useState('')

    const formHandleSubmit = (e) => {
        e.preventDefault()
        crearNota(titleInput, subtitleInput, contentInput)
        setTitleInput('')
        setSubtitleInput('')
        setContentInput('')
        setMessage(true)
        setInterval(() => {
            setMessage(false)
        }, 10000);
    }

    return (
        <div className="containerForm">
            <form onSubmit={formHandleSubmit}>
                <div className="formInput" id="title">
                    <label>Titulo</label>
                    <input
                        autoFocus
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
                {message ? <p style={{color: 'green'}}>Nota Agregada con exito</p> : <></>}
            </form>
        </div>
    );
}

export default NotesForm
