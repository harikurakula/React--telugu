import React, { useState } from "react"

export const OnChange = () => {
  const [user, setUser] = useState("")
  const handler = (e) => {
    setUser(e.target.value)
  }
  return (
    <div>
      <input
        type="text"
        placeholder="your text"
        value={user}
        onChange={handler}
        name="user"
      />
    </div>
  )
}
