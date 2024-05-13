import { useState, createContext } from "react";

export const ItemsContext = createContext(
  {
    dateEventValue : "", 
    todoItems : [],
    handleAddTodoText : () => {},
    handleAddTodoDate : () => {},
    handleAddTodoButton : () => {},
    handleOnDelete: () => {},
  }
)

const ItemsContextProvider = ({children}) => {
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

  return (
    <ItemsContext.Provider value={{dateEventValue,todoItems,handleAddTodoText,handleAddTodoDate,handleAddTodoButton,handleOnDelete}}>
      {children}
    </ItemsContext.Provider>
  )
}

export default ItemsContextProvider;