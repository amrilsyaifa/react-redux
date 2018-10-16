// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();


import { createStore } from 'redux'

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            state = state + action.payload
            break
        case 'SUBTRACK':
            state = state - action.payload
            break
    }
    return state
}

const store = createStore(reducer, 10)
store.subscribe(() => {
    console.log('Store Updated', store.getState())
})

store.dispatch({
    type: 'ADD',
    payload: 100
})

store.dispatch({
    type: 'ADD',
    payload: 200
})

store.dispatch({
    type: 'SUBTRACK',
    payload: 50
})