import React from 'react';
import {connect} from 'react-redux';
import {loadColor as actionCreators} from '../actions';
import Box from '../component/box.js';

class BoxCon extends React.Component {
  render(){
    return(
      <Box handleClick={this.props.loadColor} color={this.props.color} />
    )
  }
}

const mapStateToProps = (state)=> {
  // return state
  console.log(state.phones.color);
 return state.phones.color
}

export default connect (mapStateToProps, actionCreators)(BoxCon);
