import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faCheckCircle, faEdit } from '@fortawesome/free-solid-svg-icons'

const TodosList = ({ todos, setTodos, setEditTodo }) => {
    const checkBox = <FontAwesomeIcon icon={faCheckCircle} />
    const Edit = <FontAwesomeIcon icon={faEdit} />
    const cancelled = <FontAwesomeIcon icon={faDeleteLeft} />

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed }
                }

                return item;
            }))

    }
    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }
    return (
        <div>
            {
                todos.map((todo) =>
                    <li className='todos-list' key={todo.id}>
                        <input
                            type='text '
                            value={todo.title}
                            onChange={(e) => e.preventDefault()}
                            onClick={(e) => e.target.value}
                            className={`list ${(todo.completed) ? "completed" : ""}`}
                        />
                        <div>
                            <button className='button-complete task-button' onClick={() => handleComplete(todo)} >
                                {checkBox}
                            </button>
                            <button className='button-edit task-button' onClick={() => handleEdit(todo)}>
                                {Edit}
                            </button>
                            <button className='button-delete task-button' onClick={() => handleDelete(todo)}>
                                {cancelled}
                            </button>
                        </div>
                    </li>
                )
            }
        </div>
    )
}

export default TodosList
