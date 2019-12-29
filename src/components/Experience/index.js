import React, { Component } from "react";

import {
  Col,
  Container,
  Row,
  Card,
  CardSubtitle,
  CardLink,
  CardBody,
  CardTitle,
  CardText,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";

import DateDivider from "../DateDivider";

export default class Experience extends Component {
  state = {
    showmod: {},
    toogleModal: false
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
  render() {
    const { showMenu } = this.props;
    const showOrHide = showMenu ? "flex" : "none";

    return (
      <Container fluid>
        <Row>
          {this.props.data &&
            this.props.data.values.length > 0 &&
            this.props.data.values.map((item, index) => {
              return (
                <Col xs="12" sm="12" md="12">
                  <Card>
                    <CardBody>
                      <CardTitle>{item.name}</CardTitle>
                      <CardSubtitle className="text-info">
                        <a
                          rel="noopener noreferrer"
                          href={item.link}
                          target="_blank"
                          className="text-info"
                        >
                          <i className="fas fa-briefcase in-view"></i>{" "}
                          {item.company}{" "}
                        </a>
                        <i className="fas fa-map-marked in-view"></i>{" "}
                        {item.location}{" "}
                      </CardSubtitle>
                      {item.size && (
                        <span class="badge badge-info">
                          <i class="fas fa-users in-view"></i> {item.size}
                        </span>
                      )} {' '}
                      {item.client && (
                        <span class="badge badge-info">
                          <i class="far fa-building in-view"></i> {item.client}
                        </span>
                      )}
                      <DateDivider startdate={item.startdate}  enddate={item.enddate} />
                      
                      
                      <CardText>{item.desc}</CardText>
                      <hr />

                      {item.values && (
                        <CardLink
                          onClick={() => {
                            this.openModel(item);
                          }}
                        >
                          Read more
                        </CardLink>
                      )}
                      {item.technology &&
                        item.technology.length > 0 &&
                        item.technology.map((item1, index) => {
                          return (
                            <span class="badge badge-info mr-1">{item1}</span>
                          );
                        })}
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
        </Row>
        <Modal
          isOpen={this.state.toogleModal}
          toggle={this.closeModel}
          className="modal-xl"
        >
          <ModalHeader toggle={this.closeModel}>
            {"Responsibilities at "}
            {this.state.showmod.company}
            {" as "}
            {this.state.showmod.name}
          </ModalHeader>
          <ModalBody>
            <ol>
              {this.state.showmod.values &&
                this.state.showmod.values.length > 0 &&
                this.state.showmod.values.map((item, index) => {
                  return <li>{item.name}</li>;
                })}
            </ol>
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}
