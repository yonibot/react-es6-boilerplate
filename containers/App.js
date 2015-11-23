import React, { Component, PropTypes } from 'react';
import Greeting from '../components/Greeting';


class App extends Component {
  render() {

    return (
      <div>
        <Greeting name="Johnny Jones"/>
      </div>
    );
  }
}

export { App as default };
