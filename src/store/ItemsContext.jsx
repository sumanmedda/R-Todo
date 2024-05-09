import { createContext } from "react";

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