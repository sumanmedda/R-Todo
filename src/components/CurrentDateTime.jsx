import { useEffect } from "react"
import { useState } from "react"

function CurrentDateTime(){
  const [currDate, setCurrDate] = useState(new Date().toLocaleDateString())
  const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString())

  useEffect(()=>{
   
    const intervalId = setInterval(() => {
      setCurrDate(new Date().toLocaleDateString())
      setCurrTime(new Date().toLocaleTimeString())
    }, 1000);

    return ()=>{
      clearInterval(intervalId)
    }

  },[])

  return (
  <h1>
    Todays Date is : {currDate} & Time is : {currTime}
  </h1>
  )
}

export default CurrentDateTime