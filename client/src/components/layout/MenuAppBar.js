import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import Avatar from "@material-ui/core/Avatar";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


class MenuAppBar extends React.Component {
constructor(props) {
  super(props);

  this.toggleAcount = this.toggleAcount.bind(this);
  this.toggle = this.toggle.bind(this);
  this.state = {
      isOpen: false,
      navCollapsed: true,
      showNavbar: false,
      isOpen2: false,
      navCollapsed2: true,
      showNavbar2: false
  };
}

toggleDrawer = open => () => {
  this.setState({
    left: open
  });
};

onLogoutClick(e) {
  e.preventDefault();
  this.props.logoutUser();
}

handleChange = event => {
  this.setState({ auth: event.target.checked });
};

handleMenu = event => {
  this.setState({ anchorEl: event.currentTarget });
};

handleClose = () => {
  this.setState({ anchorEl: null });
};




toggle() {
  this.setState({
      isOpen: !this.state.isOpen,
      isOpen2: false 
  });
}
toggleAcount(){
  this.setState({
      isOpen2: !this.state.isOpen2,
      isOpen: false
  });
 }
render() {
  const { isAuthenticated, user } = this.props.auth;

  const loginStateAcount = (
    <div>
      <NavItem button>
        <NavLink onClick={this.onLogoutClick.bind(this)} to="/">
       Log Out
        </NavLink>
      </NavItem>
    </div>
  );

  const loginStateItineraries = (
    <div>
      <NavItem button>
        <NavLink href="/dashboard">
          Favorites
        </NavLink>
      </NavItem>
      <NavItem button>
        <NavLink href="/cms">
          Uploads
        </NavLink>
      </NavItem>
      <NavItem button>
        <NavLink href="/cities">
          Cities
        </NavLink>
      </NavItem>
    </div>
  );


  const logoutStateAcount = (
    <div>
      <NavItem button>
        <NavLink href="/login">
          Login
        </NavLink>
      </NavItem>
      <NavItem button>
        <NavLink href="/signup">
          Create Account
        </NavLink>
      </NavItem>
    </div>
  );

  const logoutStateItineraries = (
    <div>
      <NavItem button>
        <NavLink href="/cities">
        Cities
        </NavLink>
      </NavItem>
    </div>
  );

  const acountList = (
    <div>
      {isAuthenticated ? loginStateAcount : logoutStateAcount}
    </div>
  );

  const itinerariesList = (
    <div>
      {isAuthenticated ? loginStateItineraries : logoutStateItineraries}
    </div>
  );

  const authLinks = (
    <div>
      <div>
          <Avatar
            alt={user.name}
            src={user.avatar}
            title="Gravatar and Image Files supported."
          />
      </div>
    </div>
  );
  const guestLinks = (
    <div className="justify-content-left">
    <img src="/user_image.png" className="user_image" alt="User"/> 
    </div> 
);

  return (
    <div className="container-fluid">
        <Navbar color="light" light fixed="top">
            <Navbar className="align-self-start"onClick={this.toggleAcount}>
                <div className="justify-content-left">
                {isAuthenticated ? authLinks : guestLinks}
                </div> 
                <Collapse isOpen={this.state.isOpen2} navbar>
                <Nav className="ml-auto text-left" navbar>
                         {acountList}
                        </Nav>
                        </Collapse>
            </Navbar>
            <NavbarToggler className="align-self-start" onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto text-right" navbar>
                   {itinerariesList}
                </Nav>
            </Collapse>
        </Navbar>
    </div>
  );
}
}


MenuAppBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(MenuAppBar);
