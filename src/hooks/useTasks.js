import { useSelector, useDispatch } from 'react-redux';
import { addTask, updateTask, deleteTask } from '@/pages/tasks/redux/taskSlice';

export function useTasks() {
  const dispatch = useDispatch();
  const allTasks = useSelector((state) => state.tasks);

  function all() {
    return allTasks;
  }

  function save(task) {
    if (task.id) {
      update(task);
    } else {
      create(task);
    }
  }

  function create(task) {
    dispatch(
      addTask({
        id: Date.now(),
        ...task,
      })
    );
  }

  function update(task) {
    dispatch(updateTask(task));
  }

  function deleteById(id) {
    dispatch(deleteTask(id));
  }

  return { all, save, deleteById };
}
