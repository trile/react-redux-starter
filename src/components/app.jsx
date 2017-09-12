import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>{this.props.greeting}</h1>
    )
  }
}

function mapStateToProps(state) {
  return {greeting: state.greeting};
}

export default connect(mapStateToProps)(App);
