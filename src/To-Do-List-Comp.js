export const Task = (props) =>{
    return (
        <div> 
          <h4>{props.taskName}</h4>
          <button className='delete-button' onClick={()=>props.deleteTask(props.id)}>X</button>
        </div>
        
      )
}