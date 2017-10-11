import React, { Component } from 'react';
import Locations from "../containers/Locations";
import Comments from "../containers/Comments";

class Layout extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Locations />
          </div>
          <div className="col-md-8">
            <Comments />
          </div>
        </div>
      </div>
    )
  }
}

export default Layout;
