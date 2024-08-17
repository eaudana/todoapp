import { useState } from 'react';

export default function ToDoList() {

    const [task, setTask] = useState(["Task 1", "Task 2", "Task 3"]);
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

    }

    function deleteTask() {

    }

    function addTask() {
        setTask(t => [...t, newTask]);
    }


    return (
        <div>
            <form>
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