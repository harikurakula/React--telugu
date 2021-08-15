import React, { useState } from "react"

export const FunctionComponent = () => {
  const [name] = useState("amma")
  return (
    <div>
      <h2>welocme to {name}</h2>
    </div>
  )
}
