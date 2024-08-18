import { useState } from 'react';

export default function ToDoList() {

    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    //Without this function the user wont be able to type in the task.
    function handleInputChange(e) {
        setNewTask(e.target.value);
    }

    function handleStatusChange(index, status) {
        const newTasks = task.map((task, taskIndex) =>
            taskIndex === index ? { ...task, status: status } : task
        );
        setTask(newTasks);
    }

    function addTask() {
        //
        if (newTask.trim() !== "") {
            setTask(t => [...t, newTask]);
            setNewTask("");
        }
        else {
            alert("Please add a task");
        }
    }

    function deleteTask(index) {
        const updatedTasks = task.filter((_, i) => i !== index);
        setTask(updatedTasks);
    }




    return (
        <div>
            <form className='formBar' >
                <input type="text" placeholder="Add a task..."
                    value={newTask}
                    onChange={handleInputChange} />

                <button onClick={addTask}>Add</button>
            </form>
            <ol>
                {task.map((task, index) =>
                    <li key={index}>
                        <span>{task}</span>
                        <button onClick={() => deleteTask(index)}>Delete</button>


                        <select
                            onChange={(e) => handleStatusChange(index, e.target.value)}
                            defaultValue="In Progress"
                        >
                            <option value="" disabled>Select Status</option>

                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </li>



                )}



            </ol>
        </div>

    );
}