import React from 'react'
import { ScrollView, View } from 'tamagui'
import { Task } from './Task'

interface TaskListProps {
  tasks: Array<{ id: string; title: string; status: string }>
  onStatusChange: (id: string, newStatus: string) => void
  onDelete: (id: string) => void
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onStatusChange, onDelete }) => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 10,
      }}
    >
      {tasks.map((task) => (
        <View key={task.id} style={{ margin: 10 }}>
          <Task
            id={task.id}
            title={task.title}
            status={task.status as 'pending' | 'in-progress' | 'completed'}
            onStatusChange={onStatusChange}
            onDelete={onDelete}
          />
        </View>
      ))}
    </ScrollView>
  )
}
