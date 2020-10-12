import React, {useState, useEffect} from 'react';
import { TodoForm } from '../components/todo-form/TodoForm';
import { TodoList } from '../components/todo-list/TodoList';
import { ITodo } from '../interfaces';

declare var confirm: (question: string) => boolean

export const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    console.log('rerender')
  }, [todos])

  const removeHandler = (id: number) => {
    const shouldRemove = confirm('Вы уверены, что хотите удалить элемент?')
    shouldRemove && setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      } return todo
    }))
  }

  return <>
    <TodoForm onAdd={addHandler}/>
    <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
  </>
}