import axios from 'axios';

const API = {
  getLocations: (test) => {
    return axios.get('/api/locations')
    .then(response => {
      let results = response.data;
      return results;
    })
    .catch(console.error);
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
