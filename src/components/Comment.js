import React, { Component } from "react";
import styles from './styles';


class Comment extends Component {
  render() {
    return (
      <div>
        <p style={styles.comment.comments}>{this.props.comment.comments}</p>
        <span style={styles.comment.username}>{this.props.comment.username}</span>
        <span style={styles.comment.line}>|</span>
        <span style={styles.comment.timestamp}>{this.props.comment.timestamp}</span>
        <hr/>
      </div>
    )
  }
}

export default Comment;
