import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return(
          <>
            <Nav>
              <NavItem>
                <NavLink to="/" className="nav-link">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" className="nav-link">Apartment Listings</NavLink>
              </NavItem>
            </Nav>
          </>
        )
      }
    }