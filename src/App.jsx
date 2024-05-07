import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItems from "./components/TodoItems"
import "./App.css"
import CurrentDateTime from "./components/CurrentDateTime"

function App() {

  let allItems = [
    {"id":1,"itemName":"Buy Milk","date":"04/06/2024",},
    {"id":2,"itemName":"Buy Bread","date":"05/06/2024",},
    {"id":3,"itemName":"Buy Chips","date":"06/06/2024",},
  ]

  return( 
  <center className="todo-main-container">
    <AppName />
    <CurrentDateTime />
    <AddTodo />
    <div className="items-container">
      <TodoItems allItems={allItems}/>
    </div>
  </center>
 )
}

export default App
