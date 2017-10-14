import React, { Component } from "react";
import Comment from '../components/Comment';
import axios from 'axios';
import API from './../utils/API'
import styles from '../Styles/styles';

class Comments extends Component {
  constructor() {
    super()

    this.state = {
      comment: {
        username: "",
        body: ""
      },
      list: []
    }
  }

  componentDidMount() {
    API.getComments()
    .then(function(results) {
      this.setState(function () {
        return {
          list: results
        }
      })
    }.bind(this));
  }

  addComment(event) {
    let targetId = event.target.id;
    let value = event.target.value;

    let updatedComment = Object.assign({}, this.state.comment);
    updatedComment[targetId] = value;

    this.setState({
      comment: updatedComment
    })
  }

  submitComment() {
    let updatedComment = Object.assign({}, this.state.comment);
    API.createComment(updatedComment)
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
          <input id="username" onChange={this.addComment.bind(this)} className="form-control" type="text" placeholder='Enter Username'/><br/>
          <input id="body" onChange={this.addComment.bind(this)} className="form-control" type="text" placeholder='Enter Comments'/><br/>
          <button onClick={this.submitComment.bind(this)} className="btn btn-info">Add Comment</button>
        </div>
      </div>
    )
  }
}

export default Comments
