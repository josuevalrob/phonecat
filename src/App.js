import React from 'react';
import ReactDOM from 'react-dom';

import BoxCon from './container/box-container.js';
import './index.css';

// let store = createStore(reducers, applyMiddleware(thunk))
class App extends React.Component {
  render(){
    return (
      <BoxCon color={this.props.color}/>
    )
  }
}

export default App;
// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
