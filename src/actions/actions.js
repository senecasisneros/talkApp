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
  },
  commentsReceived: (comments) => {
    return {
      type: constants.COMMENTS_RECEIVED,
      comments: comments
    }
  },
  commentCreated: (comment) => {
    return {
      type: constants.COMMENT_CREATED,
      comment: comment
    }
  },
  selectLocation: (index) => {
  return {
    type: constants.SELECT_LOCATION,
    selectedLocation: index
  }
}
}
