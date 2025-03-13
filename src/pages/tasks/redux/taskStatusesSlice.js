import { createSlice } from '@reduxjs/toolkit';
import statuses from '@/data/taskStatuses.json';

const taskStatusesSlice = createSlice({
  name: 'taskStatuses',
  initialState: statuses,
  reducers: {},
});

export default taskStatusesSlice.reducer;
