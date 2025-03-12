import { useState } from 'react';
import { useTasks } from 'hooks/useTasks';
import TaskCard from './components/TaskCard';
import TaskForm from './components/TaskForm';

function Tasks() {
  const tasks = useTasks();
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleEdit = (item) => {
    setTaskToEdit(item);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto">
        {/* <TaskForm taskToEdit={taskToEdit} /> */}

        {tasks.all().length > 0 ? (
          <div className="grid grid-cols-3 gap-4">
            {tasks.all().map((task) => (
              <TaskCard key={task.id} task={task} onClick={() => handleEdit(task)} />
            ))}
          </div>
        ) : (
          <div className="text-gray-400 flex justify-center size-full">No hay tareas</div>
        )}
      </div>
    </div>
  );
}

export default Tasks;
