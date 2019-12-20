import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchCities } from "../actions/citiesActions";
import { fetchItineraries } from "../actions/itinerariesActions";
import { fetchActivities } from "../actions/activitiesActions";

import Header from "../components/layout/Header";
import CmsCards from "../components/layout/CmsCards";

class Cms extends Component {
  componentDidMount() {
    this.props.fetchItineraries();
    this.props.fetchCities();
    this.props.fetchActivities();
  }

  render() {
    return (
      <React.Fragment>
        <Header title={"Uploads"} />

        <div className="cmsCards">
          <CmsCards
            title={"Upload: Cities"}
            subject={"City"}
            createurl={"/cmscity"}
            editurl={"/cmscity/editcity"}
            icon={"explore"}
          />
        </div>

        <div className="cmsCards">
          <CmsCards
            title={"Upload: Itineraries"}
            subject={"Itinerary"}
            createurl={"/cmsitinerary"}
            editurl={"/cmsitinerary/edititinerary"}
            icon={"account_tree"}
          />
        </div>

        <div className="cmsCards">
          <CmsCards
            title={"Upload: Activities"}
            subject={"Activity"}
            createurl={"/cmsactivity"}
            editurl={"/cmsactivity/editactivity"}
            icon={"room"}
          />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.cities,
    itineraries: state.itineraries,
    activites: state.activites,
    profile: state.profile,
    auth: state.auth
  };
};

Cms.propTypes = {
  cities: PropTypes.object
};

export default connect(
  mapStateToProps,
  {
    fetchItineraries,
    fetchCities,
    fetchActivities
  }
)(Cms);
