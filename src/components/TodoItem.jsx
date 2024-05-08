import css from "./TodoItem.module.css"

function TodoItem({id, todoName, todoDate, handleOnDelete}){

  return(
    <div className="container">
      <div className={`row ${css["suman-row"]}`}>
        <div className="col-6">
          {todoName}
        </div>
        <div className="col-4">
          {todoDate}
        </div>
        <div className="col-2">
          <button type="button" className={`btn btn-danger ${css["suman-button"]}`} onClick = {(e) => handleOnDelete(id)} >Delete</button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem;