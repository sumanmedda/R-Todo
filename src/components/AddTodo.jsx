import { useRef } from "react";
import css from "./TodoItem.module.css"
import { MdAddBox } from "react-icons/md";
import { useContext } from "react";
import { ItemsContext } from "../store/ItemsContext";

function AddTodo(){

  const {dateEventValue, handleAddTodoText, handleAddTodoDate, handleAddTodoButton} = useContext(ItemsContext)

  const finalName = useRef()
  const finalDate = useRef()
  
  return(
    <div className="row suman-row">
      <div className="col-6">
        <input ref={finalName} onChange={(event) => handleAddTodoText(event)} type="text" placeholder="Enter Todo Here"/>
      </div>
      <div className="col-4">
        <input type="date" ref={finalDate} value={dateEventValue} onChange={(event) => handleAddTodoDate(event)} />
      </div>
      <div className="col-2">
      <button type="button" onClick = {() => handleAddTodoButton(finalName,finalDate)} className={`btn btn-success ${css["suman-button"]}`}><MdAddBox /></button>
      
      </div>
    </div>
  )
}

export default AddTodo