import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'tamagui'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../store/store'
import { addTask, updateTaskStatus, deleteTask } from '../store/tasksSlice'
import { TaskList } from '../components/TaskList'
import { TaskForm } from '../components/TaskForm'
import { fetchTasks, createTask, updateTask, deleteTask as apiDeleteTask } from '../api/taskApi'

export const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>()
  const tasks = useSelector((state: RootState) => state.tasks.tasks)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const tasksData = await fetchTasks()
        tasksData.forEach((task) => dispatch(addTask({ title: task.title })))
      } catch (error) {
        console.error('Error loading tasks:', error)
      } finally {
        setLoading(false)
      }
    }
    loadTasks()
  }, [dispatch])

  const handleAddTask = async (title: string) => {
    try {
      const newTask = await createTask(title)
      dispatch(addTask(newTask))
    } catch (error) {
      console.error('Failed to add task:', error)
    }
  }
  const handleStatusChange = async (id: number, newStatus: string) => {
    console.log('Updating task:', id, 'New Status:', newStatus)
    try {
      await updateTask(id, newStatus)
      dispatch(updateTaskStatus({ id, status: newStatus as any }))
    } catch (error) {
      console.error('Error updating task status:', error)
    }
  }

  const handleDeleteTask = async (id: number) => {
    await apiDeleteTask(id)
    dispatch(deleteTask({ id }))
  }

  return (
    <View
      justifyContent="center"
      alignItems="center"
      height="100%"
      padding={20}
      backgroundColor="#141824"
    >
      <Text fontSize={36} fontWeight="bold" color="#e8e4d8" marginBottom={20}>
        Task Manager
      </Text>
      <View
        width="80%"
        padding={20}
        backgroundColor="white"
        borderRadius={12}
        shadowColor="rgba(0, 0, 0, 0.1)"
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={0.8}
        shadowRadius={8}
      >
        <TaskForm onAddTask={handleAddTask} />
        <ScrollView horizontal marginTop={20}>
          <TaskList tasks={tasks} onStatusChange={handleStatusChange} onDelete={handleDeleteTask} />
        </ScrollView>
      </View>
    </View>
  )
}
