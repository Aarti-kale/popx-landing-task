import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CreateAccount = () => {
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
            <h2 className="mb-2">
              Create your
              <br />
              PopX account
            </h2>
          </div>

          <Form>
            <Form.Group className="mb-3" controlId="formFullName">
              <Form.Label className="text-muted">
                Full Name<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="text" placeholder="Marry Doe" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhoneNumber">
              <Form.Label className="text-muted">
                Phone number<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="tel" placeholder="Marry Doe" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmailAddress">
              <Form.Label className="text-muted">
                Email address<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="email" placeholder="Marry Doe" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label className="text-muted">
                Password<span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="password" placeholder="Marry Doe" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCompanyName">
              <Form.Label className="text-muted">Company name</Form.Label>
              <Form.Control type="text" placeholder="Marry Doe" />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="text-muted">
                Are you an Agency?<span className="text-danger">*</span>
              </Form.Label>
              <div>
                <Form.Check
                  inline
                  type="radio"
                  label="Yes"
                  name="agencyRadios"
                  id="agencyYes"
                  defaultChecked
                />
                <Form.Check
                  inline
                  type="radio"
                  label="No"
                  name="agencyRadios"
                  id="agencyNo"
                />
              </div>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100"
              style={{ backgroundColor: "#6c5ce7", borderColor: "#6c5ce7" }}
            >
              Create Account
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateAccount;
