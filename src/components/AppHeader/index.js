import React, { Component } from "react";

import ScrollspyNav from "react-scrollspy-nav";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink
} from "reactstrap";
export default class AppHeader extends Component {
  state = {
    showmod: {},
    toogleModal: false
  };
  toggle = () => {
    this.setState({
      toogleModal: !this.state.toogleModal
    });
  };
  closeModel = () => {
    this.setState({
      toogleModal: !this.state.toogleModal
    });
  };
  title = listitem => {
    switch (listitem.type) {
      case "social":
        return "SOCIAL";
      case "intro":
        return "INTRO";
      case "contacts":
        return "CONTACT";
      default:
        return listitem.name.toUpperCase();
    }
  };
  getMenu = replists => {
    const men = [];
    replists.forEach(function(item, index) {
      men.push(item.type);
    });
    return men;
  };

  render() {
    const menuArr = this.getMenu(this.props.menu);
    return (
      <div>
        <ScrollspyNav scrollTargetIds={menuArr} activeNavClass="is-active">
          <Navbar color="light" expand="md" className="fixed-top bd-navbar">
            <NavbarBrand href="/">Ganesan Karuppaiya</NavbarBrand>
            <Dropdown
              isOpen={this.state.toogleModal}
              toggle={this.toggle}
              className="pull-right-menu"
            >
              <DropdownToggle >
                <svg
                  class="bi bi-three-dots"
                  width="1em"
                  height="1em"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 11.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </DropdownToggle>
              <DropdownMenu>
                {this.props.menu &&
                  this.props.menu.length > 0 &&
                  this.props.menu.map((item, index) => {
                    return (
                      <DropdownItem>
                        <NavLink href={`#${item.type}`}>
                          {" "}
                          {this.title(item)}
                        </NavLink>
                      </DropdownItem>
                    );
                  })}
              </DropdownMenu>
            </Dropdown>
          </Navbar>
        </ScrollspyNav>
      </div>
    );
  }
}
