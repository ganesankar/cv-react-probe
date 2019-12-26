import React, { useState } from "react";
import ScrollspyNav from "react-scrollspy-nav";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const AppHeader = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const title = listitem => {
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
  const getMenu = replists => {
    const men = [];
    replists.forEach(function(item, index) {
      men.push(item.type);
    });
    return men;
  };
  const getMenuList = replists => {
    const men = [];
    replists.forEach(function(item, index) {
      men.push(<a  href={`#${item.type}`} >     {title(item)} </a>);
    });
    return men;
  };
  const menuArr = getMenu(props.menu);
  const menuArrList = getMenuList(props.menu);
  return (
    <div><ScrollspyNav scrollTargetIds={menuArr} activeNavClass="is-active">
      <Navbar color="light" light expand="md" className="fixed-top">
        <NavbarBrand href="/">Ganesan Karuppaiya</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {props.menu &&
              props.menu.length > 0 &&
              props.menu.map((item, index) => {
                return (
                  <NavItem>
                    <NavLink href={`#${item.type}`}>
                      {" "}
                      {title(item)}
                    </NavLink>
                  </NavItem>
                );
              })}

          </Nav>
        </Collapse>
      </Navbar>
     
      </ScrollspyNav>
    </div>
  );
};

export default AppHeader;
