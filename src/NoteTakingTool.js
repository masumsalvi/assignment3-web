import React, { useState } from "react";
import './NoteTakingTool.css';

const NoteTakingTool = () => {
    const [note, setNote] = useState("");
    const [noteList, setNoteList] = useState([]);

    const handleNoteChange = (event) => {
        setNote(event.target.value);
    }

    const saveNote = () => {
        if (note !== '') {
            setNoteList([...noteList, note]);
            setNote("");
        }
    }

    return (
        <div className="note-taking-tool-container">
            <h1>Simple Note-taking Tool</h1>
            <textarea placeholder="Please Enter your notes here..." value={note} onChange={handleNoteChange} />
            <button onClick={saveNote}>Save Your Note</button>
            <ul className="note-list">
                {noteList.map((note, index) => (
                    <li key={index}>{note}</li>
                ))}
            </ul>
        </div>
    )
}

export default NoteTakingTool;