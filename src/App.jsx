import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItems from "./components/TodoItems"
import "./App.css"
import CurrentDateTime from "./components/CurrentDateTime"
import Container from "./components/Container"
import ErrorMessage from "./components/ErrorMessage"
import ItemsContextProvider from "./store/ItemsContext"


function App() {
  return(
  <ItemsContextProvider>
    <Container>
      <center className="todo-main-container">
        <AppName />
        <CurrentDateTime />
        <AddTodo />
        <div className="items-container">
          <ErrorMessage />
          <TodoItems />
        </div>
      </center>
    </Container>
  </ItemsContextProvider> 
 )
}

export default App
