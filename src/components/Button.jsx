const BUTTON_VARIANTS = {
  primary: 'bg-indigo-400',
};

function Button({ children, variant = 'primary', type = 'button', onClick = () => null }) {
  return (
    <button
      type={type}
      className={`${BUTTON_VARIANTS[variant]} p-3 text-white rounded-xl cursor-pointer`}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
