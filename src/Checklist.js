import React, { useState } from "react";
import './Checklist.css';

const Checklist = () => {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    const handleInputChange = (event) => {
        setTask(event.target.value);
    }

    const addTask = () => {
        if (task !== '') {
            setTaskList([...taskList, task]);
            setTask("");
        }
    }

    return (
        <div className="checklist-container">
            <h1>My Checklist Tool</h1>
            <input type="text" placeholder="Enter a task for a checklist" value={task} onChange={handleInputChange} />
            <button onClick={addTask}>Add Task</button>
            <ul className="task-list">
                {taskList.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    )
}

export default Checklist;
