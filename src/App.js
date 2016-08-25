import React, { Component } from 'react';
import image from './image.png';

class App extends Component {
  render() {
    return (
        <img src={image} role="presentation" />
    );
  }
}

export default App;
