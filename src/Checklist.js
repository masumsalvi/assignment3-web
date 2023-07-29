import React, { useState } from "react";
import './Checklist.css';

const Checklist = () => {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    // Function to handle input change when typing a new task
    const handleInputChange = (event) => {
        setTask(event.target.value);
    }

    // Function to add a new task to the taskList
    const addTask = () => {
        if (task !== '') {
            // Add the new task to the taskList
            setTaskList([...taskList, task]);
            // Reset the task input field after adding the task
            setTask("");
        }
    }

    return (
        <div className="checklist-container">
            {/* Heading for the checklist tool */}
            <h1>My Checklist Tool</h1>
            {/* Input field for entering a new task */}
            <input type="text" placeholder="Enter a task for a checklist" value={task} onChange={handleInputChange} />
            {/* Button to add a new task to the checklist */}
            <button onClick={addTask}>Add Task</button>
            {/* Display the list of tasks */}
            <ul className="task-list">
                {/* Map through the taskList and display each task as a list item */}
                {taskList.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    )
}

export default Checklist;