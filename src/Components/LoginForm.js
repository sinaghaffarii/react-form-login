import React, { useState } from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import axios from "axios";

const LoginForm = () => {
  const [formValue, setFormValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    message: "",
    reminder: [],
  });

  const [gender, setGender] = useState("0");

  const onChangeHandler = (e) => {
    console.log(e.target.name);
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // در هدر توکن کاربر را به بک اند ارسال مینمایند تا مشخص بشود هنگام خرید کدام کاربر محصول را خریداری کرده است
    const header = {
      headers: {
        autherization: "Bearer Token",
      },
    };
    // -------- این نوشتن استیت به صورت دوتایی معلوم نیست درست باشد یا نه
    axios.post("URL", `formValue, gender`, header);
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
              <Form.Control
                type="text"
                name="firstname"
                value={formValue.firstname}
                onChange={onChangeHandler}
                placeholder="Enter First Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-primary">Enter Lastname</Form.Label>
              <Form.Control
                type="text"
                name="lastname"
                value={formValue.lastname}
                onChange={onChangeHandler}
                placeholder="Enter Last Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-primary">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formValue.email}
                onChange={onChangeHandler}
                placeholder="name@example.com"
              />
              <Form.Text className="text-whait-50">
                we'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-primary">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formValue.password}
                onChange={onChangeHandler}
                placeholder="Enter Password"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-primary">About you</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formValue.message}
                onChange={onChangeHandler}
                rows={3}
              />
            </Form.Group>
            {/* -------------------------------------------------------------------------- Radio --------------------------- */}
            <div className="d-flex">
              <Form.Group className="mb-3 me-4">
                <Form.Check
                  type="radio"
                  name="gender"
                  value="0"
                  checked={gender === "0"}
                  onChange={(e) => setGender(e.target.value)}
                  label="Male"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  type="radio"
                  name="gender"
                  value="1"
                  checked={gender === "1"}
                  onChange={(e) => setGender(e.target.value)}
                  label="Female"
                />
              </Form.Group>
            </div>
            {/* ------------------------------------------------------------------------- CheckBox ------------------------------------------- */}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                name="reminder"
                value={formValue.reminder}
                onChange={onChangeHandler}
                label="remember me"
              />
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
