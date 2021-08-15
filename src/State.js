import React, { Component } from "react"
import Props from "./Props"
class State extends Component {
  state = {
    name: "i love u",
  }
  render() {
    return (
      <div>
        <center>
          <h2>{this.state.name}</h2>
          <Props name={this.state.name} />
        </center>
      </div>
    )
  }
}

export default State
