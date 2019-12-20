import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import PropTypes from "prop-types";

class BackButton extends Component {
  render() {
    return (
      <React.Fragment>
        <ArrowBackIosIcon
          fontSize="large"
          className="homeIcon"
          onClick={this.props.history.goBack}
        >
          arrow_back
        </ArrowBackIosIcon>
      </React.Fragment>
    );
  }
}


export default withRouter(BackButton);
