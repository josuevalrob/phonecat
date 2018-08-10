import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import BoxCon from './container/box-container.js';
import './index.css';

let store = createStore(reducers, applyMiddleware(thunk))
class App extends React.Component {
  render(){
    return (
      <BoxCon color={this.props.color}/>
    )
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
