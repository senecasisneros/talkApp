import React, { Component } from "react";
import styles from '../Styles/styles';
import moment from 'moment';

class Comment extends Component {
  render() {
    return (
      <div>
        <p style={styles.comment.body}>{this.props.comment.body}</p>
        <span style={styles.comment.username}>{this.props.comment.username}</span>
        <span style={styles.comment.line}>|</span>
        <span style={styles.comment.timestamp}>{moment(this.props.comment.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</span>
        <hr/>
      </div>
    )
  }
}

export default Comment;
