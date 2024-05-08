import { useState } from "react"
import css from "./TodoItem.module.css"

function AddTodo({updatedDate, handleAddTodoText, handleAddTodoDate, handleAddTodoButton}){
  
  return(
    <div className="row suman-row">
      <div className="col-6">
        <input onChange={(event) => handleAddTodoText(event)} type="text" placeholder="Enter Todo Here"/>
      </div>
      <div className="col-4">
        <input type="date" value={updatedDate} onChange={(event) => handleAddTodoDate(event)} />
      </div>
      <div className="col-2">
      <button type="button" onClick = {() => handleAddTodoButton()} className={`btn btn-success ${css["suman-button"]}`}>Add</button>
      
      </div>
    </div>
  )
}

export default AddTodo