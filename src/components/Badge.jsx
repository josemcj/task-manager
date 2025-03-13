function Badge({ text, type = 'success' }) {
  const TYPES = {
    success: 'badge-success',
    danger: 'badge-danger',
    warning: 'badge-warning',
    secondary: 'badge-secondary',
  };

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${TYPES[type]}`}>
      {text}
    </span>
  );
}

export default Badge;
