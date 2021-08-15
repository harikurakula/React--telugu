import React from "react"
import { UserContext } from "./Context"

const ComponentC = () => {
  return (
    <div>
      content from component c
      <UserContext.Consumer>
        {(value) => <div>{value}</div>}
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentC
