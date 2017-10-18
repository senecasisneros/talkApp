import constants from '../constants/constants';

export default {

  locationsReceived: (locations) => {
    return {
      type: constants.LOCATIONS_RECEIVED,
      locations: locations
    }
  },
  locationCreated: (location) => {
    return {
      type: constants.LOCATION_CREATED,
      location: location
    }
  },
  selectLocation: (index) => {
    return {
      type: constants.SELECT_LOCATION,
      selectedLocation: index
    }
  }
}
