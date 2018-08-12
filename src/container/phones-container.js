import React from 'react';
import {connect} from 'react-redux';
import FETCH_PHONES as actionCreators from '../actions';
// import Box from '../component/box.js';

class PhoneCon extends React.Component {
  componentWillMount() {
    this.props.fetchPhones();
  }
  render () {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        { postItems }
      </div>
    )
  }
}

const mapsStateToProps = state => ({
  phones: state.phones.items,
});

export default connect (mapStateToProps, actionCreators)(PhoneCon);
