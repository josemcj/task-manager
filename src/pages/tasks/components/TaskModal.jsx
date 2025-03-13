import { useEffect, useState } from 'react';
import { useTasks } from 'hooks/useTasks';
import { useTaskStatuses } from 'hooks/useTaskStatuses';
import Button from 'components/Button';
import Modal from 'components/Modal';

const STYLES = {
  input:
    'bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-hidden block w-full p-2.5',
  select:
    'bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-hidden block w-full p-2.5',
};

function TaskModal({ open, onClose, taskToEdit }) {
  const tasks = useTasks();
  const taskStatuses = useTaskStatuses();

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

  const handleCloseModal = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    tasks.save(task);
    handleCloseModal();
  };

  return (
    <Modal title={`${taskToEdit ? 'Editar' : 'Agregar'} tarea`} open={open} onClose={handleCloseModal}>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-medium text-gray-900 dark:text-gray-100">
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
          <label htmlFor="description" className="block mb-2 font-medium text-gray-900 dark:text-gray-100">
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
          <label htmlFor="status" className="block mb-2 font-medium text-gray-900 dark:text-gray-100">
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
            {taskStatuses.all().map((status) => (
              <option key={status.id} value={status.id}>
                {status.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end">
          <Button type="submit">Guardar</Button>
        </div>
      </form>
    </Modal>
  );
}

export default TaskModal;
