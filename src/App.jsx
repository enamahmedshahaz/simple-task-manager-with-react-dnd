
import { useEffect, useState } from 'react'
import './App.css'
import CreateTasks from './components/CreateTasks';
import ListTask from './components/ListTask';
import { Toaster } from 'react-hot-toast';

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('tasks')) {
      setTasks(JSON.parse(localStorage.getItem('tasks')));
    }

  }, [])

  console.log('Tasks: ', tasks);

  return (

    <DndProvider backend={HTML5Backend}>
      <div className='pt-10'>
        <Toaster></Toaster>

        <CreateTasks tasks={tasks} setTasks={setTasks}></CreateTasks>

        <ListTask tasks={tasks} setTasks={setTasks}></ListTask>

      </div>
    </DndProvider>
  )
}


export default App
