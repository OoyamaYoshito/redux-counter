import React, { Component } from 'react';
import Counter from "./Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter object="うさぎ"/>
      </div>
    );
  }
}

export default App;
