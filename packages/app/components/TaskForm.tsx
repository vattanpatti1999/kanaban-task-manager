import React, { useState } from 'react'
import { View, Input, Button } from 'tamagui'

interface TaskFormProps {
  onAddTask: (title: string) => void
}

export const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = () => {
    if (title.trim()) {
      onAddTask(title.trim())
      setTitle('')
    }
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <Input
        value={title}
        onChangeText={setTitle}
        placeholder="Enter task title"
        style={{
          borderColor: '#141824',
          borderWidth: 1,
          width: '80%',

          marginBottom: 10,
          padding: 10,
          fontSize: 16,
          borderRadius: 5,
        }}
      />
      <Button
        onPress={handleSubmit}
        style={{
          backgroundColor: '#1e2a38',
          width: '20%',
          paddingVertical: 8,
          paddingHorizontal: 12,
          fontSize: 14,
          borderRadius: 20,
        }}
      >
        Add Task
      </Button>
    </View>
  )
}
