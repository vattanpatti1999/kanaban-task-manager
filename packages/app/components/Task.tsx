import React from 'react'
import { View, Text, Button } from 'tamagui'

interface TaskProps {
  id: string
  title: string
  status: 'pending' | 'in-progress' | 'completed'
  onStatusChange: (id: string, newStatus: string) => void
  onDelete: (id: string) => void
}

export const Task: React.FC<TaskProps> = ({ id, title, status, onStatusChange, onDelete }) => {
  return (
    <View padding="$2" borderWidth={1} borderColor="#141824" borderRadius="$2">
      <Text style={{ color: '#141824', fontWeight: 'bold', fontSize: 30 }}>{title}</Text>
      <Text style={{ color: '#141824' }}>Status: {status}</Text>
      <View style={{ marginVertical: 8 }}>
        <Button
          onPress={() => onStatusChange(id, 'pending')}
          style={{
            backgroundColor: '#141824',
            borderRadius: 20,
            marginBottom: 8,
            width: 160,
          }}
        >
          <Text style={{ color: '#e8e4d8' }}>Set Pending</Text>
        </Button>
        <Button
          onPress={() => onStatusChange(id, 'in-progress')}
          style={{
            backgroundColor: '#141824',
            borderRadius: 20,
            marginBottom: 8,
            width: 160,
          }}
        >
          <Text style={{ color: '#e8e4d8' }}>Set In Progress</Text>
        </Button>
        <Button
          onPress={() => onStatusChange(id, 'completed')}
          style={{
            backgroundColor: '#141824',
            borderRadius: 20,
            marginBottom: 8,
            width: 160,
          }}
        >
          <Text style={{ color: '#e8e4d8' }}>Set Completed</Text>
        </Button>
        <Button
          onPress={() => onDelete(id)}
          style={{
            backgroundColor: '#141824',
            borderRadius: 20,
            width: 160,
          }}
        >
          <Text style={{ color: '#e8e4d8' }}>Delete</Text>
        </Button>
      </View>
    </View>
  )
}
