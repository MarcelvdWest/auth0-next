type TodoObject = {
    id: string,
    fields: {
        description: string,
        completed?: boolean 
    }     
}

type TodoContext = {
    todos: TodoObject[],
    setTodos: React.Dispatch<React.SetStateAction<TodoObject[]>>,
    refreshTodos: () => Promise<Void>,
    updateTodo: (updateTodo: TodoObject) => Promise<TodoObject[]|void>,
    deleteTodo: (id: string) => Promise<any>,
    addTodo: (description: string) => Promise<any>,
}