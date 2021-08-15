import React from "react"
import App2 from "./App2"
const App1 = ({ count }) => {
  return (
    <div>
      Count from App1 Component : {count} <br></br>
      <App2 />
    </div>
  )
}

export default App1
