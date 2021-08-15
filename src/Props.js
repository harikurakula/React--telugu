import React, { Component } from "react"

export default class Props extends Component {
  render() {
    return (
      <div>
        <h2>hey i am props {this.props.name}</h2>
      </div>
    )
  }
}
