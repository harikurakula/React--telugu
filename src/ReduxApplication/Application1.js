import React from "react"
import { connect } from "react-redux"
import { InAction } from "./actions"
import { DecAction } from "./actions"
const Application1 = ({ local_variable, InAction, DecAction }) => {
  return (
    <div>
      <h1>{local_variable}</h1>
      <br />
      <button onClick={() => InAction(5)}>INCREMENT</button>
      <button onClick={DecAction}>DECREMENT</button>
    </div>
  )
}
const mapStateToProps = (state) => ({
  local_variable: state,
})
export default connect(mapStateToProps, { InAction, DecAction })(Application1)
