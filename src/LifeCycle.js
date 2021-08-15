import React, { Component } from "react"

class LifeCycle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: true,
      count: 0,
    }
  }
  delHeader = () => {
    this.setState({ show: false })
  }
  componentDidMount() {
    console.log("COmponentDidMount Method")
  }
  componentDidUpdate() {
    console.log("ComponentDidUpdate Method")
  }
  render() {
    let myheader
    if (this.state.show) {
      myheader = <Child />
    }
    return (
      <div>
        <centre>
          {myheader}
          <button type="button" onClick={this.delHeader}>
            Delete Header
          </button>{" "}
          <hr></hr>
          <h3> count: {this.state.count}</h3>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Increment
          </button>
        </centre>
      </div>
    )
  }
}
class Child extends React.Component {
  componentWillUnmount() {
    console.log("ComponentwillUnmount method")
  }
  render() {
    return <h1>hello world</h1>
  }
}

export default LifeCycle
