export const Task = (props) =>{
    return (
        <div style = {{backgroundColor : props.completed ? "green" : "white"}}> 
          <h4>{props.taskName}</h4>
          <button className='delete-button' onClick={()=>props.deleteTask(props.id)}>X</button>
          <button  onClick={()=>props.completeTask(props.id)}>complete task</button>
        </div>
        
      )
}