function CurrentDateTime(){
  let currDate = new Date().toLocaleDateString()
  let currTime = new Date().toLocaleTimeString()
  return (
  <h1>
    Todays Date is : {currDate} & Time is : {currTime}
  </h1>
  )
}

export default CurrentDateTime