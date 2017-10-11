import React, { Component } from "react";
import Comment from '../components/Comment';
import axios from 'axios';

import styles from '../Styles/styles';

class Comments extends Component {
  constructor() {
    super()

    this.state = {
      comment: {
        username: "",
        body: "",
        timestamp: ''
      },
      list: []
    }
  }

  componentDidMount() {
    axios.get(`api/comments`)
    .then(res => {
      let results = res.data;
      this.setState({
        list: results
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  updateUsername(event) {
    let updatedComment = Object.assign({}, this.state.comment);
    updatedComment['username'] = event.target.value;

    this.setState({
      comment: updatedComment
    })
  }

  updateBody(event) {
    let updatedComment = Object.assign({}, this.state.comment);
    updatedComment['body'] = event.target.value;

    this.setState({
      comment: updatedComment
    })
  }

  submitComment() {
    let updatedList = Object.assign([], this.state.list);
    updatedList.push(this.state.comment);

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
        {/* <h2>Comments: Zone 1</h2> */}
        <div style={styles.comment.commentsBox}>
          <ul style={styles.comment.commentslist}>
            { commentItem }
          </ul>
          <input onChange={this.updateUsername.bind(this)} className="form-control" type="text" placeholder='Enter Username'/><br/>
          <input onChange={this.updateBody.bind(this)} className="form-control" type="text" placeholder='Enter Comments'/><br/>
          <button onClick={this.submitComment.bind(this)} className="btn btn-info">Add Comment</button>
        </div>
      </div>
    )
  }
}

export default Comments
