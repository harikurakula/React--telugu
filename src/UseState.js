import React, { useState } from "react"

export const UseState = () => {
  const [name, setName] = useState("hari")
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setName("raki")}>change</button>
    </div>
  )
}
