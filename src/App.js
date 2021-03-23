import React, { Component } from 'react';
import { Hello } from './components/hello/hello.component';

class App extends Component {

  state = {
    name: 'Darryl'
  }
  render() {
    return (
      <div className="App">
        <Hello name={this.state.name} />
      </div>
    );
  }
}

export default App;
