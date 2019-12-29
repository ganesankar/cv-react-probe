import React from "react";
import { Container, Row, Col } from "reactstrap";
import DateDivider from "../DateDivider";

const Education = props => {
  return (
    <Container fluid>
      {props.data &&
        props.data.values.length > 0 &&
        props.data.values.map((item, index) => {
          return (
            <Row>
              <Col xs="12" sm="12" md="12">
                <div className="content-item">
                  <DateDivider
                    startdate={item.startdate}
                    enddate={item.enddate}
                  />

                  <h3 className="text-primary">{item.name}</h3>
                  <h4>{item.institute}</h4>
                  <p>{item.location}</p>
                  <p>{item.desc}</p>
                </div>
              </Col>
            </Row>
          );
        })}
    </Container>
  );
};

export default Education;
