import React ,{useState}from 'react'
import { TodoItem } from '@/interfaces/TodoItem'
import { Button } from 'antd'

const Todo:React.FC = () => {
    const [todos, setTodos] = useState<TodoItem[]>([])
    const [count ,setCount] = useState<number>(0);

    return (
      <>
      <Button onClick={()=>setCount(count +1)}>點我加一</Button>
      計數器: {count}
        總代辦事項數量: {todos.length}
      </>
    )
  }

export default Todo
