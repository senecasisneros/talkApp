import React, { Component } from 'react';
import { CreateLocation, Location } from '../components';
import styles from '../Styles/styles';
import API from './../utils/API';
import { connect } from 'react-redux';
import actions from './../actions/actions';
import store from './../stores/store';

class Locations extends Component {
  constructor() {
    super()

    this.state = {
      selected: 0
    }
  }

  componentDidMount() {
    API.getLocations()
    .then((locations) => {
      this.props.locationsReceived(locations)
    })
  }

  submitLocation(location) {
    API.createLocation(location);
    this.props.locationCreated(location)
  }

  selectLocation(index) {
    this.setState({
      selected: index
    })
  }

  render() {
    const listItems = this.props.list.map((location, index) => {
      let selected = (index == this.state.selected)
      return (
        <li key={index}><Location index={index} select={this.selectLocation.bind(this)}
          isSelected={selected} location={location} /></li>
        )
      })
      return (
        <div style={styles.comment.commentsBox}>
          <ol>
            {listItems}
          </ol>
          <CreateLocation onCreate={this.submitLocation.bind(this)}/>
        </div>
      )
    }
  }

  const stateToProps = (state) => {
    return {
      list: state.location.list
    }
  }

  const dispatchToProps = (dispatch) => {
    return {
      locationsReceived: (locations) => dispatch(actions.locationsReceived(locations)),
      locationCreated: (location) => dispatch(actions.locationCreated(location))
    }
  }

  export default connect(stateToProps, dispatchToProps)(Locations);
