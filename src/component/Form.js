import React,{useState} from 'react'

function Form({inputText, setInputText , todos, setTodos,status,setStatus, filteredTodos}) {
    const inputTextHandler =(e) =>{
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const statusHandler =(e) =>{
        console.log(e.target.value);
        setStatus(e.target.value);      
      }
      
    const submitTodoHandler =(e) =>{
        e.preventDefault();
        setTodos([
        ...todos,{text: inputText, completed:false, id:Math.random()*1000},  
       ]);  
        setInputText(""); 
        console.log(todos);
     };
    return (
        <div>
            <form>
                <input type="text" className="todo-input" value={inputText} onChange={inputTextHandler}/>
                <button className="todo-button" type="submit" onClick ={submitTodoHandler}> 
                <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange ={statusHandler} name="todos" className="filter-todo">
                        <option value="all"> ALL</option>
                        <option value="completed">Completed</option>
                     <option value="uncompleted">Uncompleted</option>   
                    </select>
            </div>
            </form>
        </div>
    )
}

export default Form
