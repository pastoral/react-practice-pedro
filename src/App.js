import './App.css';
import { useState } from 'react';

function App() {
  const[todoList,setTodoList] = useState([])
  const[newTask, setNewTask] = useState('')

  const addTask = () =>{
    let newTodoList = [...todoList, newTask]
    setTodoList(newTodoList)
  }
  return (
    <div className="App">
      <p>Hollla Amigo</p>
      <div className="createTask">
        <input onChange={
          (event)=>{
            setNewTask(event.target.value)
          }
        }/>
        <button onClick={addTask}> add task </button>
       
      </div>
      <div className="taskList">
        {todoList.map((task)=>{
          return (<h4>{task}</h4>)
        }   
        )}
      </div>
    </div>
  );
}

export default App;
