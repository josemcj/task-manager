import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

function ToggleThemeBtn() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  });

  const handleChangeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [theme]);

  return (
    <button
      onClick={handleChangeTheme}
      className="
        fixed
        bottom-8
        right-8
        p-4
        rounded-full
        bg-indigo-500
        text-white
        shadow-xl
        hover:bg-indigo-600
        dark:bg-indigo-600
        dark:hover:bg-indigo-700
        transition-colors
        cursor-pointer
      "
      title="Cambiar tema">
      {theme === 'light' ? <MoonIcon className="size-4" /> : <SunIcon className="size-4" />}
    </button>
  );
}

export default ToggleThemeBtn;
