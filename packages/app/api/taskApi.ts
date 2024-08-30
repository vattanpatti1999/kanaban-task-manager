const API_URL = 'https://66ce9fa6901aab24841efe20.mockapi.io/tasks'

interface Task {
  id: number
  title: string
  status: string
}

export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) {
      throw new Error(`Error fetching tasks: ${response.statusText}`)
    }
    const data: Task[] = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching tasks:', error)
    return []
  }
}

export const createTask = async (title: string): Promise<Task> => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        status: 'pending',
      }),
    })
    if (!response.ok) {
      throw new Error(`Error creating task: ${response.statusText}`)
    }
    const data: Task = await response.json()
    return data
  } catch (error) {
    console.error('Error creating task:', error)
    throw error
  }
}

export const updateTask = async (id: number, status: string): Promise<Task> => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    })
    if (!response.ok) {
      throw new Error(`Error updating task: ${response.statusText}`)
    }
    const data: Task = await response.json()
    return data
  } catch (error) {
    console.error('Error updating task:', error)
    throw error
  }
}

export const deleteTask = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    })
    if (!response.ok) {
      throw new Error(`Error deleting task: ${response.statusText}`)
    }
  } catch (error) {
    console.error('Error deleting task:', error)
  }
}
