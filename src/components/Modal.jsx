import { XMarkIcon } from '@heroicons/react/24/solid';

function Modal({ title, open, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className={`${
        open ? 'visible bg-black/20 dark:bg-black/60' : 'invisible'
      } fixed inset-0 flex justify-center items-center transition-colors px-4 md:px-0`}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white dark:bg-gray-800 rounded-xl shadow p-6 transition-all w-full md:w-2/3 lg:w-2/5 ${
          open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
        }`}>
        <h3 className="font-bold text-2xl dark:text-gray-100">{title}</h3>
        <button
          onClick={onClose}
          className="absolute top-2 right-4 p-3 rounded-lg text-gray-400 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-600 dark:hover:text-white cursor-pointer">
          <XMarkIcon className="size-6" />
        </button>
        <div className="pt-8 dark:text-gray-300">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
