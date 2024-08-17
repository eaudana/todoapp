import { useState } from "react";

export default function ListForm() {
    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    function addTask() {

    }

    function deleteTask() {

    }


    return (

        <form>
            <input type="text" placeholder="Add your task" />
            <button>Add</button>
        </form>);
}