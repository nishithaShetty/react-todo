import React from 'react'

function Todo({id,text,setTodos, todos, todo}) {

    const deleteHandler =() =>{  
        setTodos(todos.filter(el =>el.id !== id))  
       
       }

    
const completeHandler =() =>{

    setTodos(todos.map(item =>{
      if(item.id === id){
      return{
       ...item, completed: !item.completed
  }
   }
   return item;
  }))
  }
    
  
  
       
    return (    
            <div className="todo">
                <li className={`todo-item ${todo.completed? "completed":''}`}>{text}</li>
                <button className="complete-btn" onClick={completeHandler}><i  className="fas fa-check"></i></button>
                <button className="trash-btn" onClick={deleteHandler}><i  className="fas fa-trash"></i></button>
        </div>
    )
}

export default Todo
