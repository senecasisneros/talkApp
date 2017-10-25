import React, { Component } from "react";
import { CreateComment, Comment } from '../components';
import API from './../utils/API';
import styles from '../Styles/styles';
import { connect } from 'react-redux';
import actions from './../actions/actions';

class Comments extends Component {
  constructor() {
    super()

    this.state = {
      index: 0
    }
  }

  submitComment(comment) {
    let updatedComment = Object.assign({}, comment);

    let location = this.props.locations[this.props.index];
    updatedComment['location'] = location._id;

    API.createComment(updatedComment);
    this.props.commentCreated(updatedComment);
  }

  componentDidUpdate() {
    let location = this.props.locations[this.props.index];
    if(location == null) {
      console.log('NO SELECTED ZONE!!!!')
      return
    }

    if (this.props.commentsLoaded == true) {
      return
    }

    let locationId = location._id;
    API.getOneComment(locationId)
    .then((comments) => {
      this.setState({commentsLoaded: true})
      this.props.commentsReceived(comments, location)
    })
  }

  render() {
    const commentItem = this.props.comments.map((comment, index) => {
      return (
        <li key={index}><Comment comment={comment}/></li>
      )
    })

    const selectedLocation = this.props.locations[this.props.index];
    const locationName = (selectedLocation==null) ? '' : selectedLocation.name;

    return (
      <div>
        <h2> { locationName }</h2>
        <div style={styles.comment.commentsBox}>
          <ul style={styles.comment.commentslist}>
            { commentItem }
          </ul>
          <CreateComment onCreate={this.submitComment.bind(this)}/>
        </div>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    index: state.location.selectedLocation,
    locations: state.location.list,
    comments: state.comment.list,
    commentsLoaded: state.comment.commentsLoaded,
  }
}
const dispatchToProps = (dispatch) => {
  return {
    commentsReceived: (comments, location) => dispatch(actions.commentsReceived(comments, location)),
    commentCreated: (comment) => dispatch(actions.commentCreated(comment))
  }
}

export default connect(stateToProps, dispatchToProps)(Comments);
