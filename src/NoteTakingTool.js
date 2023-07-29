import React, { useState } from "react";
import './NoteTakingTool.css';

const NoteTakingTool = () => {
    const [note, setNote] = useState("");
    const [noteList, setNoteList] = useState([]);

    // Function to handle changes in the note textarea
    const handleNoteChange = (event) => {
        // Update the note state with the value entered in the textarea
        setNote(event.target.value);
    }

    // Function to save the note to the noteList
    const saveNote = () => {
        if (note !== '') {
            // Add the current note to the noteList and clear the note state
            setNoteList([...noteList, note]);
            setNote("");
        }
    }

    return (
        <div className="note-taking-tool-container">
            <h1>Simple Note-taking Tool</h1>
            {/* Textarea for entering notes */}
            <textarea placeholder="Please Enter your notes here..." value={note} onChange={handleNoteChange} />
            {/* Button to save the note */}
            <button onClick={saveNote}>Save Your Note</button>
            {/* List to display saved notes */}
            <ul className="note-list">
                {noteList.map((note, index) => (
                    <li key={index}>{note}</li>
                ))}
            </ul>
        </div>
    )
}

export default NoteTakingTool;