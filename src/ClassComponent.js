import React, { Component } from "react"

export class ClassComponent extends Component {
  state = {
    name: "baby",
  }
  render() {
    return (
      <div>
        <h2>welcome {this.state.name}</h2>
      </div>
    )
  }
}

export default ClassComponent
