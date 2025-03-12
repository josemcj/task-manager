const BUTTON_VARIANTS = {
  primary: 'bg-indigo-400',
};

function ButtonPrimary({ children, variant = 'primary' }) {
  return <button className={`${BUTTON_VARIANTS[variant]} p-3 text-white rounded-xl cursor-pointer`}>{children}</button>;
}

export default ButtonPrimary;
