import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItems from "./components/TodoItems"
import "./App.css"
import CurrentDateTime from "./components/CurrentDateTime"
import Container from "./components/Container"
import { useState, useRef } from "react"
import ErrorMessage from "./components/ErrorMessage"
import { ItemsContext } from "./store/ItemsContext"

function App() {
  let [eventValue, setEventValue] = useState("");
  let [dateEventValue, setDateEventValue] = useState("");
  let [inputText, setinputText] = useState('You Can Add Item');
  let [todoItems, settodoItems] = useState([])
  
  const handleAddTodoText = (event) => {
      setEventValue(event)
      setinputText(event.target.value)
  }

  const handleAddTodoDate = (event) => {
    setDateEventValue(event.target.value)
}

  const handleAddTodoButton = (finalName,finalDate) => {
    console.log('Name:'+finalName.current.value);
    console.log('Date'+finalDate.current.value);
    let inputText = eventValue.target.value
    let curDate = new Date().toLocaleDateString()
    // Adding Item in existing list
    let newItem = [...todoItems,{"id":todoItems.length === 0 ? 1 :todoItems[todoItems.length - 1].id+1,"itemName":inputText,"date":dateEventValue === '' ? curDate :dateEventValue }]
    // Setting new Item
    settodoItems(newItem)
    eventValue.target.value = ""
    dateEventValue = ""
    setDateEventValue("")
    setinputText("You Can Add Item")
  }

  const handleOnDelete = (id) => {
    let delItem = todoItems.filter((item) => {
      return item.id !== id
    })
    settodoItems(delItem)
  }

  return(
  <ItemsContext.Provider value={{dateEventValue, todoItems,handleAddTodoText,handleAddTodoDate,handleAddTodoButton,handleOnDelete}}>
    <Container>
      <center className="todo-main-container">
        <AppName />
        <CurrentDateTime />
        {inputText}
        <AddTodo />
        <div className="items-container">
          <ErrorMessage />
          <TodoItems />
        </div>
      </center>
    </Container>
  </ItemsContext.Provider> 
 )
}

export default App
