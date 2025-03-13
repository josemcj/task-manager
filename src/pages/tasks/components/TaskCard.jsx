import { useState, useEffect } from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useTasks } from 'hooks/useTasks';
import taskStatuses from '@/data/taskStatuses.json';
import Badge from 'components/Badge';
import Button from 'components/Button';

function TaskCard({ task, onClick }) {
  const tasks = useTasks();
  const [statusText, setStatusText] = useState('');

  const BADGE_TYPES = {
    1: 'secondary',
    2: 'warning',
    3: 'success',
  };

  const handleDelete = (id) => {
    tasks.deleteById(id);
  };

  useEffect(() => {
    const { name } = taskStatuses.find((status) => status.id == task.status);
    setStatusText(name);
  }, [task]);

  return (
    <div className="p-8 border border-gray-400 dark:border-gray-700 rounded-2xl flex flex-col dark:bg-gray-800">
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

        <Button onClick={() => handleDelete(task.id)} title="Eliminar" variant="danger">
          <TrashIcon className="size-4" />
        </Button>
      </div>
    </div>
  );
}

export default TaskCard;
