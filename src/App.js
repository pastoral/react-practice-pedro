import './App.css';
import { useState } from 'react';
import { Task } from './To-Do-List-Comp';

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
      <div className="task-list">
        {todoList.map((task)=>{
          return <Task taskName = {task.taskName} id = {task.id} deleteTask = {deleteTask} /> 
          }   
        )}
      </div>
    </div>
  );
}

export default App;
