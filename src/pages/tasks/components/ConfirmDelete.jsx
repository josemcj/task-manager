import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import Modal from 'components/Modal';
import Button from 'components/Button';

function ConfirmDelete({ open, onConfirm, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col items-center justify-center gap-5 font-bold text-xl mb-8">
        <ExclamationTriangleIcon className="size-30" />
        ¿Deseas eliminar esta tarea?
      </div>

      <div className="flex justify-end gap-3 my-4">
        <Button onClick={onClose} variant="outlineSecondary">
          Cancelar
        </Button>
        <Button onClick={onConfirm} variant="danger">
          Sí, eliminar
        </Button>
      </div>
    </Modal>
  );
}

export default ConfirmDelete;
