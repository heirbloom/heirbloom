import React, { Component } from "react";
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
    // When logout button is clicked:
    // remove the user's token
    sessionStorage.removeItem("token");
    // Redirect them to the home page
    window.location.href = "/";
  }

  render() {
    return (
      <div className="fixed-top container" color="#F7882F">
        <Navbar light expand="md">
          <NavbarBrand href="/" id="logo" className="pl-5">
            Heir<span id="bloom">bloom</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  <i
                    className="fas fa-map-marker-alt fa-2x"
                    id="map-icon"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Find a market near you."
                  ></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  <i
                    className="far fa-heart fa-2x"
                    id="fav-icon"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Favorites"
                  ></i>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="pr-5" nav caret>
                  <i className="fas fa-user fa-2x"></i>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Edit Profile</DropdownItem>
                  <DropdownItem>View Favorites</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.handleLogout}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
