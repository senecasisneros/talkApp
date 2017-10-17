import React, { Component } from 'react';
import styles from '../Styles/styles';
import moment from 'moment';

class Location extends Component {

  onSelectTitle(event) {
    event.preventDefault();
    this.props.select(this.props.index);
  }

  render() {
    const locationStyle = styles.location;
    let title = (this.props.isSelected) ? <a style={locationStyle.link} href="#">{this.props.location.name}</a> : <a href="#">{this.props.location.name}</a>

    return (
      <div style={locationStyle.container}>
        <h2 onClick={this.onSelectTitle.bind(this)} style={locationStyle.header}>
          { title }
        </h2>
        <span className="detail">{this.props.location.zipCode}</span><br/>
        <span className="detail">{this.props.location.comments} Comments</span><br/>
        <span className="detail">{moment(this.props.location.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</span>
      </div>
    )
  }
}

export default Location;
