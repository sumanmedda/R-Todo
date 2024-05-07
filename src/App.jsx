import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItem from "./components/TodoItem"
import TodoItem1 from "./components/TodoItem1"
import "./App.css"
import CurrentDateTime from "./components/CurrentDateTime"

function App() {
 return (
  <center className="todo-main-container">
    <AppName />
    <CurrentDateTime />
    <AddTodo />
    <div className="items-container">
      <TodoItem />
      <TodoItem1 />
    </div>
  </center>
 )
}

export default App
