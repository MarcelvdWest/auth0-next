export interface TodoProps {
    todo: TodoObject
}

import type { NextPage } from 'next'
import { TodosContext } from '../contexts/TodosContext'
import React, { useContext } from 'react'

const Todo: NextPage<TodoProps> = ({ todo }) => {
    const { updateTodo, deleteTodo } = useContext(TodosContext)

    const handleToggleCompleted = () => {
        const updatedFields = {
            description: todo.fields.description,
            completed: !todo.fields.completed
        }
        const updatedTodo = { id: todo.id, fields: updatedFields };

        updateTodo(updatedTodo)
    }

    return ( 
        <li className="bg-white flex items-center shadow-lg rounded-lg my-2 py-2 px-4">
            <input 
                type="checkbox" 
                name="completed" 
                id="completed" 
                checked={todo.fields.completed} 
                className="mr-2 form-checkbox h-5 w-5"
                onChange={handleToggleCompleted}
            />
            <p className={`flex-1 text-grey-800 ${todo.fields.completed ? 'line-through' : ''}`}>{todo.fields.description}</p>
            <button
                type="button"
                className="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                onClick={() => deleteTodo(todo.id)}
            >
                Delete
            </button>
        </li>
    );
}
 
export default Todo;