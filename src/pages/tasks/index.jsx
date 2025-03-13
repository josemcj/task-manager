import { useState } from 'react';
import { useTasks } from 'hooks/useTasks';
import { PlusIcon } from '@heroicons/react/24/solid';
import Button from 'components/Button';
import TaskModal from './components/TaskModal';
import TaskCard from './components/TaskCard';

function Tasks() {
  const tasks = useTasks();
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const onCloseTaskModal = () => {
    setShowTaskModal(false);
    setTaskToEdit(null);
  };

  const handleEdit = (item) => {
    setTaskToEdit(item);
    setShowTaskModal(true);
  };

  return (
    <>
      <TaskModal
        open={showTaskModal}
        onClose={onCloseTaskModal}
        taskToEdit={taskToEdit}
        setTaskToEdit={setTaskToEdit}
      />

      <div className="container mx-auto">
        <div className="flex justify-between">
          <h1 className="font-bold text-4xl text-gray-900 dark:text-gray-100">Mis tareas</h1>

          <Button onClick={() => setShowTaskModal(true)}>
            <div className="flex items-center gap-2">
              <PlusIcon className="size-4" />
              Agregar tarea
            </div>
          </Button>
        </div>

        {tasks.all().length > 0 ? (
          <div className="grid grid-cols-3 gap-4 my-5">
            {tasks.all().map((task) => (
              <TaskCard key={task.id} task={task} onClick={() => handleEdit(task)} />
            ))}
          </div>
        ) : (
          <div className="text-gray-500 flex justify-center items-center size-full p-18 font-bold text-lg">
            No hay tareas
          </div>
        )}
      </div>
    </>
  );
}

export default Tasks;
