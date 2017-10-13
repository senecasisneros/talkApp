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
        zipCodes: ''
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

  updateZone(event) {
    let targetId = event.target.id;
    let value = event.target.value;

    let updatedZone = Object.assign({}, this.state.zone);
    updatedZone[targetId] = value;

    this.setState({
      zone: updatedZone
    })
  }

  submitZone() {
    let updatedList = Object.assign([], this.state.list);
    updatedList.push(this.state.zone);

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
        <input id="name" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Enter Name"/><br/>
        <input id="zipCode" onChange={this.updateZone.bind(this)} className="form-control" type="text" placeholder="Enter Zip Code"/><br/>
        <button onClick={this.submitZone.bind(this)} className="btn btn-danger">Add Zone</button>
      </div>
    )
  }
}

export default Locations;
