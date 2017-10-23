import axios from 'axios';

const API = {
  getLocations: () => {
    return axios.get('/api/locations')
    .then(res => {
      let results = res.data;
      return results;
    })
    .catch(console.error);
  },
  createLocation: (location) => {
    axios.post('/api/locations', location)
    .then(res => {
      return res.data
    })
    .catch(console.error);
  },
  getComments: () => {
    return axios.get(`/api/comments`)
    .then(res => {
      return res.data
    })
    .catch(console.error);
  },
  getOneComment: (locationId) => {
    return axios.get(`/api/comments/${locationId}`)
    .then(res => {
      return res.data
    })
    .catch(console.error);
  },
  createComment: (comment) => {
    axios.post('/api/comments', comment)
    .then(res => {
      return res.data;
    })
    .catch(console.error);
  }
}
// update() {
//
// },
// deleteOne() {
//
// }

export default API;
