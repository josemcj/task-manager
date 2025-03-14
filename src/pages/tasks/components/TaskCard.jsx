import { useState, useEffect } from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useTaskStatuses } from 'hooks/useTaskStatuses';
import * as motion from 'motion/react-client';
import Badge from 'components/Badge';
import Button from 'components/Button';

function TaskCard({ task, onEdit, onDelete }) {
  const taskStatuses = useTaskStatuses();
  const [statusText, setStatusText] = useState('');

  const BADGE_TYPES = {
    1: 'secondary',
    2: 'warning',
    3: 'success',
  };

  useEffect(() => {
    const { name } = taskStatuses.all().find((status) => status.id == task.status);
    setStatusText(name);
  }, [task]);

  return (
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
        <Button onClick={onEdit} title="Editar">
          <PencilIcon className="size-4" />
        </Button>

        <Button onClick={onDelete} title="Eliminar" variant="outlineDanger">
          <TrashIcon className="size-4" />
        </Button>
      </div>
    </motion.div>
  );
}

export default TaskCard;
