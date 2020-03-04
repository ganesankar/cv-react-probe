import React, { Component } from "react";

import Section from "../components/Section";
import api from "../utils/api";
import isLocalHost from "../utils/isLocalHost";

import AppHeader from "../components/AppHeader";

export default class Home extends Component {
  state = {
    todos: [],
    loading: true,
    toogleModal: true,
    columns: [
      {
        key: "column1",
        name: "",
        fieldName: "name",
        minWidth: 100,
        maxWidth: 200
      },
      {
        key: "column2",
        name: "",
        fieldName: "value",
        minWidth: 100,
        maxWidth: 200
      }
    ],
    tableData: [
      {
        key: 1,
        name: "JavaScript Framework",
        value: "React JS, Fabric UI,"
      },
      { key: 2, name: "JavaScript Library", value: "Lodash, MomentJS" },
      { key: 3, name: "Server", value: "Netlify, Lambda" },
      { key: 4, name: "CDN", value: "Netlify" },
      { key: 5, name: "Database", value: "FaunaDB" },
      { key: 6, name: "Others", value: "Webpack, Normalize, ESLint, ScSS" }
    ],
    items: [
      {
        key: "ext",
        text: "Ganesan Karuppaiya",
        iconProps: { iconName: "Link" },
        href: "http://ganesan.xyz"
      },
      {
        key: "Info",
        text: "Info",
        iconProps: { iconName: "Info" },
        onClick: () =>
          this.setState({
            toogleModal: !this.state.toogleModal
          })
      }
    ],
    classNames: {}
  };
  componentDidMount() {
    // Fetch all todos
    api.getCv().then(todos => {
      if (todos.message === "unauthorized") {
        if (isLocalHost()) {
          alert(
            "FaunaDB key is not unauthorized. Make sure you set it in terminal session where you ran `npm start`. Visit http://bit.ly/set-fauna-key for more info"
          );
        } else {
          alert(
            "FaunaDB key is not unauthorized. Verify the key `FAUNADB_SERVER_SECRET` set in Netlify enviroment variables is correct"
          );
        }
        return false;
      }

      const list = [];
      if (todos.length > 0) {
        todos.forEach(function(item, index) {
          list.push(item.data);
        });
      }

      this.setState({
        todos: list,
        loading: false
      });
    });
  }

  closeModal = e => {
    this.setState({
      showMenu: false
    });
  };
  toggle = () => {
    this.setState({
      toogleModal: !this.state.toogleModal
    });
  };

  render() {
    const { todos, loading } = this.state;
    todos.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
    const menu = [];
    const fabricMenu = [];
    todos.forEach(function(item, index) {
      let itemis = { name: item.name, id: index, type: item.type };
      let fabricItem = {
        text: item.name,
        key: item.type,
        href: `#${item.type}`
      };
      menu.push(itemis);
      fabricMenu.push(fabricItem);
    });
    return (
      <div className="app">
        {loading && (
          <div className="c-preloader  js-preloader">
            <i className="preloader__spinner"> dfdf</i>
          </div>
        )}
        {todos && (
          <div>
            <AppHeader menu={menu} fabricMenu={fabricMenu} />
            {todos &&
              todos.length > 0 &&
              todos.map((listItem, index) => {
                return (
                  <React.Fragment key={index}>
                    <Section fluid listItem={listItem} />
                  </React.Fragment>
                );
              })}
            <div fluid className={`generalsec1`} />
          </div>
        )}
      </div>
    );
  }
}
