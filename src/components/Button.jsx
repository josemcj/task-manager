function Button({ children, variant = 'primary', type = 'button', title = '', onClick = () => null }) {
  const BUTTON_VARIANTS = {
    primary: 'btn-primary',
    danger: 'btn-danger',
  };

  return (
    <button type={type} className={`btn ${BUTTON_VARIANTS[variant]}`} title={title} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
