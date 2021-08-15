import React from "react"
import action from "..Redux/action"
const App2 = ({ count, increase, decrease }) => {
  return (
    <div>
      Count from App2 Component : {count} <br></br>
      <button onClick={() => increase()}>Increment</button>
      <button onClick={() => decrease()}> decrease</button>
    </div>
  )
}

export default App2
