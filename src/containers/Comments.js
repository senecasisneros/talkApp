import React, { Component } from "react";
import Comment from '../components/Comment';
import styles from '../components/styles';


class Comments extends Component {
  constructor() {
    super()

    this.state = {
      lists: [
        {username: "User 1", comments: 'First Comment', timestamp:"10:30 pm"},
        {username: "User 2", comments: 'Second Comment', timestamp:"10:30 pm"},
        {username: "User 3", comments: 'Third Comment', timestamp:"10:30 pm"},
        {username: "User 4", comments: 'Fourth Comment', timestamp:"10:30 pm"},
        {username: "User 5", comments: 'Fifth Comment', timestamp:"10:30 pm"}
      ]
    }
  }

  render() {
    const commentItem = this.state.lists.map((comment, index) => {
      return (
        <li key={index}><Comment comment={comment}/></li>
      )
    })
    return (
      <div>
        <h2>Comments: Zone 1</h2>
        <div style={styles.comment.commentsBox}>
          <ul style={styles.comment.commentslist}>
            { commentItem }
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
