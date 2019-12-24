import React, { Component, useState } from "react";

import {
  Col,
  Container,
  Row,
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
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
                    <CardHeader>{item.name}</CardHeader>
                    <CardBody>
                      <CardTitle>Special Title Treatment</CardTitle>
                      <CardText>{item.desc}</CardText>
                      <Button
                        onClick={() => {
                          this.openModel(item);
                        }}
                      >
                        Read more
                      </Button>
                    </CardBody>
                    <CardFooter>Footer</CardFooter>
                  </Card>
                </Col>
              );
            })}
        </Row>
        <Modal isOpen={this.state.toogleModal} toggle={this.closeModel}>
          <ModalHeader toggle={this.closeModel}> {showmod.name}</ModalHeader>
          <ModalBody>{showmod.desc} </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.closeModel}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}
