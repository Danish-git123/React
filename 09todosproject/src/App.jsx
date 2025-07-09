import { useEffect, useState } from 'react'
import { TodoProvider } from './context'
import './App.css'
import { TodoForm, TodoItem } from './components'

function App() {

  const [todo, setTodo] = useState([])

  const addTodo = (todo) => {
    setTodo((prev) => [{ id: Date.now(), ...todo, }, ...prev])
  }

  const updateTodo = (id, todo) => {
    // map out the todo elements from array and take one prevTodo as iterator which will check that prevtodo id is equal to todo.id and then do the following work
    setTodo((prev) => (prev.map((prevTodo) => (prevTodo.id === todo.id) ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodo((prev) =>
    (prev.map((prevTodo) =>
      prevTodo.id === id ? { ...prevTodo, completed: !(prevTodo.completed) } : prevTodo
    )
    )
    )
  }

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem('todos'))//we have brought the data from local storage
    if(todos && todos.length >0){
      setTodo(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todo))
  },[todo])

  return (
    <TodoProvider value={{todo, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todo.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
