import React, { Component, PropTypes } from 'react'

class Greeting extends Component {
  render() {
    const { name } = this.props;
    return (
      <h1>Hi {name}.</h1>
    )
  }
}

Greeting.PropTypes = {
  name: PropTypes.string.isRequired
}

export { Greeting as default };
