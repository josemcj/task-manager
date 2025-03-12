import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useTasks } from 'hooks/useTasks';
import Button from 'components/Button';

function TaskCard({ task, onClick = () => null }) {
  const tasks = useTasks();

  const handleDelete = (id) => {
    tasks.deleteById(id);
  };

  return (
    <div className="p-8 border border-gray-300 rounded-2xl flex flex-col">
      <div className="mb-2">
        <h3 className="font-bold text-xl">{task.title}</h3>
      </div>

      <div className="mb-3">
        <div className="text-gray-500">{task.description}</div>
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
