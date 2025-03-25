import { useState } from 'react';
import { useTasks } from 'hooks/useTasks';
import { PlusIcon } from '@heroicons/react/24/solid';
import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/solid';
import { AnimatePresence } from 'motion/react';
import ReactPaginate from 'react-paginate';
import * as motion from 'motion/react-client';
import Button from 'components/Button';
import TaskModal from './components/TaskModal';
import TaskCard from './components/TaskCard';
import ConfirmDelete from './components/ConfirmDelete';
import Select from 'components/forms/Select';

function TasksPage() {
  const tasks = useTasks();
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState('');

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = tasks.all().slice(itemOffset, endOffset);
  const pageCount = Math.ceil(tasks.all().length / itemsPerPage);

  const itemsPerPageOptions = [
    {
      id: 3,
      name: 3,
    },
    {
      id: 5,
      name: 5,
    },
    {
      id: 10,
      name: 10,
    },
  ];

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

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % tasks.all().length;
    console.log(`El usuario solicitó el número de página ${event.selected} , que está desplazado ${newOffset} `);
    setItemOffset(newOffset);
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
                {currentItems.map((task) => (
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

        <div className="flex">
          <Select items={itemsPerPageOptions} onChange={(e) => setItemsPerPage(Number(e.target.value))} />

          <ReactPaginate
            breakLabel="..."
            nextLabel="siguiente >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< anterior"
            renderOnZeroPageCount={null}
            previousClassName="pagination-btn"
            nextClassName="pagination-btn"
          />
        </div>
      </div>
    </>
  );
}

export default TasksPage;
