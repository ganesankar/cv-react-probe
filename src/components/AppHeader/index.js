import React, { Component } from "react";
import ScrollspyNav from "react-scrollspy-nav";

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
    return <div className="header" />;
  }
}
