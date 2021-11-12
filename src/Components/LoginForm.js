import React from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";

const LoginForm = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Row>
      <Col
        md={8}
        lg={6}
        sm={10}
        className="d-flex justify-content-center align-items-center  mx-auto mt-5 "
      >
        <Card className="bg-light w-100  mx-auto  p-4 rounded-3 mt-5 h-100 border-2 shadow">
          <Form onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3">
              <Form.Label className="text-primary">First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-primary">Enter Lastname</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-primary">Email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
              <Form.Text className="text-whait-50">
                we'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-primary">Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-primary">About you</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="remember me" />
            </Form.Group>
            <Button type="submit" className="w-100 text-center ">
              submit
            </Button>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default LoginForm;
