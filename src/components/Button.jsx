const BUTTON_VARIANTS = {
  primary: 'bg-indigo-400',
  danger:
    'text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900',
};

function Button({ children, variant = 'primary', type = 'button', title = '', onClick = () => null }) {
  return (
    <button
      type={type}
      className={`${BUTTON_VARIANTS[variant]} p-3 text-white rounded-xl cursor-pointer`}
      title={title}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
