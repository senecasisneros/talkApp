import constants from '../constants/constants';

var initialState = {
  list: []
}

export default (state = initialState, action) => {

  var updated = Object.assign({}, state);

  switch (action.type) {

    case constants.COMMENTS_RECEIVED:
    updated['list'] = action.comments;
    return updated;

    default:
    return state

  }
}
