import React, { Component } from 'react';
import styles from '../Styles/styles';
import moment from 'moment';

class Location extends Component {
  render() {
    const locationStyle = styles.location;
    return (
      <div style={locationStyle.container}>
        <h2 style={locationStyle.header}>
          <a style={locationStyle.link} href="#">{this.props.location.name}</a>
        </h2>
        <span className="detail">{this.props.location.zipCodes}</span><br/>
        <span className="detail">{this.props.location.comments} Comments</span><br/>
        <span className="detail">{moment(this.props.location.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</span>
      </div>
    )
  }
}

export default Location;
