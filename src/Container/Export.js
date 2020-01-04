import React, { Component } from "react";
import { Spinner, SpinnerSize } from "office-ui-fabric-react/lib/Spinner";
import pdfMake from "pdfmake/build/pdfmake";
import vfsFonts from "pdfmake/build/vfs_fonts";
import { ActionButton } from "office-ui-fabric-react";
import api from "../utils/api";
import isLocalHost from "../utils/isLocalHost";

import {
  sectionTitleBar,
  getIntroContent,
  getExpertiseContent,
  getSkillsContent,
  getExperienceContent,
  getEducationContent,
  getProjectContent
} from "../utils/exportAct";

import AppHeader from "../components/AppHeader";
const { vfs } = vfsFonts.pdfMake;
pdfMake.vfs = vfs;

const css = {
  addFriendIcon: { iconName: "AddFriend" },
  iconStyles: {
    root: {
      color: "#0078D4",
      fontSize: 12
    },
    contact: {
      bold: true,
      alignment: "right"
    },
    introDesc: {
      fontSize: 10,
      noBorders: true,
      lightHorizontalLines: true
    }
  }
};
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

    const {
      documentDefinition,
      sectionTitleLayout,
      tableHorizonBorderOnly
    } = this.state;
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
      const content = [];
      const list = [];
      if (todos.length > 0) {
        todos.forEach(function(item, index) {
          list.push(item.data);
        });
        list.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
        list.forEach(function(item, index) {
          //title
          let titleC = [];
          switch (item.type) {
            case "intro":
              titleC = [];
              break;
            case "social":
              console.log("");
              break;
            case "contacts":
              console.log("");
              break;
            default:
              titleC = sectionTitleBar(item.name);
          }
          content.push(titleC);
          const baseText = { text: item.name.toUpperCase(), fontSize: 12 };
          let val = baseText;
          switch (item.type) {
            case "intro":
              val = getIntroContent(list);
              break;
            case "social":
              val = [];
              break;
            case "contacts":
              val = [];
              break;
            case "expertise":
              val = getExpertiseContent(item, "desc");
              break;
            case "skills":
              val = getSkillsContent(item);
              break;
            case "experience":
              val = getExperienceContent(item);
              break;
            case "education":
              val = getEducationContent(item);
              break;
            case "projects":
              val = getProjectContent(item);
              break;
            case "otherprojects":
              val = baseText;
              break;
            case "awards":
              val = getEducationContent(item);
              break;
            case "profile":
              val = baseText;
              break;

            default:
              val = baseText;
          }
          content.push(val);
        });
        documentDefinition.content = [
          ...[content],
          ...[documentDefinition.content]
        ];
      }

      this.setState({
        todos: list,
        loading: false,
        documentDefinition
      });
    });
  }
  closeModal = e => {
    pdfMake.createPdf(this.state.documentDefinition).open();
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

    return (
      <div className="app">
        {loading && (
          <div className="c-preloader  js-preloader">
            <i className="preloader__spinner">
              {" "}
              <Spinner size={SpinnerSize.large} />
            </i>
          </div>
        )}
        {todos && (
          <div>
            <ActionButton
              styles={css.iconStyles}
              onClick={() => {
                this.closeModal();
              }}
              iconProps={css.addFriendIcon}
              allowDisabledFocus
            >
              Download Pdf
            </ActionButton>
          </div>
        )}
      </div>
    );
  }
}
