import React from "react"
import ComponentC from "./ComponentC"
export const UserContext = React.createContext()
const Context = () => {
  return (
    <div>
      <UserContext.Provider value={"telugu skillhib"}>
        <ComponentC />
      </UserContext.Provider>
    </div>
  )
}

export default Context
