import React, { useState, useEffect } from "react"

export const UseEffect = () => {
  const [count, setCount] = useState(0)
  useEffect(() => console.log("clicked"), [count])
  return (
    <div>
      <p>you clicked {count}</p>
      <button onClick={() => setCount(count + 1)}>change</button>
    </div>
  )
}
