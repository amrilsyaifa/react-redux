import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

import { Main } from './app/components/Main'
import { User } from './app/components/User'

class App extends Component {
  constructor() {
    super();
  }

  changeUsername(newName) {
  }
  render() {
    return (
      <div className="App">
        <Main changeUsername={this.changeUsername.bind(this)} />
        <User username={this.props.user.name} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    match: state.match
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: 'SET_NAME',
        payload: name
      })
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);