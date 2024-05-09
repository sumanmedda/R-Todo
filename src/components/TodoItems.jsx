import { useContext } from "react";
import { ItemsContext } from "../store/ItemsContext";
import TodoItem from "./TodoItem"

function TodoItems(){
  const {todoItems, handleOnDelete} = useContext(ItemsContext)

return(
    <div className="items-container">
      {todoItems.map(item => <TodoItem key={item.id} id={item.id} todoName={item.itemName} todoDate={item.date} handleOnDelete={handleOnDelete}/>)}
    </div>
  )
}

export default TodoItems;
