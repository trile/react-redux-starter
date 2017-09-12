import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { hello: 'Welcome to React!'}
  }

  render() {
    return (
      <h1>{this.state.hello}</h1>
    )
  }
}

export default App;