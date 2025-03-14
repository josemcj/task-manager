import { useState } from 'react';
import { useTasks } from 'hooks/useTasks';
import { PlusIcon } from '@heroicons/react/24/solid';
import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/solid';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client';
import Button from 'components/Button';
import TaskModal from './components/TaskModal';
import TaskCard from './components/TaskCard';
import ConfirmDelete from './components/ConfirmDelete';

function TasksPage() {
  const tasks = useTasks();
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState('');

  const onCloseTaskModal = () => {
    setShowTaskModal(false);
    setTaskToEdit(null);
  };

  const handleEdit = (item) => {
    setTaskToEdit(item);
    setShowTaskModal(true);
  };

  const handleDelete = () => {
    tasks.deleteById(taskToDelete);
    setShowConfirmDelete(false);
    setTaskToDelete('');
  };

  const handleConfirmDelete = (id) => {
    setShowConfirmDelete(true);
    setTaskToDelete(id);
  };

  const handleCancelDelete = () => {
    setShowConfirmDelete(false);
    setTaskToDelete('');
  };

  return (
    <>
      <TaskModal
        open={showTaskModal}
        onClose={onCloseTaskModal}
        taskToEdit={taskToEdit}
        setTaskToEdit={setTaskToEdit}
      />

      <ConfirmDelete open={showConfirmDelete} onClose={handleCancelDelete} onConfirm={handleDelete} />

      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <ClipboardDocumentCheckIcon className="size-8 dark:text-white" />
            <h1 className="font-bold text-4xl text-gray-900 dark:text-gray-100">Mis tareas</h1>
          </div>

          <Button onClick={() => setShowTaskModal(true)}>
            <div className="flex items-center gap-2">
              <PlusIcon className="size-4" />
              <span className="hidden md:block">Agregar tarea</span>
            </div>
          </Button>
        </div>

        <AnimatePresence mode="popLayout">
          {tasks.all().length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
              <AnimatePresence>
                {tasks.all().map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onEdit={() => handleEdit(task)}
                    onDelete={() => handleConfirmDelete(task.id)}
                  />
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <motion.div
              key="no-tasks"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="text-gray-500 flex justify-center items-center size-full p-18 font-bold text-lg">
              No hay tareas
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default TasksPage;
