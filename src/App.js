import React from 'react';
import { Route, Link } from 'react-router-dom';

import Home from './component/Home';
import About from './component/About';
import Phones from './component/Phones';
import './index.css';


class App extends React.Component {
  render(){
    return (
          <div>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/phones'>Phones</Link></li>
            </ul>
            <Route exact path='/' component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/phones' component = {Phones}></Route>            
        </div>
    )
  }
}

export default App;
// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
