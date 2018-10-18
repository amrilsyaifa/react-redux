import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

import { Main } from '../components/Main'
import { User } from '../components/User'
import { setName } from '../actions/userActions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main changeUsername={() => this.props.setName("anna")} />
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
      dispatch(setName(name))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);