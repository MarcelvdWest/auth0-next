export interface TodoFormProps {
    
}

import React, { useState, useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";
 
const TodoForm: React.FC<TodoFormProps> = () => {
    const [todo, setTodo] = useState('');
    const { addTodo } = useContext(TodosContext)

    return ( 
        <form className="form my-6">
            <div className="flex flex-col text-sm mb-2  ">
                <label className="font-bold mb-2 text-grey-800" htmlFor='todo'>Todo</label> 
                <input 
                    type="text" 
                    name="todo" 
                    id="todo" 
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="ex. Get milk from the shops"
                    className="border border-grey-200 p-2 rounded-lg appearance-none focus:outline-none focus:border-grey-500"
                />
            </div>
            <button type="submit">Submit</button>   
        </form>
     );
}
 
export default TodoForm;