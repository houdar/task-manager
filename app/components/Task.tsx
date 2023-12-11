import React from 'react'
import { ITask } from '@/types/tasks'
interface TaskProps{
  task:ITask
}

const Task: React.FC<TaskProps> = ({task}) => {
  return (
    <tr key={task.id}>
      <td>{task.text}</td>
      <td>hola</td>
    </tr>
  )
}

export default Task