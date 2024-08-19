// import { useState }  from 'react';
// import { useEffect } from 'react';

// export default function ToDoList() {

//     const [tasks, setTasks] = useState([]);
//     const [newTask, setNewTask] = useState("");

//     useEffect(() => {
//         console.log('Tasks:', tasks);
//       }, [tasks]); 

//     //Without this function the user wont be able to type in the task.
//     function handleInputChange(event) {
//         setNewTask(event.target.value);
//     }

//     function handleStatusChange(index, status) {
//         const newTasks = tasks.map((task, taskIndex) =>
//             taskIndex === index ? { ...task, status: status } : task
//         );
//         setTasks(newTasks);
//     }

//     function addTask() {
//         //
//         if (newTask.trim() !== "") {
//             setTasks(t => [...t, newTask]);
//             setNewTask("");
//         }
//         else {
//             alert("Please add a task");
//         }
//     }

//     function deleteTask(index) {
//         const updatedTasks = tasks.filter((_, i) => i !== index);
//         setTasks(updatedTasks);
//     }




//     return (
//         <div>
//             <form className='formBar' >
//                 <input type="text" placeholder="Add a new task..."
//                     value={newTask}
//                     onChange={handleInputChange} />

//                 <button onClick={addTask}>Add</button>
//             </form>
//             <ol>
//                 {tasks.map((task, index) =>
//                     <li key={index}>
//                         <span>{task}</span>
//                         <button onClick={() => deleteTask(index)}>Delete</button>


//                         <select
//                             onChange={(e) => handleStatusChange(index, e.target.value)}
//                             defaultValue="In Progress"
//                         >
//                             <option value="" disabled>Select Status</option>

//                             <option value="In Progress">In Progress</option>
//                             <option value="Completed">Completed</option>
//                         </select>
//                     </li>



//                 )}



//             </ol>
//         </div>

//     );
// }


import { useState, useEffect } from 'react';

export default function ToDoList() {

    //The text typed on the input field is stored in the newTask state.Once the submit button is clicked the addNewTask function is called and addded to the tasks list.

    //Stores the list of task
    const [tasks, setTasks] = useState([]);
    
    //Stores the value of the new task that the user types into the input field before adding it to the list
    const [newTask, setNewTask] = useState("");

    //Stores the text entered into the search bar
    const [searchItem, setSearchItem] = useState("");

    useEffect(() => {
        console.log('Tasks:', tasks);
    }, [tasks]);

    // Without this function the user wont be able to type in the task.
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }


    function handleStatusChange(index, status) {
        const newTasks = tasks.map((task, taskIndex) =>
            taskIndex === index ? { ...task, status: status } : task
        );
        const selectElement = document.querySelectorAll('select')[index];
        if (status === 'In Progress') {
            selectElement.style.backgroundColor = 'yellow';
            selectElement.style.color = 'black';

        } else if (status === 'Completed') {
            selectElement.style.backgroundColor = 'green';
            selectElement.style.color = 'white';

        }
        setTasks(newTasks);
    }

    function handleSearchChange(event) {
        setSearchItem(event.target.value);
    }


    function addTask(event) {
        event.preventDefault();  // Prevent form submission
        if (newTask.trim() !== "") {
            setTasks(t => [...t, { text: newTask, status: "In Progress" }]);  
            setNewTask("");
        } else {
            alert("Please add a task");
        }
    }


    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }


    const filteredTasks = tasks.filter(task =>
        task.text.toLowerCase().includes(searchItem.toLowerCase())
    );

    return (
        <div className='displaySection'>
            <form className='formBar' onSubmit={addTask}>
                <input
                    type="text"
                    placeholder="Add a new task..."
                    value={newTask}
                    onChange={handleInputChange}

                />
                <button type="submit" >Add Task</button>
            </form>
            <input
            className='searchBar'
                type="text"
                placeholder="Search tasks..."
                value={searchItem}
                onChange={handleSearchChange}

            />
            <ol>
                {filteredTasks.map((task, index) => (
                    <li key={index} className='taskName'>
                        <span>{task.text}</span>

                        <select
                            onChange={(e) => handleStatusChange(index, e.target.value)}
                            value={task.status}

                        >
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                        <button onClick={() => deleteTask(index)}  className='delete-btn'>Delete</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}
