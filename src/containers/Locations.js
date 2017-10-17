import React, { Component } from 'react';
import { CreateLocation, Location } from '../components';
import styles from '../Styles/styles';
import API from './../utils/API';

class Locations extends Component {
  constructor() {
    super()

    this.state = {
      selected: 0,
      list: []
    }
  }

  componentDidMount() {
    API.getLocations()
    .then((results) => {
      this.setState(() => {
        return {
          list: results
        }
      })
    })
  }

  submitLocation(location) {
    let updatedLocation = Object.assign({}, location)
    API.createLocation(updatedLocation);
    let updatedList = Object.assign([], this.state.list);
    updatedList.push(updatedLocation);
    this.setState({
      list: updatedList
    })
  }

  selectZone(index) {
    this.setState({
      selected: index
    })
  }

  render() {
    const listItems = this.state.list.map((zone, index) => {
      let selected = (index == this.state.selected)
      return (
        <li key={index}><Location index={index} select={this.selectZone.bind(this)}
          isSelected={selected} location={zone} /></li>
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

  export default Locations;
