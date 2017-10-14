import React, { Component } from "react";

class CreateComment extends Component {
  constructor() {
    super()
    this.state = {
      comment: {
        body:'',
        username: ''
      }
    }
  }

  updateComment(event) {
    let updatedComment = Object.assign({}, this.state.comment);
    updatedComment[event.target.id] = event.target.value;
    this.setState({
      comment: updatedComment
    })
  }

  submitComment() {
    this.props.onCreate(this.state.comment);
  }

  render() {
    return (
      <div>
        <h3>Create Comment</h3>
        <input id="username" onChange={this.updateComment.bind(this)} className="form-control" type="text" placeholder='Enter Username'/><br/>
        <input id="body" onChange={this.updateComment.bind(this)} className="form-control" type="text" placeholder='Enter Comments'/><br/>
        <button onClick={this.submitComment.bind(this)} className="btn btn-info">Add Comment</button>
      </div>
    )
  }
}

export default CreateComment;
