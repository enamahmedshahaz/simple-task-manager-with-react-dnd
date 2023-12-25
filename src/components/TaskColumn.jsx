import { useDrop } from "react-dnd";
import Task from "./Task";

const TaskColumn = ({ type, title, tasksToShow, tasks, setTasks }) => {


    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'task',
        drop: (task) => addTaskToColumn(task.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }));

    const addTaskToColumn = (id) => {

        console.log('over ', type, id);

        const findTask = tasks.find(task => task.id === id);

        const statusChanged = { ...findTask, status: type };

        const filterTasks = tasks.filter(task => task.id != id);

        setTasks([...filterTasks, statusChanged]);

    }

    return (

        <div ref={drop} className={`${isOver ? 'bg-green-200' : 'bg-gray-200'} w-60 min-h-96  rounded-sm p-5`}>
            <div>
                <h2 className="text-xl font-semibold"> {title} ({tasksToShow?.length})</h2>
            </div>

            <div className="flex flex-col gap-4">
                {
                    tasksToShow?.map(task => <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks}></Task>)
                }
            </div>

        </div>
    );
};

export default TaskColumn;