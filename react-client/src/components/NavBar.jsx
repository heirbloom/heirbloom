import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import "../App.css";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleProfile = this.handleProfile.bind(this);
    this.handleFavRecipes = this.handleFavRecipes.bind(this);

    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogout() {
    // remove the user's token
    sessionStorage.removeItem("token");
    // Redirect them to the home page
    this.props.history.push('/');
  }

  handleProfile() {
    this.props.history.push('/profile');
  }

  handleFavRecipes() {
    this.props.history.push('/fav-recipes');
  }

  render() {
    const { history, user } = this.props;
    // user is an object with the logged-in user's email and zipcode
    // console.log('User', user);
    return (
      <div className="fixed-top container" color="#F7882F">
        <Navbar light expand="md">
          <NavbarBrand href="/" id="logo" className="pl-5">
            Heir<span id="bloom">bloom</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* if user props is passed down (meaning a user is logged-in), show this component) */}
              {user && <NavItem>
                <NavLink 
                  onClick={() => history.push('/market-list')}
                >
                  <i
                    className="fas fa-map-marker-alt fa-2x"
                    id="map-icon"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Find a market near you."
                  ></i>
                </NavLink>
              </NavItem>
            }
              {user && <NavItem>
                <NavLink
                  onClick={() => history.push('/fav-recipes')}
                >
                  <i
                    className="far fa-heart fa-2x"
                    id="fav-icon"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Favorites"
                  ></i>
                </NavLink>
              </NavItem>}
              { user && <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="pr-5" nav caret>
                  <i className="fas fa-user fa-2x"></i>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={this.handleProfile}>
                    Edit Profile</DropdownItem>
                  <DropdownItem onClick={this.handleFavRecipes}>
                    View Favorites</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.handleLogout}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(NavBar);
