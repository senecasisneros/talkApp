import React, { Component } from 'react';
import styles from './styles';

class Location extends Component {
  render() {
    const locationStyle = styles.location;
    return (
      <div style={locationStyle.container}>
        <h2 style={locationStyle.header}>
          <a style={locationStyle.link} href="#">{this.props.location.name}</a>
        </h2>
        <span className="detail">{this.props.location.zipcode}</span><br/>
        <span className="detail">{this.props.location.comments} Comments</span>
      </div>
    )
  }
}

export default Location;
