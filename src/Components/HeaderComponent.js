import React, { useState } from "react";
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
  DropdownItem,
  Jumbotron,
} from "reactstrap";

const Header = (props) => {
  const [isIsNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => setIsNavbarOpen(!isIsNavbarOpen);

  return (
    <>
      <Navbar
        className="navbar"
        dark
        expand="md"
        style={{
          zIndex: 1,
        }}
      >
        <NavbarBrand
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            paddingTop: "0px",
            paddingBottom: "0px",
          }}
          href="/"
        >
          Out Of Context
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={isIsNavbarOpen} navbar>
          <Nav style={{ position: "fixed", right: 10 }} navbar>
            <NavItem>
              <NavLink
                className="nav-link"
                href="/episodes"
                style={{ color: "white" }}
              >
                EPISODES
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link"
                href="/team"
                style={{ color: "white" }}
              >
                TEAM
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link"
                href="/contact"
                style={{ color: "white" }}
              >
                CONTACT
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" href="#" style={{ color: "white" }}>
                MERCHANDISE
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      {/*<Jumbotron>
        <img src="images/artwork.jpg" alt="OOC" height="300px" width="300px" />
      </Jumbotron>*/}
    </>
  );
};

export default Header;
