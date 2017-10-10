//Rendering a list of locations/zones
import React, { Component } from 'react';
import Location from '../components/Location.js'

class Locations extends Component {
  constructor() {
    super()

    this.state = {
      list: [
        {name:"Zone 1", zipcode:'90001', comments:11},
        {name:"Zone 2", zipcode:'90002', comments:12},
        {name:"Zone 3", zipcode:'90003', comments:13},
        {name:"Zone 4", zipcode:'90004', comments:14},
        {name:"Zone 5", zipcode:'90005', comments:15}
      ]
    }
  }

  render() {
    const listItems = this.state.list.map((lists, index) => {
      return (
        <li key={index}><Location location={lists} /></li>
      )
    })
    return (
      <div>
        <ol>
          {listItems}
        </ol>
      </div>
    )
  }
}

export default Locations;
