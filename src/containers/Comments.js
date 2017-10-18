import React, { Component } from "react";
import { CreateComment, Comment } from '../components';
import API from './../utils/API';
import styles from '../Styles/styles';

class Comments extends Component {
  constructor() {
    super()

    this.state = {
      list: []
    }
  }

  componentDidMount() {
    API.getComments()
    .then((results) => {
      this.setState(() => {
        return {
          list: results
        }
      })
    })
  }

  submitComment(comment) {
    // let updatedComment = Object.assign({}, comment);
    // API.createComment(updatedComment);
    API.createComment(comment);
    let updatedList = Object.assign([], this.state.list);
    updatedList.push(updatedComment);
    this.setState({
      list: updatedList
    })
  }

  render() {
    const commentItem = this.state.list.map((comment, index) => {
      return (
        <li key={index}><Comment comment={comment}/></li>
      )
    })
    return (
      <div>
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

export default Comments
