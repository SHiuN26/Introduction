import React ,{useState}from 'react'
import { TodoItem } from '@/interfaces/TodoItem'
import { Button } from 'antd'

const Todo:React.FC = () => {
    const [todos, setTodos] = useState<TodoItem[]>([])
  

    return (
      <>
        總代辦事項數量: {todos.length}
      </>
    )
  }

export default Todo
