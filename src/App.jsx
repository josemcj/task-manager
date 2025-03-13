import ToggleThemeBtn from 'components/ToggleThemeBtn';
import TasksPage from '@/pages/tasks';

function App() {
  return (
    <>
      <main className="py-10">
        <TasksPage />
      </main>

      <ToggleThemeBtn />
    </>
  );
}

export default App;
