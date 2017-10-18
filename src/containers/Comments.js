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
    
    const selectedLocation = this.props.locations[this.props.index]
    const locationName = (selectedLocation==null) ? '' : selectedLocation.name

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
    locations: state.location.list
  }
}

export default connect(stateToProps)(Comments);
