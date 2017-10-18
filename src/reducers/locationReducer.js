import constants from '../constants/constants';

var initialState = { //Current state
  list: [], //object on state
  selectedLocation: 0
}

//update the data from the location
export default (state = initialState, action) => {

  var updated = Object.assign({}, state); //Copy of the current state. Current state as a list object

  switch (action.type) {

    case constants.LOCATIONS_RECEIVED:
      updated['list'] = action.locations;
      return updated; //this is the equivalent of this.setState(...)

    case constants.LOCATION_CREATED:
      let updatedList = Object.assign([], updated.list) //copy of the list object that is in the state
      updatedList.push(action.location)
      updated['list'] = updatedList
      return updated

    case constants.SELECT_LOCATION:
      updated['selectedLocation'] = action.selectedLocation
      return updated

    default:
    return state

  }
}

//1. Take copy of the current state
//2. Take a copy of the copy(current state) of the list object
