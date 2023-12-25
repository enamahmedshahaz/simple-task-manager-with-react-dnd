import { useDrag } from 'react-dnd';
import toast from 'react-hot-toast';


const Task = ({ task, tasks, setTasks }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'task',
        item: task,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    console.log('task dragging: ', isDragging);

    const handleRemove = (id) => {

        const filterTasks = tasks?.filter(task => task.id != id);

        localStorage.setItem('tasks', JSON.stringify(filterTasks));

        setTasks(filterTasks);

        toast.success('Task deleted!');

    }
    
    return (
        <div ref={drag}
            className={`bg-slate-400 ${isDragging ? 'opacity-5' : 'opacity-100'} px-10 py-2 rounded-sm flex gap-2 justify-center items-center cursor-grab`}>
            <p>{task.name}</p>
            <button onClick={() => handleRemove(task.id)} className="bg-red-400 p-2 rounded-full">x</button>
        </div>
    );
};

export default Task;