import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItems from "./components/TodoItems"
import "./App.css"
import CurrentDateTime from "./components/CurrentDateTime"
import Container from "./components/Container"
import { useState } from "react"
import ErrorMessage from "./components/ErrorMessage"

function App() {
  let [eventValue, setEventValue] = useState("");
  let [dateEventValue, setDateEventValue] = useState("");
  let [inputText, setinputText] = useState('You Can Add Item');
  let [allItems, setallItems] = useState([])
  
  const handleAddTodoText = (event) => {
      setEventValue(event)
      setinputText(event.target.value)
  }

  const handleAddTodoDate = (event) => {
    setDateEventValue(event.target.value)
}

  const handleAddTodoButton = () => {
    let inputText = eventValue.target.value
    let curDate = new Date().toLocaleDateString()
    // Adding Item in existing list
    let newItem = [...allItems,{"id":allItems.length === 0 ? 1 :allItems[allItems.length - 1].id+1,"itemName":inputText,"date":dateEventValue === '' ? curDate :dateEventValue }]
    // Setting new Item
    setallItems(newItem)
    eventValue.target.value = ""
    dateEventValue = ""
    setDateEventValue("")
    setinputText("You Can Add Item")
  }

  const handleOnDelete = (id) => {
    let delItem = allItems.filter((item) => {
      return item.id !== id
    })
    setallItems(delItem)
  }

  return( 
  <Container>
    <center className="todo-main-container">
    <AppName />
    <CurrentDateTime />
    {inputText}
    <AddTodo updatedDate={dateEventValue} handleAddTodoDate={handleAddTodoDate} handleAddTodoText={handleAddTodoText} handleAddTodoButton={handleAddTodoButton} />
    <div className="items-container">
      <ErrorMessage allItems={allItems}/>
      <TodoItems handleOnDelete={handleOnDelete} allItems={allItems}/>
    </div>
  </center>
  </Container>
 )
}

export default App
