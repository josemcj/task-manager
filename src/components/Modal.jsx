import { XMarkIcon } from '@heroicons/react/24/solid';

function Modal({ title, open, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className={`${
        open ? 'visible bg-black/20' : 'invisible'
      } fixed inset-0 flex justify-center items-center transition-colors`}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow p-6 transition-all w-2/5 ${
          open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
        }`}>
        <h3 className="font-bold text-2xl">{title}</h3>
        <button
          onClick={onClose}
          className="absolute top-2 right-4 p-3 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600 cursor-pointer">
          <XMarkIcon className="size-6" />
        </button>
        <div className="pt-8">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
