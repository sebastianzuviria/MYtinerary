import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';

class IconHome extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/">
          <HomeIcon fontSize="large" className="homeIcon">
            home
          </HomeIcon>
        </Link>
      </React.Fragment>
    );
  }
}

export default IconHome;
