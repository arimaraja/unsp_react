import React, { Component } from 'react';
import Photo from './Component/photo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Welcome to React </h1>
        </header>
        <p>  Hello!!. </p>
        <Photo />
      </div>
    );
  }
}

export default App;
