import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '@/pages/tasks/redux/taskSlice';
import taskStatusesReducer from '@/pages/tasks/redux/taskStatusesSlice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    taskStatuses: taskStatusesReducer,
  },
});
