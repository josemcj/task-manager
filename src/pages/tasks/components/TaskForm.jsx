import { useEffect, useState } from 'react';
import { useTasks } from 'hooks/useTasks';
import taskStatuses from '@/data/taskStatuses.json';
import Button from 'components/Button';

const STYLES = {
  input:
    'bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-hidden block w-full p-2.5',
  select:
    'bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-hidden block w-full p-2.5',
};

function TaskForm({ taskToEdit = {} }) {
  const tasks = useTasks();

  const [task, setTask] = useState({
    title: '',
    description: '',
    status: '',
  });

  useEffect(() => {
    if (taskToEdit) setTask(taskToEdit);
  }, [taskToEdit]);

  const resetForm = () => {
    setTask({
      title: '',
      description: '',
      status: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    tasks.save(task);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-medium text-gray-900">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          className={STYLES['input']}
          placeholder="Nombre de la tarea"
          required
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block mb-2 font-medium text-gray-900">
          Descripción
        </label>
        <textarea
          id="description"
          className={STYLES['input']}
          placeholder="Agrega una descripción"
          required
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="status" className="block mb-2 font-medium text-gray-900">
          Selecciona el estado
        </label>
        <select
          id="status"
          className={STYLES['select']}
          value={task.status}
          onChange={(e) => setTask({ ...task, status: e.target.value })}>
          <option value="" disabled>
            Seleccionar
          </option>

          {taskStatuses.map((status) => (
            <option key={status.id} value={status.id}>
              {status.name}
            </option>
          ))}
        </select>
      </div>

      <Button type="submit">Enviar</Button>
    </form>
  );
}

export default TaskForm;
