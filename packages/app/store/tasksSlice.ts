import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Task {
  id: number
  title: string
  status: 'pending' | 'in-progress' | 'completed'
}

interface TasksState {
  tasks: Task[]
}

const initialState: TasksState = {
  tasks: [],
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload)
    },
    updateTaskStatus: (state, action: PayloadAction<{ id: number; status: Task['status'] }>) => {
      const task = state.tasks.find((t) => t.id === action.payload.id)
      if (task) {
        task.status = action.payload.status
      }
    },
    deleteTask: (state, action: PayloadAction<{ id: number }>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id)
    },
  },
})

export const { addTask, updateTaskStatus, deleteTask } = tasksSlice.actions

export default tasksSlice.reducer
