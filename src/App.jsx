import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItem from "./components/TodoItem"
import TodoItem1 from "./components/TodoItem1"

function App() {
 return (
  <center className="todo-container">
    <AppName />
    {/* Todo - Add */}
    <AddTodo />

    {/* Data 1 */}
    <TodoItem />

    {/* Data 2 */}
    <TodoItem1 />
    {/* END */}

  </center>
 )
}

export default App
