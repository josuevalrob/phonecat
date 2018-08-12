import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import MainMenu from './component/Menu';
import Home from './component/Home';
import About from './component/About';
import Phones from './component/Phones';
import './index.css';


class App extends React.Component {

  render(){
    return (
        <Container>
          <MainMenu />
          <Route exact path='/' component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/phones' component = {Phones}></Route>
        </Container>
    )
  }
}

export default App;
// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
