
function ErrorMessage({allItems}) {
    return (
      allItems.length === 0 && <p>No items found</p>
    )
}

export default ErrorMessage