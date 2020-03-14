import React, { Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
// Redux
import { connect } from "react-redux";

class Header extends React.Component {
  state = {
    modal: false,
    title: "",
    menu: [
      { id: 1, name: "Vix", path: "/vis" },
      { id: 1, name: "highchart", path: "/highchart" },
      { id: 1, name: "timeline", path: "/timeline" }
    ]
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handlesChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handlesSubmit = e => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.addPost(post);
    this.toggle();
  };

  render() {
    const allPosts = this.state.menu.map(item => {
      return (
        <div className="card my-1" key={item.id}>
          <div className="card-body">
          <a class="active" aria-current="page" href={item.path}>{item.name}</a>
          </div>
        </div>
      );
    });
    return (
      <Fragment>
        <span
          className="corner-ribbon top-right sticky blue"
          onClick={this.toggle}
        >
          {""}
        </span>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>{allPosts}</ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default connect(null)(Header);
