import React, { Component } from "react";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";
import { CommandBar } from "office-ui-fabric-react/lib/CommandBar";
import ScrollspyNav from "react-scrollspy-nav";

initializeIcons();
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
    replists.forEach(function(item) {
      men.push(item.key);
    });
    return men;
  };
  getMenuArr = replists => {
    const men = [];
    replists.forEach(function(item) {
      switch (item.key) {
        case "social":
          item.text = "SOCIAL";
          break;
        case "intro":
          item.text = "INTRO";
          break;
        case "contacts":
          item.text = "CONTACT";
          break;
        default:
          item.text = item.text.toUpperCase();
      }
      men.push(item);
    });
    return men;
  };

  render() {
    const menuList = this.getMenu(this.props.fabricMenu);
    const menuArr = this.getMenuArr(this.props.fabricMenu);
    return (
      <div className="header">
        <ScrollspyNav scrollTargetIds={menuList} activeNavClass="is-active">
          <CommandBar
            items={[
              {
                key: "component-example-menu",
                name: "Ganesan Karuppaiya"
              }
            ]}
            farItems={[
              {
                key: "newItem",
                text: "MENU",
                iconProps: { iconName: "GlobalNavButton" },
                split: true,
                ariaLabel: "MENU",
                subMenuProps: {
                  items: this.props.fabricMenu
                }
              }
            ]}
          />
        </ScrollspyNav>
      </div>
    );
  }
}
