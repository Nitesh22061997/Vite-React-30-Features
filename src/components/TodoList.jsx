import React, { useState } from 'react'

export default function TodoList() {
    const [input, setInput] = useState("")
    const [todos, setTodos] = useState([])

    const addTodo = () => {
        if (input.trim() !== "") {
            setTodos([...todos, input])
            setInput("")
        }
    }

    const removeTodo = (index) => {
        const updateTodo = todos.filter((_, i) => i !== index)
        setTodos(updateTodo)
    }



    return (
        <div>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button onClick={addTodo}>Add</button>
            <ul>
                {
                    todos.map((todo, index) =>
                    (<li key={index}>
                        {todo}  <button onClick={() => removeTodo(index)}>Remove</button>
                    </li>))
                }

            </ul>
        </div>
    )
}
