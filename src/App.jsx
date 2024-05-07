import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItem from "./components/TodoItem"
import "./App.css"
import CurrentDateTime from "./components/CurrentDateTime"

function App() {

  return( 
  <center className="todo-main-container">
    <AppName />
    <CurrentDateTime />
    <AddTodo />
    <div className="items-container">
      <TodoItem />
    </div>
  </center>
 )
}

export default App
