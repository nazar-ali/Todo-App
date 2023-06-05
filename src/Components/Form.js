import React, { useEffect } from 'react'
import { v4 as uuidv4 } from "uuid";
const Form = ({ input, todos, setInput, setTodos, editTodo, setEditTodo }) => {

    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => {
            return todo.id === id ? { title, id, completed } : todo;
        })
        setTodos(newTodo);
        setEditTodo("")
    }

    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);
        } else {
            setInput("");
        }
    }, [setInput, editTodo])
    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!editTodo) {
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
            setInput("")
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }

    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Todos-List'
                className='task-input'
                value={input}
                required
                onChange={handleInput} />
            <button className='button-add' type='submit'  >
                {editTodo ? "Save" : "Add"}
            </button>
        </form>
    )
}

export default Form
