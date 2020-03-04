import React, { Component } from "react";
import api from "../utils/api";
import isLocalHost from "../utils/isLocalHost";

export default class Export extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      loading: true,
      toogleModal: true,
      tableHorizonBorderOnly: {
        hLineWidth: function(i, node) {
          if (i === 0 || i === node.table.body.length) {
            return 1;
          }
          return i === node.table.headerRows ? 1 : 0;
        },
        vLineWidth: function(i) {
          return 0;
        },
        hLineColor: function() {
          return "#ccc";
        }
      },

      documentDefinition: {
        pageSize: "A4",
        pageOrientation: "potrait",
        defaultStyle: {
          fontSize: 10,
          lineHeight: 1.2
        },
        content: [
          { text: "React + pdfmake example" },
          "\n",
          {
            table: {
              headerRows: 1,
              dontBreakRows: true,
              body: [
                [
                  { text: "Name", style: "tableHeader" },
                  { text: "Username", style: "tableHeader" },
                  { text: "Email", style: "tableHeader" },
                  { text: "Phone", style: "tableHeader" },
                  { text: "Website", style: "tableHeader" }
                ]
              ]
            }
          }
        ]
      }
    };
  }

  componentDidMount() {
    // Fetch all todos

    const { documentDefinition } = this.state;
  }

  render() {
    const { todos, loading } = this.state;

    return (
      <div className="app">
        {loading && (
          <div className="c-preloader  js-preloader">
            <i className="preloader__spinner"> </i>
          </div>
        )}
      </div>
    );
  }
}
