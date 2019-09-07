import React from "react";
import "../App.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
  Col
} from "reactstrap";

const Login = () => {
  return (
    <div class="bg">
      <Row className="mt-5">
        <Col xs={{ size: 7, offset: 4 }} className="mt-5">
          <div className="login-head">
            <h3 className="ml-3">LOGIN</h3>
          </div>
          <div className="login-body pt-3">
            <div className="login-form">
              <Form>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="email"
                    className="ml-3 col-11"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="password"
                    className="ml-3 col-11"
                  />
                </FormGroup>
                <Row>
                  <Col className="col-12">
                    <Button id="login-button" className="float-right mr-4 mb-3">
                      SIGN IN
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
