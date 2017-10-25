import constants from '../constants/constants';

var initialState = {
  commentsLoaded: false,
  list: [],
  map: {}
}

export default (state = initialState, action) => {

  var updated = Object.assign({}, state);

  switch (action.type) {

    case constants.COMMENTS_RECEIVED:
    updated['list'] = action.comments;

    let updateMap = Object.assign({}, updated.map);

    let locationComments = updateMap[action.location._id];

    if (locationComments == null) {
      locationComments = [];
    } else {
      locationComments = Object.assign([], locationComments);
    }

    action.comments.forEach((comment, i) => {
      locationComments.push(comment);
    })

    updateMap[action.location._id] = locationComments;
    updated['map'] = updateMap;

    updated['commentsLoaded'] = true;

    console.log('updated:', updated);

    return updated;

    case constants.SELECT_LOCATION:
    //let updated = Object.assign({}, state)
    updated['commentsLoaded'] = false;
    return updated;

    case constants.COMMENT_CREATED:
    let updatedList = Object.assign([], updated.list);
    updatedList.push(action.comment);
    updated['list'] = updatedList;

    return updated

    default:
    return state
  }
}
