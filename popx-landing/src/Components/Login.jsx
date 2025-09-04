import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f0f2f5" }}
    >
      <Row className="w-100">
        <Col
          xs={12}
          sm={10}
          md={6}
          lg={4}
          className="mx-auto p-4 rounded shadow-lg"
          style={{ backgroundColor: "#fff" }}
        >
          <div className="mb-4">
            <h2 className="mb-2">Signin to your PopX account</h2>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-muted">Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email address" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label className="text-muted">Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>

            <Button
              variant="secondary"
              type="submit"
              className="w-100"
              style={{ backgroundColor: "#aaa", borderColor: "#aaa" }}
            >
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
