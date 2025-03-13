import { useState } from 'react';
import TasksPage from '@/pages/tasks';
import { useEffect } from 'react';

function App() {
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
    <>
      <button type="button" onClick={handleChangeTheme}>
        Cambiar tema
      </button>

      <main className="py-6">
        <TasksPage />
      </main>
    </>
  );
}

export default App;
