import React from "react";

let timer = null

class ComponentLifeCycle extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
    this.state = {
      count: 0
    }
    this.handleIncrement = this.handleIncrement.bind(this)
  }

  componentDidMount() {
    // Gọi API
    // Xử lý default Data
    console.log("Component DidMount ne:::::::", document.querySelector("#component-lifecycle"));
    timer = setInterval(() => {
      console.log("Set Update gia bitcoin");
    }, 1000)
  }

  componentDidUpdate() {
    console.log("Component DidUpdate ne:::::::");
    if (this.state.count === 11) {
      this.setState({
        count: 0
      })
    }
  }

  componentWillUnmount() {
    console.log("Component willUnmount ne:::::::");
    clearInterval(timer)
  }

  handleIncrement() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    console.log("Rendering  ")
    return <div id="component-lifecycle">
      <h1>{this.state.count}</h1>
      <button onClick={this.handleIncrement}>InCrement</button>
    </div>
  }
}

export default ComponentLifeCycle
