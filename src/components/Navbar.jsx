import React from 'react';
import {
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
  DropdownItem } from 'reactstrap';
import '../styles/Navbar.css';
import logo from '../assets/pp.png';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md">
          <img src={logo} className="logo" alt="logo" to="/"/>
        </Navbar>
      </div>
    );
  }
}
