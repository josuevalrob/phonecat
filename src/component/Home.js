import React from 'react';
import BoxCon from '../container/box-container';

class Home extends React.Component {
  render() {
    return (
      <div>
        <BoxCon color={this.props.color}/>
      </div>
    );
  }
}
export default Home;
