import React, { Component } from "react";
import { Link } from "react-router-dom";
import ExploreIcon from '@material-ui/icons/Explore';

class IconCity extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/cities">
          <ExploreIcon fontSize="large" className="homeIcon">
            location_city
          </ExploreIcon>
        </Link>
      </React.Fragment>
    );
  }
}

export default IconCity;
