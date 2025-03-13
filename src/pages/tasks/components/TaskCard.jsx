import { useState, useEffect } from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useTasks } from 'hooks/useTasks';
import { useTaskStatuses } from 'hooks/useTaskStatuses';
import * as motion from 'motion/react-client';
import Badge from 'components/Badge';
import Button from 'components/Button';
import ConfirmDelete from './ConfirmDelete';

function TaskCard({ task, onClick }) {
  const tasks = useTasks();
  const taskStatuses = useTaskStatuses();
  const [statusText, setStatusText] = useState('');
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState('');

  const BADGE_TYPES = {
    1: 'secondary',
    2: 'warning',
    3: 'success',
  };

  const handleDelete = () => {
    tasks.deleteById(taskToDelete);
  };

  const handleConfirmDelete = (id) => {
    setShowConfirmDelete(true);
    setTaskToDelete(id);
  };

  const handleCancelDelete = () => {
    setShowConfirmDelete(false);
    setTaskToDelete('');
  };

  useEffect(() => {
    const { name } = taskStatuses.all().find((status) => status.id == task.status);
    setStatusText(name);
  }, [task]);

  return (
    <>
      <ConfirmDelete open={showConfirmDelete} onClose={handleCancelDelete} onConfirm={handleDelete} />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        layout
        className="p-8 border border-gray-400 dark:border-gray-700 rounded-2xl flex flex-col dark:bg-gray-800">
        <div className="mb-3">
          <h3 className="font-bold text-xl dark:text-gray-100 mb-3">{task.title}</h3>
          <Badge text={statusText} type={BADGE_TYPES[task.status]} />
        </div>

        <div className="mb-3">
          <div className="text-gray-500 dark:text-gray-300">{task.description}</div>
        </div>

        <div className="flex justify-end gap-1 mt-auto">
          <Button onClick={onClick} title="Editar">
            <PencilIcon className="size-4" />
          </Button>

          <Button onClick={() => handleConfirmDelete(task.id)} title="Eliminar" variant="outlineDanger">
            <TrashIcon className="size-4" />
          </Button>
        </div>
      </motion.div>
    </>
  );
}

export default TaskCard;
