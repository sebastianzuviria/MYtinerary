import React, { Component } from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from '@material-ui/icons/Favorite';

class IconDashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/dashboard">
          <FavoriteIcon fontSize="large" className="homeIcon">
            dashboard
          </FavoriteIcon>
        </Link>
      </React.Fragment>
    );
  }
}

export default IconDashboard;
