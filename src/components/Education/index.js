import React from "react";
import { Container, Row, Col } from "reactstrap";

const Education = props => {
  console.log("props.data", props.data);
  return (
    <Container fluid>
      {props.data &&
        props.data.values.length > 0 &&
        props.data.values.map((item, index) => {
          return (
            <Row>
              <Col xs="12" sm="12" md="12">
                <div className="content-item">
                  <small>
                    {" "}
                    {item.startdate} - {item.enddate}
                  </small>
                  <h3>{item.name}</h3>
                  <h4>{item.institute}</h4>
                  <p>{item.location}</p>
                </div>
              </Col>
            </Row>
          );
        })}
    </Container>
  );
};

export default Education;
