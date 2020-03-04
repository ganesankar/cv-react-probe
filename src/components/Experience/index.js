import DateDivider from "../DateDivider";
import React, { Component } from "react";
export default class Experience extends Component {
  state = {
    showmod: {},
    technology: {},
    toogleModal: false,
    isCalloutVisible: false,
    iref: ""
  };
  openModel = item => {
    this.setState({
      toogleModal: !this.state.toogleModal,
      showmod: item
    });
  };

  closeModel = () => {
    this.setState({
      toogleModal: !this.state.toogleModal
    });
  };

  toogleCallOut = (item, iref) => {
    this.setState({
      isCalloutVisible: !this.state.isCalloutVisible,
      iref: iref,
      technology: item
    });
  };

  render() {
    const { showMenu } = this.props;

    const showOrHide = showMenu ? "flex" : "none";

    return (
      <div className="ms-Grid" dir="ltr">
        <div className="ms-Grid-row">
          {this.props.data &&
            this.props.data.values.length > 0 &&
            this.props.data.values.map((item, index) => {
              return (
                <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">fdg</div>
              );
            })}
        </div>
      </div>
    );
  }
}
