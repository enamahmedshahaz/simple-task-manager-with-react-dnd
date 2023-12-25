import { useEffect, useState } from "react";
import TaskColumn from "./TaskColumn";


const ListTask = ({ tasks, setTasks }) => {

    const [todos, setTodos] = useState([]);
    const [ongoing, setOngoing] = useState([]);
    const [completed, setCompleted] = useState([]);

    useEffect(() => {

        const filterTodos = tasks?.filter(task => task.status === 'todo');
        const filterOngoing = tasks?.filter(task => task.status === 'ongoing');
        const filterCompleted = tasks?.filter(task => task.status === 'completed');

        setTodos(filterTodos);
        setOngoing(filterOngoing);
        setCompleted(filterCompleted);

    }, [tasks]);

    
    return (
        <div className="p-10 flex justify-around items-start">
            <TaskColumn type={"todo"} title={"Todo"} tasksToShow={todos} tasks={tasks} setTasks={setTasks}></TaskColumn>
            <TaskColumn type={"ongoing"} title={"On-going"} tasksToShow={ongoing} tasks={tasks} setTasks={setTasks}></TaskColumn>
            <TaskColumn type={"completed"} title={"Completed"} tasksToShow={completed} tasks={tasks} setTasks={setTasks}></TaskColumn>
        </div>
    );
};

export default ListTask;