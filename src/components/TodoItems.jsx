import TodoItem from "./TodoItem"

function TodoItems(props){
  let todoItems = props.allItems;
return(
    <div className="items-container">
      {todoItems.map(item => <TodoItem key={item.id} id={item.id} todoName={item.itemName} todoDate={item.date} handleOnDelete={props.handleOnDelete}/>)}
    </div>
  )
}

export default TodoItems;
