import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="app">
        <h1>{this.props.greeting}</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {greeting: state.greeting};
}

export default connect(mapStateToProps)(App);
