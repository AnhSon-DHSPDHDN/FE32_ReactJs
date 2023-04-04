import React, { PureComponent } from 'react'

export default class MainComponent extends PureComponent {
  render() {
    console.log("Main Component => Rerender ne!!!");

    return (
      <h3>Main Component</h3>
    )
  }
}
