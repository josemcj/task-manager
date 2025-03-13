import { useSelector } from 'react-redux';

export function useTaskStatuses() {
  const statuses = useSelector((state) => state.taskStatuses);

  function all() {
    return statuses;
  }

  return { all };
}
