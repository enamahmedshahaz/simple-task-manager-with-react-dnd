import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';


const CreateTasks = ({ tasks, setTasks }) => {

    const [task, setTask] = useState({
        id: "",
        name: "",
        status: "todo"
    });

    console.log(task);

    const handleSubmit = (e) => {

        e.preventDefault();

        if (task.name.length < 3) return toast.error("Must be at least 3 chars");

        setTasks((prev) => {
            const list = [...prev, task];
            localStorage.setItem('tasks', JSON.stringify(list));
            return list;
        });

        toast.success("Task created");
        
        // clear create form 
        setTask({
            id: "",
            name: "",
            status: "todo"
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={task.name} onChange={(e) => setTask({ ...task, id: uuidv4(), name: e.target.value })} type="text" className="input input-bordered input-primary w-full max-w-xs" placeholder="Enter task" />
                <button className="btn btn-primary ml-2">Create task</button>
            </form>
        </div>
    );
};

export default CreateTasks;