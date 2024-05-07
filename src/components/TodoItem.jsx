function TodoItem(){
  let todoItems = ["Buy Milk","Get to College","Complete home works"]
  let todoDate = "4/10/2023"

  return <div className="row suman-row">
  <div className="col-6">
    {todoItems.map(items => <li key={items} className="list-group-item">{items}</li>)}
  </div>
  <div className="col-4">
    {todoDate}
  </div>
  <div className="col-2">
  <button type="button" className="btn btn-danger suman-button">Delete</button>
  </div>
</div>
}

export default TodoItem;