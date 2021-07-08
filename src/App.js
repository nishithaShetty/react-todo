import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './component/Form';
import TodoList from './component/TodoList';


function App() {

  const [inputText, setInputText] = useState(""); 
  const [todos,setTodos] = useState([]);
  const [status,setStatus] =useState("all");
  const [filteredTodos, setFilteredTodos] =useState([]);


  useEffect(() =>{
     getLocalTodos();
  },[]);


  useEffect(() =>{
       console.log("hello");
       filterHandler();
       saveLocalTodos();
  },[todos,status]);

  const saveLocalTodos =() =>{
      localStorage.setItem("todos", JSON.stringify(todos));
      
   };
 
   const getLocalTodos =() =>{
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
   }
    else{
      let todoLocal = JSON.parse(localStorage.getItem("todos") );
      setTodos(todoLocal);
      }
   };



  const filterHandler =() =>{
     switch(status){
          case 'completed':
            setFilteredTodos(todos.filter(todo =>todo.completed === true));
            break;
          case 'uncompleted':
            setFilteredTodos(todos.filter(todo => todo.completed === false));
            break;
          default:
            setFilteredTodos(todos);
            break;
     }
  }


  return (
    <div className="App">
      <header>
        <h2>Nishi's Todo-list</h2> 
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos ={todos} setTodos={setTodos} status = {status} setStatus ={setStatus} filteredTodos={filteredTodos}/>
      <TodoList todos ={todos} setInputText={setInputText} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
