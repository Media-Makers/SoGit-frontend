import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import React, { Component } from "react";

class HorizontalExample extends Component {
  render() {
    return (
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="Username" />
          </Col>
          <Col>
            <Form.Control placeholder="Full Name" />
          </Col>
          <Col>
            <Form.Control placeholder="Password" />
          </Col>
          <Col>
            <Form.Control placeholder="Re-enter Password" />
          </Col>
        </Row>
      </Form>
    );
  }
}

export default HorizontalExample;
