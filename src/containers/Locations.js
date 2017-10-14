//Rendering a list of locations/zones
import React, { Component } from 'react';
import Location from '../components/Location.js'
import axios from 'axios';
import moment from 'moment';
import styles from '../Styles/styles';

import API from './../utils/API'

class Locations extends Component {
  constructor() {
    super()

    this.state = {
      zone: {
        name: '',
        zipCode: ''
      },
      list: []
    }
  }

  componentDidMount() {
    API.getLocations()
    .then(function (results) {
      this.setState(function () {
        return {
          list: results
        }
      })
    }.bind(this));
  }

  addLocation(event) {
    let targetId = event.target.id;
    let value = event.target.value;

    let updatedZone = Object.assign({}, this.state.zone);
    updatedZone[targetId] = value;

    this.setState({
      zone: updatedZone
    })
  }

  submitLocation() {
    let updatedLocation = Object.assign({}, this.state.zone)
    // updatedLocation['zipCodes'] = updatedLocation.zipCodes.split(',');    //converting string into an array(for the backend)
    API.createLocation(updatedLocation)
    let updatedList = Object.assign([], this.state.list);
    updatedList.push(updatedLocation);
    this.setState({
      list: updatedList
    })
  }

  render() {
    const listItems = this.state.list.map((zone, index) => {
      return (
        <li key={index}><Location location={zone} /></li>
      )
    })
    return (
      <div style={styles.comment.commentsBox}>
        <ol>
          {listItems}
        </ol>
        <input id="name" onChange={this.addLocation.bind(this)} className="form-control" type="text" placeholder="Enter Name"/><br/>
        <input id="zipCode" onChange={this.addLocation.bind(this)} className="form-control" type="text" placeholder="Enter Zip Code"/><br/>
        <button onClick={this.submitLocation.bind(this)} className="btn btn-danger">Add Zone</button>
      </div>
    )
  }
}

export default Locations;
