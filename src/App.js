import './App.css';
import { useState } from 'react';

function App() {
  const[todoList,setTodoList] = useState([])
  const[newTask, setNewTask] = useState('')

  const addTask = () =>{
    // let newTodoList = [...todoList, newTask]
    // setTodoList(newTodoList)

    //setTodoList([...todoList, newTask])

    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id +1 ,
      taskName : newTask
    }
    setTodoList([...todoList,task])
  }

  const deleteTask = (id) =>{   // (taskName) =>{
    // ##### Old Code ########
    // const newTodoList = todoList.filter((t)=>{
    //     if(t===taskName){
    //       return false
    //     }
    //     else{
    //       return true
    //     }
    //   }
    // )
    // setTodoList(newTodoList)

    //######## modification 1 ########
  //   const newTodoList = todoList.filter((t)=>{
  //     return t !== taskName
  //   }
  // )
  // setTodoList(newTodoList)

   //######## modification 2 ########
  // const newTodoList = todoList.filter((t)=> t !== taskName)
  // setTodoList(newTodoList)

  // setTodoList(todoList.filter((t)=> t !== taskName))

  setTodoList(todoList.filter((t)=> t.id !== id))
   
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
          return (
            <div> 
              <h4>{task.taskName}</h4>
              <a href = "#"><button onClick={()=>deleteTask(task.id)}>X</button></a>
            </div>
            
            
          )
        }   
        )}
      </div>
    </div>
  );
}

export default App;
