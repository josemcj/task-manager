import { createSlice } from '@reduxjs/toolkit';
import defaultTasks from '@/data/tasks.json';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: defaultTasks.slice().reverse(),
  reducers: {
    addTask: (state, action) => {
      state.unshift(action.payload);
    },

    updateTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);

      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
