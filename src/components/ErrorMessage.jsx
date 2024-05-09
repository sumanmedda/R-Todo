import { useContext } from "react"
import { ItemsContext } from "../store/ItemsContext"

function ErrorMessage() {
  const {todoItems} = useContext(ItemsContext)
  
    return (
      todoItems.length === 0 && <p>No items found</p>
    )
}

export default ErrorMessage