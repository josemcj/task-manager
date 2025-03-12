import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '@/pages/tasks/redux/taskSlice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
