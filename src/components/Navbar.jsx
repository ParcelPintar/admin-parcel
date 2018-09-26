import React from 'react';
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import '../styles/Navbar.css';
import logo from '../assets/pp.png';
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md">
          <Link to={`/`}><img src={logo} className="logo" alt="logo"/></Link>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="text-info" href="/">Home</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="text-info" nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
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
