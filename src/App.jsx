import ToggleThemeBtn from 'components/ToggleThemeBtn';
import TasksPage from '@/pages/tasks';

function App() {
  return (
    <>
      <main className="py-10 px-4 md:px-0">
        <TasksPage />
      </main>

      <ToggleThemeBtn />
    </>
  );
}

export default App;
