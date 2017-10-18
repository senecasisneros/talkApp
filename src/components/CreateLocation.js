import React, { Component } from "react";

class CreateLocation extends Component {
  constructor() {
    super()
    this.state = {
      location: {
        name: '',
        zipCode: ''
      }
    }
  }

  addLocation(event) {
    let updatedZone = Object.assign({}, this.state.location);
    updatedZone[event.target.id] = event.target.value;
    this.setState({
      location: updatedZone
    })
  }

  submitLocation() {
    this.props.onCreate(this.state.location);
  }

  render() {
    return (
      <div>
        <h3>Create Location</h3>
        <input id="name" onChange={this.addLocation.bind(this)} className="form-control" type="text" placeholder="Enter Name"/><br/>
        <input id="zipCode" onChange={this.addLocation.bind(this)} className="form-control" type="text" placeholder="Enter Zip Code"/><br/>
        <button onClick={this.submitLocation.bind(this)} className="btn btn-danger">Add Zone</button>
      </div>
    )
  }
}

export default CreateLocation;
