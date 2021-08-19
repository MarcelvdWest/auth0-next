import React, { createContext, useState } from "react";

export const TodosContext = createContext<TodoContext>(undefined!);
 
export const TodosProvider: React.FC = ({ children }) => {
    const [todos, setTodos] = useState<TodoObject[]>([{
        id: '',
        fields: {
            description: '',
            completed: false
        }
    }]);

    const refreshTodos = async () => {
        try {
            const res = await fetch('/api/getTodos')
            const latestTodos = await res.json();
            setTodos(latestTodos)
        }catch(err) {
            console.log(err);
        }
    }

    const addTodo = async (description: string) => {
        try {
            const res = await fetch('api/createTodos', {
                method: 'POST',
                body: JSON.stringify({description}),
                headers: {'Content-Type': 'application/json'}
            })
            const newTodo = await res.json();
            setTodos((prevTodos) => {
                return [newTodo, ...prevTodos]
            })
        }catch (err){
            console.log(err);
        }
    }

    const updateTodo = async (updatedTodo: TodoObject) => {
        try {
            const res = await fetch('api/updateTodos', {
                method: 'PUT',
                body: JSON.stringify(updatedTodo),
                headers: {'Content-Type': 'application/json'}
            })
            await res.json();
            setTodos((prevTodos) => {
                const existingTodos = [...prevTodos]
                const existingTodo = existingTodos.find(todo => 
                    todo.id === updatedTodo.id)!;
                existingTodo.fields = updatedTodo.fields;
                return existingTodos
            })
        }catch (err){
            console.log(err);
        }
    }

    const deleteTodo = async (id: string) => {
        try {
            await fetch('api/deleteTodos', {
                method: 'DELETE',
                body: JSON.stringify({id}),
                headers: {'Content-Type': 'application/json'}
            })

            setTodos((prevTodos) => {
                return prevTodos.filter(todo => todo.id !== id)
            })
        }catch (err){
            console.log(err);
        }
    }
    

    return (
        <TodosContext.Provider 
            value={{
                todos,
                setTodos,
                refreshTodos,
                updateTodo,
                deleteTodo,
                addTodo,
            }}    
        >
            {children}
        </TodosContext.Provider>
    )
    
}