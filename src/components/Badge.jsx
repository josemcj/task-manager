function Badge({ text, type = 'success' }) {
  const TYPES = {
    success:
      'bg-green-50 text-green-700 ring-green-600/20 ' +
      'dark:bg-green-900/20 dark:text-green-300 dark:ring-green-300/20',
    danger: 'bg-red-50 text-red-700 ring-red-600/10 ' + 'dark:bg-red-900/20 dark:text-red-300 dark:ring-red-300/10',
    warning:
      'bg-yellow-50 text-yellow-800 ring-yellow-600/20 ' +
      'dark:bg-yellow-900/20 dark:text-yellow-300 dark:ring-yellow-300/20',
    secondary:
      'bg-gray-50 text-gray-600 ring-gray-500/10 ' + 'dark:bg-gray-900/20 dark:text-gray-300 dark:ring-gray-300/10',
  };

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${TYPES[type]}`}>
      {text}
    </span>
  );
}

export default Badge;
