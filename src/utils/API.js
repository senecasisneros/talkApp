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
  getComments: () => {
    return axios.get('/api/comments')
    .then(res => {
      return res.data
    })
  }
}
// getOne() {
//
// },
// create() {
//
// },
// update() {
//
// },
// deleteOne() {
//
// }

export default API;
