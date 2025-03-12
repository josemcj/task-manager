import { useState } from 'react';
import { useTasks } from 'hooks/useTasks';
import TaskModal from './components/TaskModal';
import TaskCard from './components/TaskCard';

function Tasks() {
  const tasks = useTasks();
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleEdit = (item) => {
    setTaskToEdit(item);
    setShowTaskModal(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <TaskModal open={showTaskModal} onClose={() => setShowTaskModal(false)} taskToEdit={taskToEdit} />

      <div className="container mx-auto">
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
