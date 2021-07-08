import React from 'react'
import Todo from  './Todo';

function TodoList({todos ,setInputText, setTodos, filteredTodos}) {
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                {
                filteredTodos && filteredTodos.map((todo) =>(
                    <Todo key ={todo.id} id={todo.id} text ={todo.text} setTodos={setTodos} todos={todos} todo={todo}/>
                    ))
}
                </ul> 
            </div>
        </div>
    )
}

export default TodoList
