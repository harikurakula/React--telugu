import React, { Component } from "react"
import Display from "./Display"
export default class CompoClass extends Component {
  state = {
    name: "hari",
  }

  render() {
    return (
      <div>
        <Display />
        <h1>{this.state.name}</h1>
        <button onClick={() => this.setState({ name: "devi" })}>
          ChangeName
        </button>
      </div>
    )
  }
}
