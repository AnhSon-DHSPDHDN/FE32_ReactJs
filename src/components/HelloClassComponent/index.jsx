import React from "react";

class HelloClassComponent extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    const { content } = this.props
    return <h1>{content}</h1>
  }
}

export default HelloClassComponent
