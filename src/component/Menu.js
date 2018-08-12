import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

export default class MainMenu extends Component {
 state = {}

 handleItemClick = (e, { name }) => this.setState({ activeItem: name })

 render() {

   return (
     <Menu>
       <Menu.Item as={Link} to="/" content="Home"/>
       <Menu.Item as={Link} to="/about" content="About"/>
       <Menu.Item as={Link} to="/phones" content="Phones"/>

     </Menu>
   )
 }
}
