import React from 'react';
import '../App.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Signup = () => {
  return (
    <div className="container-fluid login-head position-relative">
      <div className="row" >
        <div className="col" >
          <div className="login-head">
            <h3>SIGNUP</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="login-body">
              <div className="login-form">
                <Form>
                  <FormGroup>
                    <Input type="text" name="username" id="exampleUsername" placeholder="username" />
                  </FormGroup>
                  <FormGroup>
                    <Input type="email" name="email" id="exampleEmail" placeholder="email" />
                  </FormGroup>
                  <FormGroup>
                    <Input type="password" name="password" id="examplePassword" placeholder="password" />
                  </FormGroup>
                  <FormGroup>
                    <Input type="text" name="zipcode" id="exampleZipcode" placeholder="zipcode" />
                  </FormGroup>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
}

export default Signup;